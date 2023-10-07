import Label from './Label';

/**
 * Enum extends Label class and represents a filter for enumeration type data.
 */
class Enum extends Label {
    /**
     * Sets the state of the Enum filter.
     * @param state - The state to set for the filter.
     */
    setState(state: any): void {
        this.state = state;
    }

    /**
     * Returns the preposition based on the length of the filter value.
     * @returns The preposition 'in' if the filter value length is greater than 1, otherwise 'is'.
     */
    getPreposition(): string {
        return this.filter.value.length > 1
            ? 'in'
            : 'is';
    }

    /**
     * Returns the formatted value of the Enum filter.
     * @returns The formatted value of the Enum filter.
     */
    getValue(): string {
        const column = this.state.template.columns.find(({ data }: any) => data === this.filter.data);

        return this.filter.value.map((value: any) => column.enum._get(value)).join(', ');
    }
}

export default Enum;