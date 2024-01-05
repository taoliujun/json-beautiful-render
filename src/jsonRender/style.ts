import { IS_JEST } from '../utils/env';
import type { Options } from './types';

export enum ClassNameEnum {
    BASE_ROOT_WRAPPER = 'base_root_wrapper',
    ROOT_WRAPPER = 'root_wrapper',

    ITEMS_WRAPPER = 'items_wrapper',
    ITEMS_CONTENT = 'items_content',
    ITEMS_CONTENT_EXPAND = 'items_content_expand',
    ITEMS_BEGIN = 'items_begin',
    ITEMS_END = 'items_end',
    ITEMS_EXPAND = 'items_expand',
    ITEMS_LENGTH = 'items_length',

    SINGLE_WRAPPER = 'single_wrapper',
    SINGLE_CONTENT = 'single_content',
    SINGLE_LABEL = 'single_label',
    SINGLE_VALUE = 'single_value',
    SINGLE_STRING = 'single_string',
    SINGLE_NUMBER = 'single_number',
    SINGLE_SPECIALNESS = 'single_specialness',
}

const classNamePrefix = IS_JEST ? '' : Math.random().toString(36).slice(2);

const BASE_STYLES = {
    lineHeight: 20,
    fontSize: 14,
};

export const generateClassName = (className: ClassNameEnum) => {
    return `json_render_${classNamePrefix}_${className}`;
};

// root style
const renderRootStyle = () => {
    const styles = `
      .${generateClassName(ClassNameEnum.BASE_ROOT_WRAPPER)} {
        margin-left: 24px;
      }
      .${generateClassName(ClassNameEnum.ROOT_WRAPPER)} {
        position: relative;
        font-family: monospace, Arial;
        font-size: ${BASE_STYLES.fontSize}px;
        line-height: ${BASE_STYLES.lineHeight}px;
      }
      .${generateClassName(ClassNameEnum.ROOT_WRAPPER)} * {
        font-family: inherit;
      }
    `;

    return styles;
};

// items style
const renderItemsStyle = (options: Partial<Options>) => {
    const { labelColor, levelHighLightColor } = options;
    const styles = `
      .${generateClassName(ClassNameEnum.ITEMS_WRAPPER)} {
        position: relative;
      }
      .${generateClassName(ClassNameEnum.ITEMS_WRAPPER)}::before {
        content: ' ';
        position: absolute;
        left: 0;
        top: ${BASE_STYLES.lineHeight}px;
        bottom: ${BASE_STYLES.lineHeight}px;
        border-left: 1px dashed #ccc;
      }
      .${generateClassName(ClassNameEnum.ITEMS_CONTENT)} {
        padding-left: 24px;
        display: none;
      }
      .${generateClassName(ClassNameEnum.ITEMS_CONTENT)}.${generateClassName(ClassNameEnum.ITEMS_CONTENT_EXPAND)} {
        display: block;
      }
      .${generateClassName(ClassNameEnum.ITEMS_BEGIN)} {
        color: ${labelColor};
        word-break: keep-all;
        white-space: nowrap;
        position: relative;
      }
      .${generateClassName(ClassNameEnum.ITEMS_END)} {
        color: ${labelColor};
      }
      .${generateClassName(ClassNameEnum.ITEMS_WRAPPER)}:hover > .${generateClassName(ClassNameEnum.ITEMS_BEGIN)},
      .${generateClassName(ClassNameEnum.ITEMS_WRAPPER)}:hover > .${generateClassName(ClassNameEnum.ITEMS_END)} {
        color: ${levelHighLightColor};
      }
      .${generateClassName(ClassNameEnum.ITEMS_EXPAND)} {
        position: absolute;
        left: -4px;
        top: 2px;
        transform: translateX(-100%);
        width: 16px;
        height: 16px;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: 1px dashed #ddd;
        color: #ddd;
        background: #fff;
      }
      .${generateClassName(ClassNameEnum.ITEMS_LENGTH)} {
        margin-left: 5px;
        color: #ddd;
        font-size: 12px;
        font-style: italic;
      }
    `;

    return styles;
};

// item style
const renderItemStyle = (options: Partial<Options>) => {
    const { labelColor, valueColor, activeBgColor, activeHighLightColor, valueColors = {} } = options;
    const styles = `
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)} {
        display: flex;
        align-items: center;
      }
      .${generateClassName(ClassNameEnum.SINGLE_CONTENT)} {
        display: inline-flex;
        align-items: baseline;
      }
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)}.active,
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)}:hover {
        background-color: ${activeBgColor};
      }
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)}.active .${generateClassName(ClassNameEnum.SINGLE_CONTENT)},
      .${generateClassName(ClassNameEnum.SINGLE_WRAPPER)}:hover  .${generateClassName(ClassNameEnum.SINGLE_CONTENT)} {
        background-color: ${activeHighLightColor};
        font-weight: 700;
      }
      .${generateClassName(ClassNameEnum.SINGLE_LABEL)} {
        color: ${labelColor};
        word-break: keep-all;
        white-space: nowrap;
      }
      .${generateClassName(ClassNameEnum.SINGLE_VALUE)} {
        color: ${valueColor};
      }
      .${generateClassName(ClassNameEnum.SINGLE_STRING)} {
        color: ${valueColors.string};
      }
      .${generateClassName(ClassNameEnum.SINGLE_NUMBER)} {
        color: ${valueColors.number};
      }
      .${generateClassName(ClassNameEnum.SINGLE_SPECIALNESS)} {
        color: ${valueColors.specialness};
      }
    `;

    return styles;
};

export const renderStyle = (options: Partial<Options>): HTMLElement => {
    const dom = document.createElement('style');
    dom.setAttribute('rel', 'stylesheet');

    // root
    dom.innerHTML += renderRootStyle();

    // items wrapper
    dom.innerHTML += renderItemsStyle(options);

    // single wrapper
    dom.innerHTML += renderItemStyle(options);

    return dom;
};
