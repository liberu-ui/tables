/**
 * Represents a label.
 */
class Label {
    /**
     * Creates a new instance of Label.
     * @param {Filter} filter - The filter object.
     */
    constructor(filter: Filter) {
        this.filter = filter;
    }

    /**
     * Gets the lowercase label.
     * @returns {string} The lowercase label.
     */
    label(): string {
        return this.filter.label.toLowerCase();
    }
}

export default Label;
