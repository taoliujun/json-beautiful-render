import { jsonRender } from '..';
import normalData from '../../../jest/mockData/normal';

describe('jsonRender', () => {
    test('with an el', () => {
        const el = document.createElement('div');
        const result = jsonRender(el, normalData);
        expect(result.childNodes.length).toBe(2);
    });
});
