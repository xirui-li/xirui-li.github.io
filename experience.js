/**
 * Experience Data
 *
 * Add work/internship experience entries to the array below. Most recent should be at the top.
 *
 * Fields:
 *   - dates: Time period (e.g., "Summer 2024", "Jun 2023 - Aug 2023")
 *   - title: Position title
 *   - company: Company or lab name
 *   - description: (optional) Brief description of work
 *   - details: (optional) Array of bullet points
 */

const experienceItems = [
    {
        dates: "Aug 2024 - Aug 2025",
        title: "Research Assistant",
        company: "UCLA",
        description: "Worked on multimodal learning.",
        details: []
    },
    {
        dates: "Jul 2023 - Sep 2023",
        title: "Software Engineer Intern",
        company: "Mathworks",
        description: "Worked on hardware description language for code generation.",
        details: []
    }
    // Add more experience items here
];

// ========== Render Function ==========

function renderExperience() {
    const container = document.getElementById('experience-list');
    if (!container) return;

    const html = experienceItems.map(item => {
        const descHtml = item.description ? `<p>${item.description}</p>` : '';
        const detailsHtml = item.details && item.details.length > 0
            ? `<ul>${item.details.map(d => `<li>${d}</li>`).join('')}</ul>`
            : '';

        return `
            <div class="timeline-item">
                <span class="timeline-date">${item.dates}</span>
                <div class="timeline-content">
                    <h3>${item.title} @ ${item.company}</h3>
                    ${descHtml}
                    ${detailsHtml}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderExperience);
