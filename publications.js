/**
 * Publications Data
 *
 * To add a new publication, simply add a new object to the array below.
 *
 * Fields:
 *   - title: Paper title
 *   - image: (optional) Path to paper thumbnail/teaser image (e.g., "images/paper1.png")
 *   - authors: Array of author names (use { name: "Your Name", me: true } to highlight yourself)
 *   - venue: Conference/Journal name
 *   - venueShort: Abbreviation (e.g., "CVPR", "NeurIPS")
 *   - year: Publication year
 *   - award: (optional) Award text (e.g., "Best Paper", "Spotlight")
 *   - tags: Array of research area tags (should match tags in index.html)
 *   - links: Object with link types as keys (paper, arxiv, code, project, demo, video, slides)
 */

const publications = [
    {
        title: "What does RL improve for Visual Reasoning? A Frankenstein-Style Analysis",
        image: "images/IMG_0398.JPG",  // Add your paper thumbnail here
        altImage: "images/IMG_0398.png",
        authors: [
            { name: "Xirui Li", me: true},
            "Ming Li",
            "Tianyi Zhou",
        ],
        venue: "ArXiv Preprint",
        venueShort: "ArXiv",
        year: 2026,
        // award: "600+ Github Stars",
        tags: ["rlvr", "vlm", "reasoning", "training dynamics"],
        links: {
            paper: "https://arxiv.org/pdf/2503.05132",
            arxiv: "https://arxiv.org/abs/2503.05132",
            code: "https://github.com/tianyi-lab/Frankenstein",
        }
    },
    {
        title: "R1-Zero's \"Aha Moment\" in Visual Reasoning on a 2B Non-SFT Model",
        image: "images/IMG_0397.JPG",  // Add your paper thumbnail here
        altImage: "images/IMG_0397.png",
        authors: [
            { name: "Hengguang Zhou", equalContrib: true },
            { name: "Xirui Li", me: true, equalContrib: true },
            "Ruochen Wang",
            "Minhao Cheng",
            "Tianyi Zhou",
            "Cho-Jui Hsieh"
        ],
        venue: "ArXiv Preprint",
        venueShort: "ArXiv",
        year: 2025,
        award: "600+ Github Stars",
        tags: ["rlvr", "vlm", "reasoning"],
        links: {
            paper: "https://arxiv.org/pdf/2503.05132",
            arxiv: "https://arxiv.org/abs/2503.05132",
            code: "https://github.com/turningpoint-ai/VisualThinker-R1-Zero",
            project: "https://turningpointai.notion.site/the-multimodal-aha-moment-on-2b-model",
        }
    },
    {
        title: "Mossbench: Is your multimodal large language model oversensitive to safe queries?",
        image: "images/IMG_0396.JPG",  // Add your paper thumbnail here
        altImage: "images/IMG_0396.png",
        authors: [
            { name: "Xirui Li", me: true, equalContrib: true },
            { name: "Hengguang Zhou", equalContrib: true },
            "Ruochen Wang",
            "Tianyi Zhou",
            "Minhao Cheng",
            "Cho-Jui Hsieh"
        ],
        venue: "International Conference on Learning Representations",
        venueShort: "ICLR",
        year: 2025,
        // award: "Spotlight",
        tags: ["vlm", "safety"],
        links: {
            paper: "https://arxiv.org/pdf/2406.17806",
            arxiv: "https://arxiv.org/abs/2406.17806",
            code: "https://github.com/xirui-li/MOSSBench",
            project: "https://turningpoint-ai.github.io/MOSSBench/"
        }
    },
    {
        title: "DrAttack: Prompt decomposition and reconstruction makes powerful LLM jailbreakers",
        image: "images/IMG_0395.JPG",  // Add your paper thumbnail here
        altImage: "images/IMG_0395.png",
        authors: [
            { name: "Xirui Li", me: true },
            "Ruochen Wang",
            "Minhao Cheng",
            "Tianyi Zhou",
            "Cho-Jui Hsieh"
        ],
        venue: "Empirical Methods in Natural Language Processing",
        venueShort: "EMNLP",
        year: 2024,
        tags: ["llm", "safety"],
        links: {
            paper: "https://arxiv.org/pdf/2402.16914",
            arxiv: "https://arxiv.org/abs/2402.16914",
            code: "https://github.com/xirui-li/DrAttack",
            project: "https://turningpoint-ai.github.io/DrAttack/"
        }
    }
];

// ========== Render Functions (Do not modify unless necessary) ==========

function renderAuthors(authors) {
    return authors.map(author => {
        if (typeof author === 'string') {
            return author;
        }
        let html = '';
        if (author.me) {
            html = `<span class="me">${author.name}</span>`;
        } else {
            html = author.name;
        }
        if (author.equalContrib) {
            html += '*';
        }
        return html;
    }).join(', ');
}

function renderLinks(links) {
    const linkLabels = {
        paper: 'Paper',
        arxiv: 'arXiv',
        code: 'Code',
        project: 'Project',
        demo: 'Demo',
        video: 'Video',
        slides: 'Slides',
        poster: 'Poster',
        bibtex: 'BibTeX'
    };

    return Object.entries(links)
        .map(([type, url]) => {
            const label = linkLabels[type] || type;
            return `<a href="${url}" class="pub-link">${label}</a>`;
        })
        .join('\n');
}

function renderTags(tags) {
    return tags
        .map(tag => `<span class="pub-tag" data-tag="${tag}">${tag.toUpperCase()}</span>`)
        .join('\n');
}

function renderPublication(pub) {
    const venueDisplay = pub.venueShort
        ? `${pub.venue} (<strong>${pub.venueShort}</strong>), ${pub.year}`
        : `${pub.venue}, ${pub.year}`;

    const awardHtml = pub.award
        ? `<span class="award">🏆 ${pub.award}</span>`
        : '';

    const imageHtml = pub.image
        ? `<div class="pub-image">
               <img src="${pub.image}" alt="${pub.title}"
                    ${pub.altImage ? `data-alt-image="${pub.altImage}" data-original-image="${pub.image}" onclick="togglePubImage(this)" style="cursor:pointer;"` : ''}>
           </div>`
        : '';

    return `
        <div class="publication ${pub.image ? 'has-image' : ''}" data-tags="${pub.tags.join(',')}">
            ${imageHtml}
            <div class="pub-content">
                <div class="pub-title">
                    <a href="${pub.links.paper || pub.links.arxiv || '#'}">${pub.title}</a>
                </div>
                <div class="pub-authors">
                    ${renderAuthors(pub.authors)}
                </div>
                <div class="pub-venue">
                    ${venueDisplay}
                    ${awardHtml}
                </div>
                <div class="pub-links">
                    ${renderLinks(pub.links)}
                </div>
                <div class="pub-tags">
                    ${renderTags(pub.tags)}
                </div>
            </div>
        </div>
    `;
}

function renderAllPublications() {
    const container = document.getElementById('publications-list');
    if (!container) return;

    container.innerHTML = publications.map(renderPublication).join('\n');
}

function togglePubImage(img) {
    const alt = img.getAttribute('data-alt-image');
    const original = img.getAttribute('data-original-image');
    if (!alt) return;
    img.src = img.src.endsWith(alt.split('/').pop()) ? original : alt;
}

// Preload alt publication images to avoid white flash on first toggle
function preloadPubImages() {
    publications.forEach(pub => {
        if (pub.altImage) {
            const img = new Image();
            img.src = pub.altImage;
        }
    });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    renderAllPublications();
    preloadPubImages();
});
