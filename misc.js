/**
 * Misc Data
 *
 * Add hobbies, fun facts, or other miscellaneous items here.
 *
 * Fields:
 *   - icon: Outline icon name from miscIcons (e.g., "reading", "football")
 *   - label: Short label (e.g., "Football", "Music")
 *   - description: (optional) A short description or details
 */

const miscItems = [
    {
        icon: "background",
        label: "Background",
        description: `Before starting my Ph.D., I was a master's student at
            <a href="https://www.ucla.edu/">UCLA</a>.
            I am a member of
            <a href="https://turningpointai.org/">TurningPointAI</a>,
            where I worked under the guidance of
            Dr. <a href="https://ruocwang.github.io/">Ruochen Wang</a> and
            Prof. <a href="https://web.cs.ucla.edu/~chohsieh/">Cho-Jui Hsieh</a>.
            I obtained my B.S. degree from
            <a href="https://www.tum.de/">TUM</a>,
            under the supervision of
            Dr. <a href="https://scholar.google.com/citations?user=Kce9W-8AAAAJ&amp;hl=en">Shen</a> and
            Dr. <a href="https://scholar.google.com/citations?user=Ss1kHO8AAAAJ&amp;hl=en">Qiu</a>.`
    },
    {
        icon: "reading",
        label: "Reading",
        description: "I have met outstanding advisors and partners in academic and life who actively read and inspired me to maintain this hobby — <a href=\"https://ruocwang.github.io/\" target=\"_blank\">Ruochen Wang</a>, <a href=\"https://mingliiii.github.io/\" target=\"_blank\">Ming Li</a>, <a href=\"https://scholar.google.com/citations?user=Odjg5fEAAAAJ&hl=en\" target=\"_blank\">Siyu Chen</a>, and <a href=\"https://dongping-chen.github.io/\" target=\"_blank\">Dongping Chen</a>. Check out my <a href=\"https://sordid-leek-82f.notion.site/Reading-2fe515a25c4f80efa8f4ce54b93ea6e6?pvs=73\" target=\"_blank\">reading list</a>."
    },
    {
        icon: "workout",
        label: "Working Out",
        description: "Investigating both the mental and physical self is equally important and beneficial. I enjoy hitting the gym regularly. Check out my <a href=\"https://sordid-leek-82f.notion.site/Working-Out-2e1515a25c4f8097802adcfa838d3034\" target=\"_blank\">personal training schedule</a>."
    },
    {
        icon: "football",
        label: "Football",
        description: "I am a big football fan and support <a href=\"https://www.manutd.com/\" target=\"_blank\">Manchester United</a> since 2013! I enjoy watching matches and playing football with friends. I played as a right fullback and center back in <a href=\"https://xhslink.com/m/3S9h9fhX6gn\" target=\"_blank\">UCLA soccer team</a>."
    },
    {
        icon: "friends",
        label: "Friend Gate",
        description: "Take a random virtual stroll over to one of my friends' homepage! It's like a digital house call, minus the awkward small talk and the \"sorry, my place is a mess\" excuse!",
        friendGate: true,
        friends: [
            { name: "Ruochen Wang", url: "https://ruocwang.github.io/" },
            { name: "Ming Li", url: "https://mingliiii.github.io/" },
            { name: "Wei Cao", url: "https://vveicao.github.io/" },
            { name: "Dongping Chen", url: "https://dongping-chen.github.io/" },
            { name: "Xiao Liang", url: "https://mastervito.github.io/" },
            { name: "Siyu Chen", url: "https://scholar.google.com/citations?user=Odjg5fEAAAAJ&hl=en" },
            { name: "Johnson Kao", url: "https://johnsonkao0213.github.io/" },
            { name: "Hengguang Zhou", url: "https://hengguangzhou.github.io/" }
        ]
    },
    // Add more items here and define their outline icons in miscIcons below.
];

// ========== Render Function ==========

// Match the profile icons: 24-unit grid, 2-unit rounded strokes, and no fill.
const miscIcons = {
    background: '<path d="m22 10-10-5-10 5 10 5 10-5ZM6 12v5c3 3 9 3 12 0v-5M22 10v6"/>',
    reading: '<path d="M12 5c-3-2-6-2-10-1v16c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1ZM12 5v16"/>',
    workout: '<path d="M7 12h10M3 9H1v6h2M21 9h2v6h-2"/><rect x="3" y="6" width="4" height="12" rx="1"/><rect x="17" y="6" width="4" height="12" rx="1"/>',
    football: '<circle cx="12" cy="12" r="10"/><path d="m12 7 5 4-2 6H9l-2-6ZM12 7V2M17 11l4-2M15 17l3 3M9 17l-3 3M7 11 3 9"/>',
    friends: '<path d="M3 21h18M5 21V3l10 2v16M15 5h4v16M11 12h.01"/>',
    dice: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7 7h.01M17 7h.01M12 12h.01M7 17h.01M17 17h.01"/>'
};

function renderMiscIcon(name, className = 'misc-icon') {
    return `<svg class="${className}" viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${miscIcons[name] || miscIcons.reading}</svg>`;
}

function renderMisc() {
    const container = document.getElementById('misc-list');
    if (!container) return;

    const html = miscItems.map(item => {
        const descHtml = item.description
            ? `<span class="misc-desc">${item.description}</span>`
            : '';

        let extraHtml = '';
        if (item.friendGate && item.friends) {
            extraHtml = `<button class="friend-gate-btn" onclick="visitRandomFriend()">
                ${renderMiscIcon('dice', 'friend-gate-icon')} Let's Go!
            </button>`;
        }

        return `
            <div class="misc-item reveal-item">
                ${renderMiscIcon(item.icon)}
                <div class="misc-text">
                    <span class="misc-label">${item.label}</span>
                    ${descHtml}
                    ${extraHtml}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

function visitRandomFriend() {
    const gateItem = miscItems.find(item => item.friendGate);
    if (!gateItem || !gateItem.friends.length) return;
    const friend = gateItem.friends[Math.floor(Math.random() * gateItem.friends.length)];
    window.open(friend.url, '_blank');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderMisc);
