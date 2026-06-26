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
        dates: "Jun 2026 - Now",
        title: "Applied Research Intern",
        company: "AWS",
        logo: "images/aws_logo.svg",
        description: "Working on agents.",
        details: []
    },
    {
        dates: "Aug 2024 - Aug 2025",
        title: "Research Assistant",
        company: "UCLA",
        logo: "images/ucla_logo.png",
        description: "Worked on multimodal learning.",
        details: []
    },
    {
        dates: "Jul 2023 - Sep 2023",
        title: "Software Engineer Intern",
        company: "Mathworks",
        logo: "images/mathworks_logo.png",
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
        const logoHtml = item.logo
            ? `<img src="${item.logo}" alt="${item.company}" class="experience-logo">`
            : '';

        return `
            <div class="timeline-item reveal-item">
                <span class="timeline-date">${item.dates}</span>
                <div class="timeline-content">
                    <h3>${item.title} @ ${logoHtml}${item.company}</h3>
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
