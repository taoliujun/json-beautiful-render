import { clearDomChild } from '../dom';

test('clearDomChild', () => {
    const el = document.createElement('div');
    const c1 = document.createElement('span');
    const c2 = document.createElement('span');
    expect(el.childNodes.length).toBe(0);

    el.append(c1, c2);
    expect(el.childNodes.length).toBe(2);

    clearDomChild(el);
    expect(el.childNodes.length).toBe(0);
});
