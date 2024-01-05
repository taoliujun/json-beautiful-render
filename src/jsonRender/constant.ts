import type { Options } from './types';

export const DEFAULT_OPTIONS: Options = {
    activeBgColor: '#f9f9f9',
    activeHighLightColor: '#ff5',
    levelHighLightColor: '#f00',
    labelColor: '#000',
    valueColor: '#000',
    valueColors: {
        string: '#0b7500',
        number: '#1a01cc',
        specialness: '#ff6b00',
    },
    expand: true,
    showItemsLength: 'collapse',
};

export const ROOT_KEY = `$ROOT_KEY_${Math.random().toString(36).slice(2)}$`;
