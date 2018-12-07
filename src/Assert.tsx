/* tslint:disable:no-any */
import { Check } from './Check';

export class Assert {
    /**
     * Throw a Type Error if the value is **not** a string
     *
     * @param {string | any} value
     * @return {value is string}
     */
    public static isString(value: string | any): value is string {
        if (!Check.isString(value)) {
            throw new TypeError('Expected "string" got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** a number
     *
     * @param {number | any} value
     * @return {value is number}
     */
    public static isNumber(value: number | any): value is number {
        if (!Check.isNumber(value)) {
            throw new TypeError('Expected "number" got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** numeric
     *
     * Will throw unless the type of value is "number" or if it is not an array and can be parsed into a float
     *
     * @param {number | string | any} value
     * @return {value is number | string}
     */
    public static isNumeric(value: number | string | any): value is number | string {
        if (!Check.isNumeric(value)) {
            throw new TypeError('Expected numeric got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** an integer
     *
     * @param {number | any} value
     * @return {value is number}
     */
    public static isInt(value: number | any): value is number {
        if (!Check.isInteger(value)) {
            throw new TypeError('Expected "integer" got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** an integer
     *
     * @param {number | any} value
     * @return {value is number}
     */
    public static isInteger(value: number | any): value is number {
        return Assert.isInt(value);
    }

    /**
     * Throw a Type Error if the value is **not** an array
     *
     * @param {any[] | any} value
     * @return {value is any[]}
     */
    public static isArray(value: any[] | any): value is any[] {
        if (!Check.isArray(value)) {
            throw new TypeError('Expected "array" got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** an object
     *
     * @param {object | any} value
     * @return {value is object}
     */
    public static isObject(value: object | any): value is object {
        if (!Check.isObject(value)) {
            throw new TypeError('Expected "object" got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** undefined
     *
     * @param {any | undefined} value
     * @return {value is undefined}
     */
    public static isUndefined(value: undefined | any): value is undefined {
        if (!Check.isUndefined(value)) {
            throw new TypeError('Expected undefined got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** NULL
     *
     * @param {any | null} value
     * @return {value is null}
     */
    public static isNull(value: null | any): value is null {
        if (!Check.isNull(value)) {
            throw new TypeError('Expected NULL got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is NULL
     *
     * @param value
     * @return {value is any}
     */
    public static isNotNull(value: any): value is any {
        if (!Check.isNotNull(value)) {
            throw new TypeError('Expected not NULL');
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** a boolean
     *
     * @param {boolean | any} value
     * @return {value is boolean}
     */
    public static isBool(value: number | any): value is boolean {
        if (!Check.isBool(value)) {
            throw new TypeError('Expected "bool" got ' + typeof value);
        }
        return true;
    }

    /**
     * Throw a Type Error if the value is **not** a boolean
     *
     * @param {boolean | any} value
     * @return {value is boolean}
     */
    public static isBoolean(value: number | any): value is boolean {
        return Assert.isBool(value);
    }
}