/**
 * News Data
 *
 * Add news items to the array below. Newest items should be at the top.
 * Only the first 4 items are shown by default; the rest are collapsed.
 *
 * Fields:
 *   - date: Display date (e.g., "Feb 2025", "Jan 2025")
 *   - content: News content (HTML supported for links, bold, etc.)
 */

const newsItems = [
    {
        date: "Feb 2026",
        content: "Our paper about analyzing consistent improvements across RLVR on VLMs is preprinted on ArXiv."
    },
    {
        date: "Sep 2025",
        content: "I have joined University of Maryland as a PhD student, advised by Prof. Tianyi Zhou!"
    },
    {
        date: "Feb 2025",
        content: "We release our witness of aha moment on 2B models!"
    },
    {
        date: "Jan 2025",
        content: "Our paper <strong>MossBench</strong> about oversensitivity of VLMs has been accepted to <strong>ICLR 2025</strong>!"
    },
    {
        date: "Nov 2024",
        content: "I am actively looking for a PhD student position starting in Fall 2025!"
    },
    {
        date: "Oct 2024",
        content: "Our paper <strong>DrAttack</strong> about attack on LLMs has been accepted to <strong>EMNLP 2024</strong>."
    },
    {
        date: "Jul 2024",
        content: "Our paper about oversensitivity of Multimodal-LLMs is preprinted on ArXiv."
    },
    {
        date: "Feb 2024",
        content: "Our paper about attack on LLMs is preprinted on ArXiv."
    }
    // Add more news items here - they will be automatically collapsed
];

// ========== Render Function ==========

function renderNews() {
    const container = document.getElementById('newsList');
    if (!container) return;

    const html = newsItems.map(item => `
        <li class="news-item">
            <span class="news-date">[${item.date}]</span>
            <span class="news-content">${item.content}</span>
        </li>
    `).join('');

    container.innerHTML = html;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderNews);
