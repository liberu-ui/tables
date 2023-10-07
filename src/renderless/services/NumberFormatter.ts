/**
 * A class for formatting numbers in a specified format.
 */
class NumberFormatter {
    /**
     * Constructs a new NumberFormatter object.
     * @param vm - The ViewModel object.
     * @param column - The column object.
     */
    constructor(vm, column) {
        this.vm = vm;
        this.column = column;
        this.segments = column.name.split('.');
        this.totals = this.hasTotal();
    }

    /**
     * Handles the formatting of numbers and replaces the original values.
     */
    handle() {
        this.replace(this.format(this.extractNumbers()));
    }

    /**
     * Replaces the original values with the formatted values.
     * @param column - The formatted column values.
     */
    replace(column) {
        const { length } = this.segments;
        this.vm.body.data.forEach((row, index) => {
            this.segments.forEach((segment, idx) => idx + 1 === length
                ? (row[segment] = column[index])
                : row = row[segment])
        });

        if (this.totals) {
            this.vm.body.total[this.column.name] = column.pop();
        }
    }

    /**
     * Formats the column values based on the specified format.
     * @param column - The column values.
     * @returns An array of formatted values.
     */
    format(column) {
        const max = (max: number, value: string) => Math.max(value.length, max);
        const length = column.reduce(max, 0);
        const { template, symbol } = this.column.number;
        const pad = (value: string) => value.padStart(length, ' ');
        const formatter = (value: string) => template.replace('%s', symbol)
            .replace('%v', pad(value));

        return column.map(formatter);
    }

    /**
     * Extracts the column values to be formatted.
     * @returns An array of column values.
     */
    extractNumbers() {
        const column = this.vm.body.data
            .map(row => this.segments.reduce((row, segment) => row[segment], row));

        if (this.totals) {
            column.push(this.vm.body.total[this.column.name]);
        }

        return column;
    }

    /**
     * Checks if the column has a total value.
     * @returns A boolean value indicating if the column has a total value.
     */
    hasTotal() {
        return this.vm.meta.total
            && this.vm.body.fullRecordInfo
            && Object.keys(this.vm.body.total)
                .includes(this.column.name);
    }
}

export default NumberFormatter;