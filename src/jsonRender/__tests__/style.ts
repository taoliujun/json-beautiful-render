import { renderStyle } from '../style';

describe('renderStyle', () => {
    test('default', () => {
        const result = renderStyle({
            activeBgColor: 'color_#1',
            activeHighLightColor: 'color_#2',
            levelHighLightColor: 'color_#3',
            labelColor: 'color_#4',
            valueColor: 'color_#5',
            valueColors: { string: 'valueColors_#1', number: 'valueColors_#2', specialness: 'valueColors_#3' },
        });
        const content = result?.textContent;
        expect(result).toBeInstanceOf(HTMLStyleElement);
        expect(content).toContain('color_#1');
        expect(content).toContain('color_#2');
        expect(content).toContain('color_#3');
        expect(content).toContain('color_#4');
        expect(content).toContain('color_#5');
        expect(content).toContain('valueColors_#1');
    });
});
