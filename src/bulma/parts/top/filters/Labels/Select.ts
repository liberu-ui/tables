/**
 * Represents a select element with label.
 */
import Label from './Label';

class Select extends Label {
    /**
     * Determines the appropriate preposition based on the filter multiple and value length.
     * @returns The preposition "in" if filter is multiple and value length is greater than 1, otherwise "is".
     */
    preposition(): string {
        return this.filter.multiple && this.filter.value.length > 1
            ? 'in'
            : 'is';
    }

    /**
     * Retrieves the value of the select element joined with commas.
     * @returns The value of the select element joined with commas.
     */
    value(): string {
        return this.filter.selection.join(', ');
    }
}

export default Select;
