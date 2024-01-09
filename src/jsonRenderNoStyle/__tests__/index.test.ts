import normalData from '../../../jest/mockData/normal';
import { jsonRenderNoStyle } from '..';

describe('jsonRenderNoStyle', () => {
    test('with an el', () => {
        const el = document.createElement('textarea');
        const result = jsonRenderNoStyle(el, normalData);
        expect(el.value).toBe(result);
    });
});
