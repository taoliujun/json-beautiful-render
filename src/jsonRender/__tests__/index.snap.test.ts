import { jsonRender } from '..';
import normalData from '../../../jest/mockData/normal';

test('jsonRender', () => {
    const activeBgColor = '#000001';
    const activeHighLightColor = '#000002';
    const levelHighLightColor = '#000003';
    const labelColor = '#000004';
    const valueColor = '#000005';
    const valueColors = { string: '#000006', number: '#000007', specialness: '#000008' };
    const result = jsonRender(null, normalData, {
        activeBgColor,
        activeHighLightColor,
        levelHighLightColor,
        labelColor,
        valueColor,
        valueColors,
        expand: true,
        showItemsLength: 'always',
    });
    expect(result).toMatchSnapshot();
});
