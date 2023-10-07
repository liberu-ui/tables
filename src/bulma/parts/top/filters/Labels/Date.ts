import Range from './Range';
import format from '@liberu-ui/date/src/format';

/**
 * Represents a Date filter.
 */
class Date extends Range {
    /**
     * Constructs a new Date filter instance.
     * @param {object} filter - The filter data.
     */
    constructor(filter: object) {
        super(filter);
    }

    /**
     * Sets the state of the Date filter.
     * @param {object} state - The state to set.
     */
    setState(state: object): void {
        this.state = state;
    }

    /**
     * Gets the formatted value of the Date filter.
     * @returns {string} The formatted value.
     */
    getValue(): string {
        switch (this.getType()) {
            case 'range':
                return `${this.formatDate(this.filter.value.min)} ${this.i18n('and')} ${this.formatDate(this.filter.value.max)}`;
            case 'greater':
                return this.formatDate(this.filter.value.min);
            case 'lower':
                return this.formatDate(this.filter.value.max);
            default:
                return this.formatDate(this.filter.value);
        }
    }

    /**
     * Formats the given date based on the state's date format template.
     * @param {Date} date - The date to format.
     * @returns {string} The formatted date.
     */
    formatDate(date: Date): string {
        return format(date, this.state.template.dateFormat);
    }
}

export default Date;