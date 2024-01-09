import { generateWrapperItem, generateSingleItem } from '../item';

describe('generateSingleItem', () => {
    test('default', () => {
        expect(generateSingleItem('label1', '123', {})).toBe(`"label1": "123",`);
        expect(generateSingleItem('label1', 123, {})).toBe(`"label1": 123,`);
        expect(generateSingleItem('label1', null, {})).toBe(`"label1": null,`);
        expect(generateSingleItem('label1', false, {})).toBe(`"label1": false,`);
        expect(generateSingleItem('label1', () => {}, {})).toBe(`"label1": Function,`);
    });

    test('isLast', () => {
        expect(generateSingleItem('label1', '123', { isLast: true })).toBe(`"label1": "123"`);
    });
});

describe('generateWrapperItem', () => {
    type ParamterOpt = Parameters<typeof generateWrapperItem>[3];

    test('no label', () => {
        expect(generateWrapperItem('', ['a'], {}, {} as ParamterOpt)).not.toContain(`": {`);
    });

    test('indent', () => {
        expect(generateWrapperItem('label1', ['a'], { indent: '#__#' }, {} as ParamterOpt)).toContain('#__#');
    });

    test('isArrayType', () => {
        expect(
            generateWrapperItem('label1', ['a'], {}, {
                isArrayType: true,
            } as ParamterOpt),
        ).toContain(`": [`);
        expect(
            generateWrapperItem('label1', ['a'], {}, {
                isArrayType: true,
            } as ParamterOpt),
        ).not.toContain(`": {`);
    });

    test('isLast', () => {
        expect(
            generateWrapperItem('label1', ['a'], {}, {
                isLast: true,
            } as ParamterOpt),
        ).not.toContain(`},`);
    });

    test('level', () => {
        expect(
            generateWrapperItem('label1', ['a'], { indent: '#__#' }, {
                level: 2,
            } as ParamterOpt),
        ).toContain(`#__#`.repeat(2));
    });
});
