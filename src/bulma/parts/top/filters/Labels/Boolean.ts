/**
 * The Boolean class extends the Label class and represents a boolean value.
 */
import Label from './Label';

class Boolean extends Label {
    /**
     * Returns the preposition "is".
     * @returns The preposition "is".
     */
    preposition(): string {
        return 'is';
    }

    /**
     * Returns the string representation of the boolean value.
     * If the value is true, returns "true". If the value is false, returns "false".
     * @returns The string representation of the boolean value.
     */
    value(): string {
        return this.filter.value
            ? 'true'
            : 'false';
    }
}

export default Boolean;