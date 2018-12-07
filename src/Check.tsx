/* tslint:disable:no-any */
export class Check {
    /**
     * Check if the value is a string
     *
     * @param {string | any} value
     * @return {value is string}
     */
    public static isString(value: string | any): value is string {
        return typeof value === 'string';
    }

    /**
     * Check if the value is a number
     *
     * @param {number | any} value
     * @return {value is number}
     */
    public static isNumber(value: number | any): value is number {
        return typeof value === 'number';
    }

    /**
     * Check if the value is numeric
     *
     * Will return TRUE if the type of value is "number" or if it is not an array and can be parsed into a float
     *
     * @param {number | string | any} value
     * @return {value is number | string}
     */
    public static isNumeric(value: number | string | any): value is number | string {
        return typeof value === 'number' || (!Array.isArray(value) && !isNaN(parseFloat(value)));
    }

    /**
     * Check if the value is an integer
     *
     * @param {number | any} value
     * @return {value is number}
     */
    public static isInt(value: number | any): value is number {
        return Number.isInteger(value);
    }

    /**
     * Check if the value is an integer
     *
     * @param {number | any} value
     * @return {value is number}
     */
    public static isInteger(value: number | any): value is number {
        return Number.isInteger(value);
    }

    /**
     * Check if the value is an array
     *
     * @param {any[] | any} value
     * @return {value is any[]}
     */
    public static isArray(value: any[] | any): value is any[] {
        return Array.isArray(value);
    }

    /**
     * Check if the value is an object
     *
     * @param {object | any} value
     * @return {value is object}
     */
    public static isObject(value: object | any): value is object {
        return value && typeof value === 'object';
    }

    /**
     * Check if the value is undefined
     *
     * @param {any | undefined} value
     * @return {value is undefined}
     */
    public static isUndefined(value: undefined | any): value is undefined {
        return typeof value === 'undefined';
    }

    /**
     * Check if the value is NULL
     *
     * @param {any | null} value
     * @return {value is null}
     */
    public static isNull(value: null | any): value is null {
        return typeof value === 'object' && value === null;
    }

    /**
     * Check if the value is **not** NULL
     *
     * @param value
     * @return {value is any}
     */
    public static isNotNull(value: any): value is any {
        return !Check.isNull(value);
    }

    /**
     * Check if the value is a boolean
     *
     * @param {boolean | any} value
     * @return {value is boolean}
     */
    public static isBool(value: boolean | any): value is boolean {
        return typeof value === 'boolean';
    }

    /**
     * Check if the value is a boolean
     *
     * @param {boolean | any} value
     * @return {value is boolean}
     */
    public static isBoolean(value: boolean | any): value is boolean {
        return Check.isBool(value);
    }
}
