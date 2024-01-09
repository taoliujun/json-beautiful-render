import { jsonRender } from '..';
import normalData from '../../../jest/mockData/normal';

test('jsonRender', () => {
    const el = document.createElement('div');
    const result = jsonRender(el, normalData);
    expect(result.childNodes.length).toBe(2);
});
