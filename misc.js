/**
 * Misc Data
 *
 * Add hobbies, fun facts, or other miscellaneous items here.
 *
 * Fields:
 *   - icon: Font Awesome icon class (e.g., "fas fa-futbol", "fas fa-music")
 *   - label: Short label (e.g., "Football", "Music")
 *   - description: (optional) A short description or details
 */

const miscItems = [
    {
        icon: "fas fa-book",
        label: "Reading",
        description: "I have met outstanding advisors and partners in academic and life who actively read and inspired me to maintain this hobby — <a href=\"https://ruocwang.github.io/\" target=\"_blank\">Ruochen Wang</a>, <a href=\"https://mingliiii.github.io/\" target=\"_blank\">Ming Li</a>, and <a href=\"https://scholar.google.com/citations?user=Odjg5fEAAAAJ&hl=en\" target=\"_blank\">Siyu Chen</a>. Check out my <a href=\"https://sordid-leek-82f.notion.site/Reading-2fe515a25c4f80efa8f4ce54b93ea6e6?pvs=73\" target=\"_blank\">reading list</a>."
    },
    {
        icon: "fas fa-dumbbell",
        label: "Working Out",
        description: "Investigating both the mental and physical self is equally important and beneficial. I enjoy hitting the gym regularly. Check out my <a href=\"https://sordid-leek-82f.notion.site/Working-Out-2e1515a25c4f8097802adcfa838d3034\" target=\"_blank\">personal training schedule</a>."
    },
    {
        icon: "fas fa-futbol",
        label: "Football",
        description: "I am a big football fan and support <a href=\"https://www.manutd.com/\" target=\"_blank\">Manchester United</a> since 2013! I enjoy watching matches and playing football with friends. I played as a right fullback and center back in <a href=\"https://xhslink.com/m/3S9h9fhX6gn\" target=\"_blank\">UCLA soccer team</a>."
    },
    {
        icon: "fas fa-door-open",
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
    // Add more items here, e.g.:
    // { icon: "fas fa-music", label: "Music", description: "..." },
    // { icon: "fas fa-gamepad", label: "Gaming", description: "..." },
];

// ========== Render Function ==========

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
                <i class="fas fa-random"></i> Let's Go!
            </button>`;
        }

        return `
            <div class="misc-item">
                <i class="${item.icon} misc-icon"></i>
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
