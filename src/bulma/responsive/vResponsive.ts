import { debounce } from 'lodash';
import { ResizeSensor } from 'css-element-queries';
import ResponsiveTable from './ResponsiveTable';

interface Binding {
  value: boolean;
  instance: any;
}

/**
 * Mounts the responsive table to the element.
 * @param el - The element to mount the table on.
 * @param binding - The binding object.
 * @param vnode - The virtual DOM node.
 */
const mounted = (el: HTMLElement, binding: Binding, vnode: any): void => {
  if (binding.value) {
    const context = binding.instance;

    const table = new ResponsiveTable(el, context);
    context._resizeSensor = new ResizeSensor(el, debounce(() => table && table.fit(), 16));
  }
};

/**
 * Called when the component is unmounted.
 * @param el - The element.
 * @param binding - The binding object.
 * @param vnode - The virtual DOM node.
 */
const unmounted = (el: HTMLElement, binding: Binding, vnode: any): void => {
  if (binding.value) {
    binding.instance._resizeSensor = null;
  }
};

export default {
  mounted,
  unmounted,
};