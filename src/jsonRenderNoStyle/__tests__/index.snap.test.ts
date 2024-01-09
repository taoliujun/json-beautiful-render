import normalData from '../../../jest/mockData/normal';
import { jsonRenderNoStyle } from '..';

describe('jsonRenderNoStyle', () => {
    test('default', () => {
        expect(jsonRenderNoStyle(null, normalData, { indent: '#__#' })).toMatchSnapshot();
    });
});
