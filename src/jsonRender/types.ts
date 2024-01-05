type Color = CSSStyleDeclaration['color'];

interface Options {
    /** The background color of the entire row area when the item is active */
    activeBgColor: Color;
    /** The background color of the text area when the item is active */
    activeHighLightColor: Color;
    /** The color of all parent key names when the item is active */
    levelHighLightColor: Color;
    /** The text color of the keyname */
    labelColor: Color;
    /** The text color of the key */
    valueColor: Color;
    /** Text colors for different variable types */
    valueColors: Partial<
        Record<
            /** string */
            | 'string'
            /** numeric */
            | 'number'
            /** Special values, such as boolean, null */
            | 'specialness',
            Color
        >
    >;
    /** enable expand */
    expand: boolean;
    /** show items length */
    showItemsLength: undefined | false | 'collapse' | 'always';
}

export type { Options };
