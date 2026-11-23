/**
 * Publications Data
 *
 * To add a new publication, simply add a new object to the array below.
 *
 * Fields:
 *   - title: Paper title
 *   - authors: Array of author names (use { name: "Your Name", me: true } to highlight yourself)
 *   - venue: Conference/Journal name
 *   - venueShort: Abbreviation (e.g., "CVPR", "NeurIPS")
 *   - venueNote: (optional) Description displayed after the venue and year
 *   - year: Publication year
 *   - award: (optional) Award text (e.g., "Best Paper", "Spotlight")
 *   - tags: Array of research area tags (should match tags in index.html)
 *   - links: Object with link types as keys (paper, arxiv, code, project, demo, video, slides)
 */
const publications = [
    {
        title: "LEGO-Anything: Coding Agents for 3D Scene Reconstruction",
        image: "images/lego-anything.webp",
        authors: [
            { name: "Xirui Li", me: true },
            "Peng Shi",
            "Mingwen Dong",
            "Sheng Zhang",
            "Zhuoyan Xu",
            "Dongkyu Lee",
            "Shuaichen Chang",
            "Yi Xiang",
            "Lin Pan",
            "Jiarong Jiang",
        ],
        venue: "ArXiv Preprint",
        venueShort: "ArXiv",
        year: 2026,
        tags: ["vlm", "llm", "agents"],
        links: {
            paper: "https://arxiv.org/pdf/2609.36380",
            arxiv: "https://arxiv.org/abs/2609.36380",
            project: "https://lego-anything.com/",
            huggingface: "https://huggingface.co/papers/2609.36380",
        }
    },
    {
        title: "Guava: An Effective and Universal Harness for Embodied Manipulation",
        image: "images/IMG_0403.JPG",
        altImage: "images/IMG_0403.png",
        authors: [
            { name: "Haowen Liu", equalContrib: true },
            { name: "Xirui Li", equalContrib: true, me: true },
            "Shaoxiong Yao",
            "Peng Shi",
            "Tianyi Zhou",
            "Jia-Bin Huang",
            "Furong Huang",
            "Jiayuan Mao",
        ],
        venue: "ArXiv Preprint",
        venueShort: "ArXiv",
        venueNote: "The <strong>first</strong> agent-as-policy study for manipulation",
        year: 2026,
        tags: ["embodied", "agents", "vlm", "llm"],
        links: {
            paper: "https://arxiv.org/pdf/2606.18363",
            arxiv: "https://arxiv.org/abs/2606.18363",
            code: "https://github.com/hdacnw/guava-release",
            project: "https://guava-harness.github.io/",
        }
    },
        {
        title: "ClawEnvKit: Automatic Environment Generation for Claw-Like Agents",
        image: "images/IMG_0402.JPG",  // Add your paper thumbnail here
        altImage: "images/IMG_0402.png",
        authors: [
            "Xirui Li",
            "Ming Li",
            "Ion Stoica",
            "Cho-Jui Hsieh",
            "Tianyi Zhou",
        ],
        venue: "ArXiv Preprint",
        venueShort: "ArXiv",
        year: 2026,
        tags: ["llm", "agents"],
        links: {
            paper: "https://arxiv.org/pdf/2604.18543",
            arxiv: "https://arxiv.org/abs/2604.18543",
            code: "https://github.com/xirui-li/ClawEnvKit",
        }
    },
    // {
    //     title: "When AI Navigates the Fog of War",
    //     image: "images/IMG_0401.JPG",  // Add your paper thumbnail here
    //     altImage: "images/IMG_0401.png",
    //     authors: [
    //         { name: "Ming Li", equalContrib: true},
    //         { name: "Xirui Li", equalContrib: true, me: true},
    //         "Tianyi Zhou",
    //     ],
    //     venue: "ArXiv Preprint",
    //     venueShort: "ArXiv",
    //     year: 2026,
    //     // award: "#3 Paper of the day",
    //     awardLink: "https://huggingface.co/papers/2602.14299",
    //     tags: ["llm", "agents", "post-training"],
    //     links: {
    //         paper: "https://arxiv.org/pdf/2603.16642",
    //         arxiv: "https://arxiv.org/abs/2603.16642",
    //         code: "https://github.com/xirui-li/war-test",
    //         project: "https://war-forecast-arena.com",
    //     }
    // },
    {
        title: "SuperMinds Test: Actively Evaluating Collective Intelligence of Agent Society via Probing Agents",
        image: "images/IMG_0400.JPG",  // Add your paper thumbnail here
        altImage: "images/IMG_0400.png",
        authors: [
            { name: "Xirui Li", equalContrib: true, me: true},
            { name: "Ming Li", equalContrib: true},
            "Yunze Xiao",
            "Ryan Wang",
            "Dianqi Li",
            "Tianyi Zhou",
        ],
        venue: "ArXiv Preprint",
        venueShort: "ArXiv",
        year: 2026,
        tags: ["llm", "agents"],
        links: {
            paper: "https://arxiv.org/pdf/2604.22452",
            arxiv: "https://arxiv.org/abs/2604.22452",
            code: "https://github.com/xirui-li/MoltBook-Evaluation",
            project: "https://ai-agent-society.com",
        }
    },
    {
        title: "Does Socialization Emerge in AI Agent Society? A Case Study of Moltbook",
        image: "images/IMG_0399.JPG",  // Add your paper thumbnail here
        altImage: "images/IMG_0399.png",
        authors: [
            { name: "Ming Li", equalContrib: true },
            { name: "Xirui Li", equalContrib: true, me: true},
            "Tianyi Zhou",
        ],
        venue: "ACM Conference on AI and Agentic Systems",
        venueShort: "ACM CAIS 2026",
        year: 2026,
        tags: ["llm", "agents"],
        links: {
            paper: "https://arxiv.org/pdf/2602.14299",
            arxiv: "https://arxiv.org/abs/2602.14299",
            code: "https://github.com/tianyi-lab/Moltbook_Socialization",
            project: "https://ai-agent-society.com",
        }
    },
    {
        title: "What does RL improve for Visual Reasoning? A Frankenstein-Style Analysis",
        image: "images/IMG_0398.JPG",  // Add your paper thumbnail here
        altImage: "images/IMG_0398.png",
        authors: [
            { name: "Xirui Li", me: true},
            "Ming Li",
            "Tianyi Zhou",
        ],
        venue: "Conference on Language Modeling",
        venueShort: "COLM 2026",
        year: 2026,
        tags: ["post-training", "vlm"],
        links: {
            paper: "https://arxiv.org/pdf/2602.12395",
            arxiv: "https://arxiv.org/abs/2602.12395",
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
        venue: "ICLR 2026 Workshop ES-Reason",
        venueShort: "ICLR 2026 WS",
        venueNote: "The <strong>first</strong> replicate of R1-zero's training on small VLM",
        year: 2026,
        award: "600+ Stars on GitHub",
        tags: ["post-training", "vlm"],
        links: {
            paper: "https://arxiv.org/pdf/2503.05132",
            arxiv: "https://arxiv.org/abs/2503.05132",
            code: "https://github.com/turningpoint-ai/VisualThinker-R1-Zero",
            project: "https://turningpointai.notion.site/the-multimodal-aha-moment-on-2b-model",
        }
    },
    {
        title: "MOSSBench: Is Your Multimodal Large Language Model Oversensitive to Safe Queries?",
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
        tags: ["vlm", "trustworthy"],
        links: {
            paper: "https://arxiv.org/pdf/2406.17806",
            arxiv: "https://arxiv.org/abs/2406.17806",
            code: "https://github.com/xirui-li/MOSSBench",
            project: "https://turningpoint-ai.github.io/MOSSBench/"
        }
    },
    {
        title: "DrAttack: Prompt Decomposition and Reconstruction Makes Powerful LLM Jailbreakers",
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
        tags: ["llm", "trustworthy"],
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
        huggingface: 'Hugging Face',
        demo: 'Demo',
        video: 'Video',
        slides: 'Slides',
        poster: 'Poster',
        bibtex: 'BibTeX'
    };
    const linkIcons = {
        paper: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8ZM14 2v6h6M8 13h8M8 17h6"/>',
        arxiv: '<path d="M12 5c-3-2-6-2-10-1v16c4-1 7-1 10 1 3-2 6-2 10-1V4c-4-1-7-1-10 1ZM12 5v16"/>',
        code: '<path d="m8 6-6 6 6 6m8-12 6 6-6 6M14 4l-4 16"/>',
        project: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a18 18 0 0 1 0 20 18 18 0 0 1 0-20Z"/>',
        huggingface: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 3 4 3 4-3 4-3M8 8h.01M16 8h.01"/>',
        demo: '<rect x="2" y="3" width="20" height="16" rx="2"/><path d="m10 7 6 4-6 4ZM8 22h8M12 19v3"/>',
        video: '<rect x="2" y="5" width="14" height="14" rx="2"/><path d="m16 10 6-4v12l-6-4"/>',
        slides: '<path d="M2 3h20M4 3v14h16V3M12 17v5M8 22l4-3 4 3"/>',
        poster: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/>',
        bibtex: '<path d="M9 3H7a2 2 0 0 0-2 2v4l-2 3 2 3v4a2 2 0 0 0 2 2h2M15 3h2a2 2 0 0 1 2 2v4l2 3-2 3v4a2 2 0 0 1-2 2h-2"/>'
    };

    return Object.entries(links)
        .map(([type, url]) => {
            const label = linkLabels[type] || type;
            const icon = linkIcons[type] || '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>';
            return `<a href="${url}" class="pub-link"><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icon}</svg><span>${label}</span></a>`;
        })
        .join('\n');
}

function renderTags(tags) {
    return tags
        .map(tag => `<button class="pub-tag" type="button" data-tag="${tag}" aria-pressed="false">${researchTags.find(item => item.id === tag)?.label || tag}</button>`)
        .join('\n');
}

function renderPublication(pub) {
    const venueName = pub.venueShort
        ? `${pub.venue} (${pub.venueShort})`
        : pub.venue;
    const venueDisplay = pub.venueNote
        ? `${venueName}, ${pub.year} | ${pub.venueNote}`
        : `${venueName}, ${pub.year}`;

    const awardHtml = pub.award
        ? `<span class="award"> | 🏆 ${pub.awardLink ? `<a href="${pub.awardLink}" target="_blank">${pub.award}</a>` : pub.award}</span>`
        : '';

    return `
        <div class="publication reveal-item" data-tags="${pub.tags.join(',')}">
            <div class="pub-content">
                <div class="pub-title">
                    <a href="${pub.links.paper || pub.links.arxiv || '#'}">${pub.title}</a>
                </div>
                <div class="pub-authors">
                    ${renderAuthors(pub.authors)}
                </div>
                <div class="pub-venue">
                    ${venueDisplay}${awardHtml}
                </div>
                <div class="pub-footer">
                    <div class="pub-tags">
                        ${renderTags(pub.tags)}
                    </div>
                    <div class="pub-links">
                        ${renderLinks(pub.links)}
                    </div>
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderAllPublications);
