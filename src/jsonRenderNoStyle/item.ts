import { getValueType, isBoolean, isNull, isNumber, isString } from '../utils/valueType';
import { DEFAULT_OPTIONS } from './constant';
import type { Options } from './types';

const endLine = `\n`;

/** create a wrapper for an item  */
export const generateSingleItem = (
    label: string,
    value: unknown,
    opt?: Partial<{
        isLast: boolean;
    }>,
) => {
    const { isLast } = opt || {};
    const comma = isLast ? '' : ',';

    let wrapperDom = '';

    if (label) {
        wrapperDom += `"${label}": `;
    }

    let valueDom = '';
    if (isString(value)) {
        valueDom = `"${value}"${comma}`;
    } else if (isNumber(value)) {
        valueDom = `${value}${comma}`;
    } else if (isNull(value) || isBoolean(value)) {
        valueDom = `${value}${comma}`;
    } else {
        valueDom = `${getValueType(value)}${comma}`;
    }
    wrapperDom += valueDom;

    return wrapperDom;
};

/** create a wrapper for items */
export const generateWrapperItem = (
    label: string,
    values: string[],
    options?: Partial<Options>,
    opt?: Partial<{
        isArrayType: boolean;
        isLast: boolean;
        level: number;
    }>,
) => {
    const { indent = DEFAULT_OPTIONS.indent } = options || {};
    const { isArrayType, isLast, level = 0 } = opt || {};
    const typeSperatorBegin = isArrayType ? '[' : '{';
    const typeSperatorEnd = isArrayType ? ']' : '}';

    let wrapperDom = '';

    let beginWrapper = label ? `"${label.toString()}": ${typeSperatorBegin}` : `${typeSperatorBegin}`;
    beginWrapper += endLine;

    let contentWrapper = '';
    values.forEach((v) => {
        contentWrapper += `${indent.repeat(level)}${v}${endLine}`;
    });

    const endWrapper = `${indent.repeat(level - 1)}${typeSperatorEnd}${isLast ? '' : ','}`;

    wrapperDom += beginWrapper;
    wrapperDom += contentWrapper;
    wrapperDom += endWrapper;

    return wrapperDom;
};
