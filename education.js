/**
 * Education Data
 *
 * Add education entries to the array below. Most recent should be at the top.
 *
 * Fields:
 *   - dates: Time period (e.g., "2024 - Present", "2020 - 2024")
 *   - institution: School/University name
 *   - institutionUrl: (optional) Link to institution website
 *   - degree: Degree type and major
 *   - advisor: (optional) Advisor name
 *   - advisorUrl: (optional) Link to advisor's page
 *   - details: (optional) Additional details array
 */

const educationItems = [
    {
        dates: "2025 - Present",
        institution: "University of Maryland, College Park",
        institutionUrl: "https://www.cs.umd.edu/",
        degree: "Ph.D. in Computer Science",
        advisor: "Prof. Tianyi Zhou",
        advisorUrl: "https://tianyizhou.github.io/",
        details: []
    },
    {
        dates: "2022 - 2024",
        institution: "University of California, Los Angeles",
        institutionUrl: "https://www.ucla.edu/",
        degree: "M.S. in Electrical Engineering",
        advisor: "Prof. Cho-Jui Hsieh",
        advisorUrl: "https://web.cs.ucla.edu/~chohsieh/",
        details: []
    },
    {
        dates: "2018 - 2022",
        institution: "Technical University of Munich",
        institutionUrl: "https://www.tum.de/",
        degree: "B.S. in Electrical Engineering",
        advisor: "Dr. Hao Shen",
        advisorUrl: "https://scholar.google.com/citations?user=Kce9W-8AAAAJ&hl=en",
        details: []
    }
];

// ========== Render Function ==========

function renderEducation() {
    const container = document.getElementById('education-list');
    if (!container) return;

    const html = educationItems.map(item => {
        // Institution with optional link
        const institutionHtml = item.institutionUrl
            ? `<a href="${item.institutionUrl}" target="_blank">${item.institution}</a>`
            : item.institution;

        // Advisor with optional link
        let advisorHtml = '';
        if (item.advisor) {
            const advisorName = item.advisorUrl
                ? `<a href="${item.advisorUrl}" target="_blank">${item.advisor}</a>`
                : item.advisor;
            advisorHtml = `<p>Advisor: ${advisorName}</p>`;
        }

        const detailsHtml = item.details && item.details.length > 0
            ? item.details.map(d => `<p>${d}</p>`).join('')
            : '';

        return `
            <div class="timeline-item">
                <span class="timeline-date">${item.dates}</span>
                <div class="timeline-content">
                    <h3>${institutionHtml}</h3>
                    <p>${item.degree}</p>
                    ${advisorHtml}
                    ${detailsHtml}
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = html;
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderEducation);
