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
        date: "Jun 2026",
        content: "I joined the <img src=\"images/aws_logo.svg\" alt=\"AWS\" class=\"news-logo\"> <strong>AgentCore</strong> team in NYC for a summer internship!"
    },
    {
        date: "Jun 2026",
        content: "Our paper <strong>Guava</strong> on an effective and universal harness for embodied manipulation is preprinted on ArXiv."
    },
    {
        date: "Apr 2026",
        content: "Our latest paper <strong>ClawEnvKit</strong> on automatic environment generation for claw-like agents is preprinted on ArXiv."
    },
    {
        date: "Apr 2026",
        content: "Our paper <strong>Moltbook-Soc</strong> has been accepted to <strong>ACM CAIS 2026</strong>!"
    },
    {
        date: "Mar 2026",
        content: "Our paper <strong>SuperMinds</strong> about evaluating collective intelligence of agent society is preprinted on ArXiv."
    },
    {
        date: "Mar 2026",
        content: "I created a live war forecasting platform: <a href=\"https://war-forecast-arena.com/\" target=\"_blank\">War Forecast Arena</a>."
    },
    {
        date: "Mar 2026",
        content: "Our paper <strong>When AI Navigates the Fog of War</strong> on AI-driven war forecasting is preprinted on ArXiv."
    },
    {
        date: "Feb 2026",
        content: "Our paper <strong>Moltbook-Soc</strong> about socialization of largest AI agent society is preprinted on ArXiv."
    },
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
        <li class="news-item reveal-item">
            <span class="news-date">[${item.date}]</span>
            <span class="news-content">${item.content}</span>
        </li>
    `).join('');

    container.innerHTML = html;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderNews);
