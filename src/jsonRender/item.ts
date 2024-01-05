import { ClassNameEnum, generateClassName } from './style';
import { getValueType, isBoolean, isNull, isNumber, isString } from '../utils/valueType';
import type { Options } from './types';
import { ROOT_KEY } from './constant';

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

    const wrapperDom = document.createElement('div');
    wrapperDom.classList.add(generateClassName(ClassNameEnum.SINGLE_WRAPPER));

    const contentWrapperDom = document.createElement('div');
    contentWrapperDom.classList.add(generateClassName(ClassNameEnum.SINGLE_CONTENT));

    if (label) {
        const labelDom = document.createElement('span');
        labelDom.classList.add(generateClassName(ClassNameEnum.SINGLE_LABEL));
        labelDom.innerHTML = `"${label}":&nbsp;`;
        contentWrapperDom.append(labelDom);
    }

    const valueDom = document.createElement('span');
    valueDom.classList.add(generateClassName(ClassNameEnum.SINGLE_VALUE));

    if (isString(value)) {
        valueDom.innerText = `"${value}"${comma}`;
        valueDom.classList.add(generateClassName(ClassNameEnum.SINGLE_STRING));
    } else if (isNumber(value)) {
        valueDom.innerText = `${value}${comma}`;
        valueDom.classList.add(generateClassName(ClassNameEnum.SINGLE_NUMBER));
    } else if (isNull(value) || isBoolean(value)) {
        valueDom.innerText = `${value}${comma}`;
        valueDom.classList.add(generateClassName(ClassNameEnum.SINGLE_SPECIALNESS));
    } else {
        valueDom.innerText = `${getValueType(value)}${comma}`;
    }
    contentWrapperDom.append(valueDom);

    wrapperDom.append(contentWrapperDom);

    return wrapperDom;
};

/** create a wrapper for items */
export const generateWrapperItem = (
    label: string,
    values: HTMLElement[],
    opt?: Partial<{
        isArrayType: boolean;
        isLast: boolean;
    }> &
        Partial<Pick<Options, 'expand' | 'showItemsLength'>>,
) => {
    const { isArrayType, isLast, expand, showItemsLength } = opt || {};

    const wrapperDom = document.createElement('div');
    wrapperDom.classList.add(generateClassName(ClassNameEnum.ITEMS_WRAPPER));
    if (!label || label === ROOT_KEY) {
        wrapperDom.classList.add(generateClassName(ClassNameEnum.ROOT_WRAPPER));
    }
    if (label === ROOT_KEY && expand) {
        wrapperDom.classList.add(generateClassName(ClassNameEnum.BASE_ROOT_WRAPPER));
    }

    const expandDom = document.createElement('button');
    expandDom.classList.add(generateClassName(ClassNameEnum.ITEMS_EXPAND));

    const lengthDom = document.createElement('span');
    lengthDom.classList.add(generateClassName(ClassNameEnum.ITEMS_LENGTH));
    lengthDom.innerText = `${values.length} ${values.length > 1 ? 'items' : 'item'}`;

    const typeSperatorBegin = isArrayType ? '[' : '{';
    const typeSperatorEnd = isArrayType ? ']' : '}';

    const beginWrapper = document.createElement('div');
    beginWrapper.classList.add(generateClassName(ClassNameEnum.ITEMS_BEGIN));
    beginWrapper.innerHTML =
        label && label !== ROOT_KEY ? `"${label.toString()}":&nbsp;${typeSperatorBegin}` : `${typeSperatorBegin}`;
    if (showItemsLength === 'always') {
        beginWrapper.append(lengthDom);
    }
    if (expand) {
        beginWrapper.prepend(expandDom);
    }

    const contentWrapper = document.createElement('div');
    contentWrapper.classList.add(generateClassName(ClassNameEnum.ITEMS_CONTENT));
    values.forEach((v) => {
        contentWrapper.append(v);
    });

    const endWrapper = document.createElement('div');
    endWrapper.classList.add(generateClassName(ClassNameEnum.ITEMS_END));
    endWrapper.innerText = `${typeSperatorEnd}${isLast ? '' : ','}`;

    wrapperDom.append(beginWrapper, contentWrapper, endWrapper);

    let hasExpand = false;
    const toggleExpand = () => {
        hasExpand = !hasExpand;
        expandDom.innerText = hasExpand ? '-' : '+';
        contentWrapper.classList.toggle(generateClassName(ClassNameEnum.ITEMS_CONTENT_EXPAND), hasExpand);
        if (showItemsLength === 'collapse') {
            if (hasExpand) {
                lengthDom.remove();
            } else {
                beginWrapper.append(lengthDom);
            }
        }
    };

    toggleExpand();
    expandDom.addEventListener('click', toggleExpand);

    return wrapperDom;
};
