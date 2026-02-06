/**
 * Research Tags Configuration
 *
 * Define all research area tags here. They will be automatically rendered
 * in both the Research Interests and Publications sections.
 *
 * To add a new tag:
 *   1. Add an entry to this array with { id: "tag-id", label: "Display Label" }
 *   2. Use the same tag id in your publications.js tags array
 *
 * To remove a tag:
 *   Simply remove or comment out the entry from this array
 */

const researchTags = [
    { id: "rlvr", label: "RLVR" },
    { id: "reasoning", label: "Reasoning" },
    { id: "safety", label: "Safety Alignment" },
    { id: "vlm", label: "VLM" },
    { id: "llm", label: "LLM" },
    { id: "agent", label: "Agents" },
    // Add more tags here, e.g.:
    // { id: "safety", label: "AI Safety" },
    // { id: "generation", label: "Image/Video Generation" },
];

// ========== Render Functions ==========

function renderResearchTags() {
    // Render tags in Research Interests section
    const researchContainer = document.querySelector('#research .research-tags');
    if (researchContainer) {
        researchContainer.innerHTML = researchTags.map(tag =>
            `<span class="research-tag" data-tag="${tag.id}">${tag.label}</span>`
        ).join('');
    }

    // Render tags in Publications filter section
    const pubFilterContainer = document.querySelector('#publications .pub-filter .research-tags');
    if (pubFilterContainer) {
        pubFilterContainer.innerHTML = researchTags.map(tag =>
            `<span class="research-tag" data-tag="${tag.id}">${tag.label}</span>`
        ).join('');
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', renderResearchTags);
