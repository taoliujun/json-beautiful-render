export const clearDomChild = (el: HTMLElement | null | undefined) => {
    if (el) {
        while (el.firstChild) {
            el.removeChild(el.firstChild);
        }
    }
};
