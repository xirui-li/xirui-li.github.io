/** Profile links and navigation. Edit this configuration to update the header. */
const sidebarConfig = {
    profile: { name: "Xirui Li" },
    social: [
        { icon: "mail", url: "mailto:xiruili@umd.edu", title: "Email" },
        { icon: "scholar", url: "https://scholar.google.com/citations?user=7hH0iM8AAAAJ&hl=en", title: "Google Scholar" },
        { icon: "github", url: "https://github.com/xirui-li", title: "GitHub" },
        { icon: "blog", url: "https://xirui-li.github.io/blog/", title: "Blog" },
        { icon: "twitter", url: "https://twitter.com/xiruili7_li", title: "Twitter" },
        { icon: "linkedin", url: "https://www.linkedin.com/in/xirui-li7/", title: "LinkedIn" },
        { icon: "file", url: "files/Xirui_Li_CV_latest.pdf", title: "CV" }
    ],
    nav: [
        { text: "About", href: "#about" },
        { text: "News", href: "#news" },
        { text: "Publications", href: "#publications" },
        { text: "Education", href: "#education" },
        { text: "Experience", href: "#experience" },
        { text: "Misc", href: "#misc" }
    ]
};

// Outline icons use the same 24-unit grid and stroke as the Blog's profile links.
const profileIcons = {
    mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/>',
    scholar: '<path d="m22 10-10-5-10 5 10 5 10-5ZM6 12v5c3 3 9 3 12 0v-5M22 10v6"/>',
    github: '<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>',
    blog: '<path d="M12 20h9M16.5 3.5a2.12 2.12 0 0 1 3 3L9 17l-4 1 1-4Z"/>',
    twitter: '<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM14 2v6h6M8 13h8M8 17h6"/>'
};

function renderSidebar() {
    const header = document.getElementById('sidebar');
    const profileLinks = document.getElementById('profileLinks');
    if (header) {
        header.innerHTML = `
            <nav class="nav-wrap" aria-label="Main navigation">
                <a class="wordmark" href="#about">${sidebarConfig.profile.name}</a>
                <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="nav-links" aria-label="Open navigation">
                    <span></span><span></span>
                </button>
                <div class="nav-links" id="nav-links">
                    ${sidebarConfig.nav.map(item => `<a href="${item.href}" data-section-link>${item.text}</a>`).join('')}
                    <a class="nav-button" href="https://xirui-li.github.io/blog/">Blog</a>
                </div>
            </nav>`;
    }
    if (profileLinks) {
        profileLinks.innerHTML = sidebarConfig.social.map(item => `
            <a href="${item.url}" title="${item.title}" aria-label="${item.title}">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${profileIcons[item.icon]}</svg>
            </a>`).join('');
    }
}

document.addEventListener('DOMContentLoaded', renderSidebar);
