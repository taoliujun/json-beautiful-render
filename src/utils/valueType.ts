export const getValueType = (value: unknown) => {
    const type = Object.prototype.toString.call(value);
    return type.slice(8, type.length - 1);
};

export const isNull = (value: unknown) => getValueType(value) === 'Null';

export const isString = (value: unknown) => getValueType(value) === 'String';

export const isNumber = (value: unknown) => getValueType(value) === 'Number';

export const isBoolean = (value: unknown) => getValueType(value) === 'Boolean';

export const isArray = (value: unknown) => getValueType(value) === 'Array';

export const isObject = (value: unknown) => getValueType(value) === 'Object';
