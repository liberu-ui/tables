```typescript
import Label from './Label';

/**
 * Range class represents a range label.
 * It extends from the Label class.
 */
class Range extends Label {
  /**
   * Set the i18n object for internationalization.
   * 
   * @param i18n - The i18n object.
   */
  i18n(i18n: any): void {
    this.i18n = i18n;
  }

  /**
   * Returns the preposition based on the type of the filter.
   * 
   * @returns The preposition string.
   */
  preposition(): string {
    switch (this.getType()) {
      case 'range':
        return 'is between';
      case 'greater':
        return 'is greater than';
      case 'lower':
        return 'is lower than';
      default:
        return 'is';
    }
  }

  /**
   * Returns the value based on the type of the filter.
   * 
   * @returns The value string.
   */
  value(): string {
    switch (this.getType()) {
      case 'range':
        return `${this.filter.value.min} ${this.i18n('and')} ${this.filter.value.max}`;
      case 'greater':
        return this.filter.value.min;
      case 'lower':
        return this.filter.value.max;
      default:
        return this.filter.value;
    }
  }

  /**
   * Returns the type of the filter.
   * 
   * @returns The filter type string.
   */
  type(): string {
    if (this.filter.mode === 'interval') {
      if (this.filter.value.min !== null && this.filter.value.max !== null) {
        return 'range';
      }

      if (this.filter.value.min !== null) {
        return 'greater';
      }

      return 'lower';
    }

    return 'point';
  }
}

export default Range;
```