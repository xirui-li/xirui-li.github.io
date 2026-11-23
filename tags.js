/**
 * Research Tags Configuration
 *
 * Define all research area tags here. They will be automatically rendered
 * in the Publications filter.
 *
 * To add a new tag:
 *   1. Add an entry to this array with { id: "tag-id", label: "Display Label" }
 *   2. Use the same tag id in your publications.js tags array
 *
 * To remove a tag:
 *   Simply remove or comment out the entry from this array
 */

const researchTags = [
    { id: "embodied", label: "Embodied" },
    { id: "post-training", label: "Post-training" },
    { id: "trustworthy", label: "Trustworthy" },
    { id: "vlm", label: "VLM" },
    { id: "llm", label: "LLM" },
    { id: "agents", label: "Agents" },
    // Add more tags here, e.g.:
    // { id: "safety", label: "AI Safety" },
    // { id: "generation", label: "Image/Video Generation" },
];

// ========== Render Functions ==========

function renderResearchTags() {
    // Render tags in Publications filter section
    const pubFilterContainer = document.querySelector('#publications .pub-filter .research-tags');
    if (pubFilterContainer) {
        const filters = [
            { id: null, label: 'All' },
            ...[...researchTags].sort((a, b) => a.label.localeCompare(b.label, 'en', { sensitivity: 'base' }))
        ];
        pubFilterContainer.innerHTML = filters.map(tag => tag.id
            ? `<button class="research-tag" type="button" data-tag="${tag.id}" aria-pressed="false" aria-controls="publications-list">${tag.label}</button>`
            : '<button class="research-tag active" id="clearFilterPub" type="button" aria-pressed="true" aria-controls="publications-list">All</button>'
        ).join('');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderResearchTags);
