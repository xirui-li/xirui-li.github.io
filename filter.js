/** Navigation, publication filters, and the news archive. */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navigation = document.getElementById('nav-links');
    const navLinks = [...document.querySelectorAll('[data-section-link]')];
    const header = document.querySelector('.site-header');

    function closeMenu() {
        navigation?.classList.remove('is-open');
        menuToggle?.setAttribute('aria-expanded', 'false');
        menuToggle?.setAttribute('aria-label', 'Open navigation');
    }
    menuToggle?.addEventListener('click', () => {
        const expanded = menuToggle.getAttribute('aria-expanded') !== 'true';
        menuToggle.setAttribute('aria-expanded', String(expanded));
        menuToggle.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
        navigation.classList.toggle('is-open', expanded);
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
            closeMenu();
            menuToggle.focus();
        }
    });
    document.addEventListener('click', event => {
        if (!header.contains(event.target)) closeMenu();
    });
    navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);

    const sections = navLinks.map(link => ({
        link, element: document.querySelector(link.getAttribute('href'))
    })).filter(section => section.element);
    function updateActiveNav() {
        const offset = header.offsetHeight + 32;
        let current = sections[0];
        sections.forEach(section => {
            if (section.element.getBoundingClientRect().top <= offset) current = section;
        });
        sections.forEach(section => {
            const active = section === current;
            section.link.classList.toggle('active', active);
            if (active) section.link.setAttribute('aria-current', 'location');
            else section.link.removeAttribute('aria-current');
        });
    }
    let scrollFrame = 0;
    window.addEventListener('scroll', () => {
        if (scrollFrame) return;
        scrollFrame = requestAnimationFrame(() => {
            updateActiveNav();
            scrollFrame = 0;
        });
    }, { passive: true });
    window.addEventListener('resize', updateActiveNav);
    window.addEventListener('load', updateActiveNav);
    updateActiveNav();

    const newsList = document.getElementById('newsList');
    const newsToggle = document.getElementById('newsToggle');
    if (newsList?.querySelectorAll('.news-item').length > 4 && newsToggle) {
        newsToggle.style.display = 'inline-flex';
        newsToggle.setAttribute('aria-expanded', 'false');
        newsToggle.setAttribute('aria-controls', 'newsList');
        newsToggle.addEventListener('click', () => {
            const expanded = newsList.classList.toggle('expanded');
            newsToggle.setAttribute('aria-expanded', String(expanded));
            newsToggle.querySelector('.toggle-text').textContent = expanded ? 'Show less' : 'Show more';
        });
    }

    const researchTags = [...document.querySelectorAll('.research-tags .research-tag[data-tag]')];
    const clearButtons = [document.getElementById('clearFilterPub')].filter(Boolean);
    const publicationList = document.getElementById('publications-list');
    // Retain the initial order so each selection forms stable groups and All restores it.
    const publications = [...document.querySelectorAll('.publication')];
    const filterStatus = document.getElementById('filterStatus');
    let activeTag = null;

    function applyFilter(tag) {
        activeTag = tag;
        researchTags.forEach(button => {
            const active = button.dataset.tag === tag;
            button.classList.toggle('active', active);
            button.setAttribute('aria-pressed', String(active));
        });
        clearButtons.forEach(button => {
            button.classList.toggle('active', !tag);
            button.setAttribute('aria-pressed', String(!tag));
        });
        const matchingPublications = [];
        const otherPublications = [];
        publications.forEach(publication => {
            const matched = Boolean(tag) && publication.dataset.tags.split(',').includes(tag);
            (matched ? matchingPublications : otherPublications).push(publication);
            publication.classList.toggle('highlighted', matched);
            publication.classList.toggle('dimmed', Boolean(tag) && !matched);
            publication.querySelectorAll('.pub-tag').forEach(button => {
                const active = button.dataset.tag === tag;
                button.classList.toggle('matched', active);
                button.setAttribute('aria-pressed', String(active));
            });
        });
        const orderedPublications = tag
            ? [...matchingPublications, ...otherPublications]
            : publications;
        if (publicationList && orderedPublications.some((publication, index) => publication !== publicationList.children[index])) {
            const focusedControl = publicationList.contains(document.activeElement) ? document.activeElement : null;
            publicationList.replaceChildren(...orderedPublications);
            focusedControl?.focus({ preventScroll: true });
        }
        if (filterStatus) {
            const label = researchTags.find(button => button.dataset.tag === tag)?.textContent;
            filterStatus.textContent = tag
                ? `${matchingPublications.length} of ${publications.length} publications match ${label}. Matching publications are shown first in their original order.`
                : `All ${publications.length} publications shown in their original order.`;
        }
    }
    researchTags.forEach(button => button.addEventListener('click', () => {
        applyFilter(activeTag === button.dataset.tag ? null : button.dataset.tag);
    }));
    clearButtons.forEach(button => button.addEventListener('click', () => applyFilter(null)));
    document.addEventListener('click', event => {
        const button = event.target.closest('.pub-tag');
        if (button) applyFilter(activeTag === button.dataset.tag ? null : button.dataset.tag);
    });
    applyFilter(null);
});
