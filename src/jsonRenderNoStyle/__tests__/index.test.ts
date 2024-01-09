import normalData from '../../../jest/mockData/normal';
import { jsonRenderNoStyle } from '..';

test('jsonRenderNoStyle', () => {
    const el = document.createElement('textarea');
    const result = jsonRenderNoStyle(el, normalData);
    expect(el.value).toBe(result);
});
