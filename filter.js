/**
 * UI Interactions
 * Handles tag-based filtering, news toggle, scroll spy, and other UI features
 */

document.addEventListener('DOMContentLoaded', function() {
    // ========== Sidebar Background Switching ==========
    const sidebar = document.getElementById('sidebar');
    let currentBgSection = null;
    let bgDisabled = false;

    // Build background mapping from sidebarConfig
    const sectionBackgrounds = {};
    if (typeof sidebarConfig !== 'undefined' && sidebarConfig.nav) {
        sidebarConfig.nav.forEach(navItem => {
            const sectionId = navItem.href.replace('#', '');
            if (navItem.backgroundImage) {
                sectionBackgrounds[sectionId] = navItem.backgroundImage;
            }
        });
    }

    function updateSidebarBackground(sectionId) {
        if (!sidebar) return;
        currentBgSection = sectionId;

        if (bgDisabled) return;

        const bgImage = sectionBackgrounds[sectionId] ||
            (typeof sidebarConfig !== 'undefined' ? sidebarConfig.defaultBackground : null);

        if (bgImage) {
            sidebar.classList.add('has-bg-image');
            sidebar.style.setProperty('--sidebar-bg-image', `url('${bgImage}')`);
            sidebar.style.setProperty('--sidebar-overlay-opacity',
                typeof sidebarConfig !== 'undefined' ? sidebarConfig.backgroundOverlay : 0.7);
        } else {
            sidebar.classList.remove('has-bg-image');
            sidebar.style.removeProperty('--sidebar-bg-image');
        }
    }

    // ========== Background Toggle Button ==========
    const bgToggle = document.getElementById('bgToggle');

    function disableBackground() {
        bgDisabled = true;
        sidebar.classList.remove('has-bg-image');
        sidebar.style.removeProperty('--sidebar-bg-image');
        if (bgToggle) {
            bgToggle.classList.add('bg-off');
            const icon = bgToggle.querySelector('i');
            if (icon) icon.className = 'fas fa-eye-slash';
        }
    }

    function enableBackground() {
        bgDisabled = false;
        if (bgToggle) {
            bgToggle.classList.remove('bg-off');
            const icon = bgToggle.querySelector('i');
            if (icon) icon.className = 'fas fa-eye';
        }
        const savedSection = currentBgSection;
        currentBgSection = null;
        updateSidebarBackground(savedSection || 'default');
    }

    if (bgToggle) {
        bgToggle.addEventListener('click', function() {
            if (bgDisabled) {
                enableBackground();
            } else {
                disableBackground();
            }
        });
    }

    // ========== Simple Mode Toggle ==========
    const simpleModeToggle = document.getElementById('simpleModeToggle');
    if (simpleModeToggle) {
        simpleModeToggle.addEventListener('click', function() {
            const isActive = this.classList.toggle('active');
            const icon = this.querySelector('i');

            if (isActive) {
                document.body.classList.add('simple-mode');
                icon.className = 'fas fa-image';
                disableBackground();
            } else {
                document.body.classList.remove('simple-mode');
                icon.className = 'fas fa-image';
                enableBackground();
            }
        });
    }

    // ========== Scroll Spy for Navigation ==========
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = [];

    // Collect all sections that have corresponding nav links
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            const section = document.querySelector(href);
            if (section) {
                sections.push({ id: href.substring(1), element: section, link: link });
            }
        }
    });

    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100; // Offset for better UX

        // Check if we're above the first nav section (show default background)
        if (sections.length > 0 && scrollPosition < sections[0].element.offsetTop) {
            navLinks.forEach(link => link.classList.remove('active'));
            updateSidebarBackground('default');
            return;
        }

        // Find the current section
        let currentSection = sections[0];
        for (const section of sections) {
            if (section.element.offsetTop <= scrollPosition) {
                currentSection = section;
            }
        }

        // Update active class
        navLinks.forEach(link => link.classList.remove('active'));
        if (currentSection) {
            currentSection.link.classList.add('active');
            // Update sidebar background
            updateSidebarBackground(currentSection.id);
        }
    }

    // Initial check
    updateActiveNav();

    // Update on scroll (with throttle)
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        if (scrollTimeout) return;
        scrollTimeout = setTimeout(function() {
            updateActiveNav();
            scrollTimeout = null;
        }, 50);
    });

    // Also update when clicking nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            // Update sidebar background on click
            const sectionId = this.getAttribute('href').replace('#', '');
            updateSidebarBackground(sectionId);
        });
    });

    // ========== News Toggle ==========
    const newsList = document.getElementById('newsList');
    const newsToggle = document.getElementById('newsToggle');
    const newsItems = newsList ? newsList.querySelectorAll('.news-item') : [];
    const NEWS_COLLAPSED_COUNT = 4;

    // Only show toggle button if there are more than 4 news items
    if (newsItems.length > NEWS_COLLAPSED_COUNT && newsToggle) {
        newsToggle.style.display = 'flex';

        newsToggle.addEventListener('click', function() {
            const isExpanded = newsList.classList.toggle('expanded');
            const toggleText = this.querySelector('.toggle-text');

            if (isExpanded) {
                toggleText.textContent = 'Show less';
            } else {
                toggleText.textContent = 'Show more';
            }
        });

        // Set initial text
        const toggleText = newsToggle.querySelector('.toggle-text');
        toggleText.textContent = 'Show more';
    }

    // ========== Publication Filtering ==========
    // Get all research tags from both sections
    const allResearchTags = document.querySelectorAll('.research-tags .research-tag');
    const clearButtons = [
        document.getElementById('clearFilter'),
        document.getElementById('clearFilterPub')
    ].filter(Boolean);

    let activeTag = null;

    // Click on any research tag
    allResearchTags.forEach(tag => {
        tag.addEventListener('click', function() {
            const selectedTag = this.getAttribute('data-tag');

            // If clicking the same tag, clear filter
            if (activeTag === selectedTag) {
                clearFilter();
                return;
            }

            activeTag = selectedTag;

            // Update active state on ALL research tags with same data-tag
            allResearchTags.forEach(t => {
                if (t.getAttribute('data-tag') === selectedTag) {
                    t.classList.add('active');
                } else {
                    t.classList.remove('active');
                }
            });

            // Show all clear buttons
            clearButtons.forEach(btn => btn.classList.add('visible'));

            // Filter and highlight publications
            filterPublications(selectedTag);

            // Scroll to publications section if clicked from Research Interests
            if (this.closest('#research')) {
                const pubSection = document.getElementById('publications');
                pubSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Clear filter buttons
    clearButtons.forEach(btn => {
        btn.addEventListener('click', clearFilter);
    });

    function filterPublications(tag) {
        const publications = document.querySelectorAll('.publication');

        publications.forEach(pub => {
            const pubTags = pub.getAttribute('data-tags').split(',');
            const pubTagElements = pub.querySelectorAll('.pub-tag');

            if (pubTags.includes(tag)) {
                // Highlight matching publication
                pub.classList.add('highlighted');
                pub.classList.remove('dimmed');

                // Highlight matching tag within publication
                pubTagElements.forEach(tagEl => {
                    if (tagEl.getAttribute('data-tag') === tag) {
                        tagEl.classList.add('matched');
                    } else {
                        tagEl.classList.remove('matched');
                    }
                });
            } else {
                // Dim non-matching publication
                pub.classList.remove('highlighted');
                pub.classList.add('dimmed');

                pubTagElements.forEach(tagEl => {
                    tagEl.classList.remove('matched');
                });
            }
        });
    }

    function clearFilter() {
        const publications = document.querySelectorAll('.publication');

        activeTag = null;

        // Remove active state from ALL research tags
        allResearchTags.forEach(t => t.classList.remove('active'));

        // Hide all clear buttons
        clearButtons.forEach(btn => btn.classList.remove('visible'));

        // Reset all publications
        publications.forEach(pub => {
            pub.classList.remove('highlighted', 'dimmed');
            pub.querySelectorAll('.pub-tag').forEach(tagEl => {
                tagEl.classList.remove('matched');
            });
        });
    }

    // Also allow clicking on pub-tags to filter
    // Use event delegation since publications are dynamically rendered
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('pub-tag')) {
            const clickedTag = e.target.getAttribute('data-tag');

            // Find and click the corresponding research tag
            const correspondingTag = document.querySelector(`.research-tags .research-tag[data-tag="${clickedTag}"]`);
            if (correspondingTag) {
                correspondingTag.click();
            }
        }
    });
});
