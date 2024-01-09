import { queryByTestId } from '@testing-library/dom';
import { generateSingleItem, generateWrapperItem } from '../item';
import { ClassNameEnum, generateClassName } from '../style';
import { ROOT_KEY } from '../constant';

describe('generateSingleItem', () => {
    test('label', () => {
        expect(queryByTestId(generateSingleItem('label1', 'value1', {}), 'label')).toBeInstanceOf(HTMLSpanElement);
        expect(queryByTestId(generateSingleItem('', 'value1', {}), 'label')).toBeNull();
    });

    test('different value', () => {
        expect(queryByTestId(generateSingleItem('label1', 'value1', {}), 'value')?.textContent).toBe(`"value1",`);
        expect(queryByTestId(generateSingleItem('label1', 123, {}), 'value')?.textContent).toBe(`123,`);
        expect(queryByTestId(generateSingleItem('label1', null, {}), 'value')?.textContent).toBe(`null,`);
        expect(queryByTestId(generateSingleItem('label1', false, {}), 'value')?.textContent).toBe(`false,`);
        expect(
            queryByTestId(
                generateSingleItem('label1', () => {}, {}),
                'value',
            )?.textContent,
        ).toBe(`Function,`);
    });

    test('different opt', () => {
        expect(queryByTestId(generateSingleItem('label1', 'value1', {}), 'value')?.textContent).toBe(`"value1",`);
        expect(queryByTestId(generateSingleItem('label1', 'value1', { isLast: true }), 'value')?.textContent).toBe(
            `"value1"`,
        );
    });
});

describe('generateWrapperItem', () => {
    const values: HTMLElement[] = [];

    test('wrapper', async () => {
        expect(
            generateWrapperItem('label1', values, {})?.classList?.contains(
                generateClassName(ClassNameEnum.ITEMS_WRAPPER),
            ),
        ).toBe(true);

        expect(
            generateWrapperItem('label1', values, {})?.classList?.contains(
                generateClassName(ClassNameEnum.ROOT_WRAPPER),
            ),
        ).toBe(false);
        expect(
            generateWrapperItem('', values, {})?.classList?.contains(generateClassName(ClassNameEnum.ROOT_WRAPPER)),
        ).toBe(true);
        expect(
            generateWrapperItem(ROOT_KEY, values, {})?.classList?.contains(
                generateClassName(ClassNameEnum.ROOT_WRAPPER),
            ),
        ).toBe(true);
    });

    test('label', () => {
        expect(queryByTestId(generateWrapperItem('label1', values, {}), 'begin')?.innerHTML).toContain('label1');
        expect(queryByTestId(generateWrapperItem('', values, {}), 'begin')?.innerHTML).not.toContain('label1');
        expect(queryByTestId(generateWrapperItem(ROOT_KEY, values, {}), 'begin')?.innerHTML).not.toContain('label1');
    });

    test('values', () => {
        expect(
            queryByTestId(
                generateWrapperItem('label1', [document.createElement('span')], { showItemsLength: 'always' }),
                'length',
            )?.textContent?.endsWith('item'),
        ).toBe(true);
        expect(
            queryByTestId(
                generateWrapperItem('label1', [document.createElement('span'), document.createElement('span')], {
                    showItemsLength: 'always',
                }),
                'length',
            )?.textContent?.endsWith('items'),
        ).toBe(true);
    });

    test('isArrayType', () => {
        expect(
            queryByTestId(generateWrapperItem('label1', values, { isArrayType: false }), 'begin')?.innerHTML,
        ).toContain('{');
        expect(
            queryByTestId(generateWrapperItem('label1', values, { isArrayType: false }), 'end')?.innerHTML,
        ).toContain('}');
        expect(
            queryByTestId(generateWrapperItem('label1', values, { isArrayType: true }), 'begin')?.innerHTML,
        ).toContain('[');
        expect(queryByTestId(generateWrapperItem('label1', values, { isArrayType: true }), 'end')?.innerHTML).toContain(
            ']',
        );
    });

    test('isLast', () => {
        expect(
            queryByTestId(generateWrapperItem('label1', values, { isLast: false }), 'end')?.innerHTML?.endsWith(','),
        ).toBe(true);
        expect(
            queryByTestId(generateWrapperItem('label1', values, { isLast: true }), 'end')?.innerHTML?.endsWith('}'),
        ).toBe(true);
    });

    test('expand', () => {
        const dom = queryByTestId(generateWrapperItem('label1', values, { expand: true }), 'expand');
        expect(dom).toBeInstanceOf(HTMLButtonElement);
        expect(dom?.textContent).toBe('-');
        dom?.click();
        expect(dom?.textContent).toBe('+');
    });

    test('showItemsLength', () => {
        expect(queryByTestId(generateWrapperItem('label1', values, { showItemsLength: false }), 'length')).toBe(null);
        expect(
            queryByTestId(generateWrapperItem('label1', values, { showItemsLength: 'always' }), 'length'),
        ).toBeInstanceOf(HTMLSpanElement);

        expect(queryByTestId(generateWrapperItem('label1', values, { showItemsLength: 'collapse' }), 'length')).toBe(
            null,
        );
        const wrapperDom = generateWrapperItem('label1', values, { expand: true, showItemsLength: 'collapse' });
        queryByTestId(wrapperDom, 'expand')?.click();
        expect(queryByTestId(wrapperDom, 'length')).toBeInstanceOf(HTMLSpanElement);
    });

    test('otherwise', () => {
        expect(
            queryByTestId(generateWrapperItem(ROOT_KEY, values, { expand: true }), 'wrapper')?.classList?.contains(
                generateClassName(ClassNameEnum.BASE_ROOT_WRAPPER),
            ),
        );
    });
});
