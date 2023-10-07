/**
 * Represents a responsive table.
 */
class ResponsiveTable {
    /**
     * Creates a new instance of ResponsiveTable.
     * @param el - The HTML element representing the table.
     * @param context - The context in which the table is being used.
     */
    constructor(el: HTMLElement, context: any) {
        this.el = el;
        this.context = context;
        this.width = this.el.offsetWidth;
    }

    /**
     * Checks if the table width has changed.
     * @returns True if the width has changed, false otherwise.
     */
    wasChanged(): boolean {
        return this.width !== this.el.offsetWidth;
    }

    /**
     * Checks if the table should be hidden.
     * @returns True if the table should be hidden, false otherwise.
     */
    shouldHide(): boolean {
        return this.el.offsetWidth < this.el.scrollWidth;
    }

    /**
     * Checks if the table should be unhidden.
     * @returns True if the table should be unhidden, false otherwise.
     */
    shouldUnhide(): boolean {
        return this.el.offsetWidth === this.el.scrollWidth && this.wasChanged();
    }

    /**
     * Updates the table width.
     */
    updateWidth(): void {
        this.width = this.el.offsetWidth;
    }

    /**
     * Hides a column in the table.
     */
    hide(): void {
        const column = this.context.state.template.columns
            .filter((column: any) => column.meta.visible && !column.meta.hidden && !column.meta.rogue)
            .pop();

        if (column) {
            column.meta.hidden = true;
            this.update();
        }
    }

    /**
     * Unhides a previously hidden column in the table.
     */
    unhide(): void {
        const column = this.context.state.template.columns
            .find((column: any) => column.meta.hidden);

        if (column) {
            column.meta.hidden = false;
            this.update();
        }
    }

    /**
     * Updates the table and fits it into the available space.
     */
    update(): void {
        this.updateWidth();
        this.context.$nextTick(() => {
            this.fit();
        });
    }

    /**
     * Fits the table into the available space by hiding or unhiding columns.
     */
    fit(): void {
        if (this.shouldHide()) {
            this.hide();
            return;
        }

        if (this.shouldUnhide()) {
            this.unhide();
        }
    }
}

export default ResponsiveTable;