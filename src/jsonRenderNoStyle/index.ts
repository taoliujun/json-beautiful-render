import { generateSingleItem, generateWrapperItem } from './item';
import { isArray, isObject } from '../utils/valueType';
import type { Options } from './types';

const render = (
    keyName: string,
    values: object,
    options?: Partial<Options>,
    opt?: Partial<{ isLast: boolean; level: number }>,
): string => {
    const valueEntries = Object.entries(values);
    const isArrayType = isArray(values);

    const result = valueEntries.map(([key, value], index) => {
        const isLast = index === valueEntries.length - 1;
        if (isObject(value) || isArray(value)) {
            return render(isArrayType ? '' : key, value, options, { isLast, level: (opt?.level || 0) + 1 });
        }
        return generateSingleItem(isArrayType ? '' : key, value, {
            isLast,
        });
    });

    return generateWrapperItem(keyName, result, options, {
        isArrayType,
        isLast: opt?.isLast,
        level: opt?.level,
    });
};

const renderMain = (el: HTMLElement | null | undefined, jsonValue: object, options?: Partial<Options>) => {
    const result = render('', jsonValue, options, { isLast: true, level: 1 });

    if (el) {
        // eslint-disable-next-line no-param-reassign
        el.innerHTML = result;
    }

    return result;
};

export { renderMain as jsonRenderNoStyle };
export type { Options as JsonRenderNoStyleOptions };
