import { IS_JEST } from './env';

export const clearDomChild = (el: HTMLElement | null | undefined) => {
    if (el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }
};

export const addTestid = (el: HTMLElement, testid: string) => {
    if (IS_JEST && el) {
        el.setAttribute('data-testid', testid);
    }
};
