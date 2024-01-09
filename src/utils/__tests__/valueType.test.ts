import { getValueType, isArray, isBoolean, isNull, isNumber, isObject, isString } from '../valueType';

test('getValueType', () => {
    expect(getValueType('hello')).toBe('String');
});

test('isNull', () => {
    expect(isNull(null)).toBe(true);
});

test('isString', () => {
    expect(isString('hello')).toBe(true);
});

test('isNumber', () => {
    expect(isNumber(123)).toBe(true);
});

test('isBoolean', () => {
    expect(isBoolean(true)).toBe(true);
});

test('isArray', () => {
    expect(isArray([1])).toBe(true);
});

test('isObject', () => {
    expect(isObject({ name: 'hello' })).toBe(true);
});
