import normalData from '../../../jest/mockData/normal';
import { jsonRenderNoStyle } from '..';

test('jsonRenderNoStyle', () => {
    expect(jsonRenderNoStyle(null, normalData, { indent: '#__#' })).toMatchSnapshot();
});
