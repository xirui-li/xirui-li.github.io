/**
 * Sidebar Configuration
 *
 * Edit the sidebarConfig object below to customize your profile.
 */

const sidebarConfig = {
    // Background image (set to null for solid color background)
    // Example: "images/sidebar-bg.jpg" or "https://example.com/image.jpg"
    backgroundImage: null,

    // Background overlay opacity (0-1, higher = darker, helps text readability)
    backgroundOverlay: 0.1,

    // Profile
    profile: {
        photo: "images/anime_icon.png",  // Path to your photo, e.g., "images/photo.jpg" (null shows placeholder)
        altPhoto: "images/anime_icon_2.png",  // Alternate photo shown on click
        photoPlaceholder: "X",  // Letter shown when no photo
        name: "Xirui Li",
        title: "Ph.D. Student",
        institution: "University of Maryland"
    },

    // Contact Information (leave empty array to hide)
    contact: [],

    // Social Links
    social: [
        { icon: "ai ai-google-scholar", url: "https://scholar.google.com/citations?user=7hH0iM8AAAAJ&hl=en", title: "Google Scholar" },
        { icon: "fab fa-github", url: "https://github.com/xirui-li", title: "GitHub" },
        { icon: "fab fa-twitter", url: "https://twitter.com/xiruili7_li", title: "Twitter" },
        { icon: "fab fa-linkedin-in", url: "https://www.linkedin.com/in/xirui-li7/", title: "LinkedIn" },
        { icon: "fas fa-file-pdf", url: "https://github.com/xirui-li/xirui-li.github.io/blob/main/files/CV.pdf", title: "CV" },
        { icon: "fas fa-calendar", url: "https://calendly.com/xiruili-umd/30min", title: "Schedule Meeting" }
    ],

    // Navigation Links (each can have its own background image)
    // Add backgroundImage to any nav item to change sidebar background when that section is active
    nav: [
        { text: "News", href: "#news", backgroundImage: "images/bq-news.WEBP" },
        { text: "Publications", href: "#publications", backgroundImage: "images/bq-publications.WEBP" },
        { text: "Education", href: "#education", backgroundImage: "images/bq-education.WEBP" },
        { text: "Experience", href: "#experience", backgroundImage: "images/bq-experience.WEBP" }
    ],

    // Default background (shown when no section is active, e.g., on About section)
    defaultBackground: "images/bq-default.WEBP"
};

// ========== Render Functions (Do not modify unless necessary) ==========

function renderProfile(config) {
    const { profile } = config;

    const clickAttr = profile.altPhoto
        ? ` onclick="toggleProfilePhoto()" style="cursor: pointer;" title="Click to switch!"`
        : '';

    const photoHtml = profile.photo
        ? `<img src="${profile.photo}" alt="${profile.name}" class="profile-photo" id="profilePhoto"${clickAttr}>`
        : `<div class="profile-photo-placeholder">${profile.photoPlaceholder}</div>`;

    return `
        <div class="profile">
            ${photoHtml}
            <h1>${profile.name}</h1>
            ${profile.nameCn ? `<p class="name-cn">${profile.nameCn}</p>` : ''}
            <p class="title">${profile.title}<br>${profile.institution}</p>
        </div>
    `;
}

function renderContact(contact) {
    const items = contact.map(item => {
        const textHtml = item.link
            ? `<a href="${item.link}">${item.text}</a>`
            : `<span>${item.text}</span>`;

        return `
            <div class="contact-item">
                <i class="${item.icon}"></i>
                ${textHtml}
            </div>
        `;
    }).join('');

    return `<div class="contact-info">${items}</div>`;
}

function renderSocial(social) {
    const links = social.map(item => `
        <a href="${item.url}" title="${item.title}"><i class="${item.icon}"></i></a>
    `).join('');

    return `<div class="social-links">${links}</div>`;
}

function renderNav(nav) {
    const links = nav.map(item => `
        <a href="${item.href}">${item.text}</a>
    `).join('');

    return `<nav class="sidebar-nav">${links}</nav>`;
}

function renderSidebar() {
    const container = document.getElementById('sidebar');
    if (!container) return;

    // Apply background image if configured
    if (sidebarConfig.backgroundImage) {
        container.classList.add('has-bg-image');
        container.style.setProperty('--sidebar-bg-image', `url('${sidebarConfig.backgroundImage}')`);
        container.style.setProperty('--sidebar-overlay-opacity', sidebarConfig.backgroundOverlay);
    }

    container.innerHTML = `
        <button class="bg-toggle" id="bgToggle" title="Toggle background image">
            <i class="fas fa-eye"></i>
        </button>
        ${renderProfile(sidebarConfig)}
        ${renderContact(sidebarConfig.contact)}
        ${renderSocial(sidebarConfig.social)}
        ${renderNav(sidebarConfig.nav)}
    `;
}

let showingAltPhoto = false;

function toggleProfilePhoto() {
    const img = document.getElementById('profilePhoto');
    if (!img || !sidebarConfig.profile.altPhoto) return;

    showingAltPhoto = !showingAltPhoto;
    img.src = showingAltPhoto
        ? sidebarConfig.profile.altPhoto
        : sidebarConfig.profile.photo;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderSidebar);
