import Label, { Filter } from './Label';

/**
 * A class representing a string label.
 * @extends Label
 */
class StringLabel extends Label {
    /**
     * Retrieves the preposition based on the filter mode.
     * @returns {string} The preposition.
     * @throws {Error} If an invalid filter mode is provided.
     */
    preposition(): string {
        switch (this.filter.mode) {
            case 'full':
                return 'contains';
            case 'startsWith':
                return 'starts with';
            case 'endsWith':
                return 'ends with';
            case 'doesntContain':
                return 'does not contain';
            case 'exactMatch':
                return 'is';
            default:
                throw new Error('Invalid filter mode');
        }
    }

    /**
     * Retrieves the value of the filter.
     * @returns {string} The filter value.
     */
    value(): string {
        return this.filter.value;
    }
}

export default StringLabel;

/**
 * Represents a filter option for a label.
 * @typedef {Object} Filter
 * @property {string} mode - The filter mode.
 * @property {string} value - The filter value.
 */

/**
 * Represents a label.
 * @class
 */
class Label {
    filter: Filter;

    /**
     * Creates a new instance of the Label class.
     * @constructor
     * @param {Filter} filter - The filter object.
     */
    constructor(filter: Filter) {
        this.filter = filter;
    }
}