/* tslint:disable:no-any */
export class Assert {
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
     * Throw a Type Error if the value is **not** a string
     *
     * @param {string | any} value
     * @return {value is string}
     */
    public static assertString(value: string | any): value is string {
        if (!Assert.isString(value)) {
            throw new TypeError('Expected "string" got ' + typeof value);
        }
        return true;
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
     * Throw a Type Error if the value is **not** a number
     *
     * @param {number | any} value
     * @return {value is number}
     */
    public static assertNumber(value: number | any): value is number {
        if (!Assert.isNumber(value)) {
            throw new TypeError('Expected "number" got ' + typeof value);
        }
        return true;
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
     * Throw a Type Error if the value is **not** numeric
     *
     * Will throw unless the type of value is "number" or if it is not an array and can be parsed into a float
     *
     * @param {number | string | any} value
     * @return {value is number | string}
     */
    public static assertNumeric(value: number | string | any): value is number | string {
        if (!Assert.isNumeric(value)) {
            throw new TypeError('Expected numeric got ' + typeof value);
        }
        return true;
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
     * Throw a Type Error if the value is **not** an integer
     *
     * @param {number | any} value
     * @return {value is number}
     */
    public static assertInt(value: number | any): value is number {
        if (!Number.isInteger(value)) {
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
    public static assertInteger(value: number | any): value is number {
        return Assert.assertInt(value);
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
     * Throw a Type Error if the value is **not** an array
     *
     * @param {any[] | any} value
     * @return {value is any[]}
     */
    public static assertArray(value: any[] | any): value is any[] {
        if (!Array.isArray(value)) {
            throw new TypeError('Expected "array" got ' + typeof value);
        }
        return true;
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
     * Throw a Type Error if the value is **not** an object
     *
     * @param {object | any} value
     * @return {value is object}
     */
    public static assertObject(value: object | any): value is object {
        if (!Assert.isObject(value)) {
            throw new TypeError('Expected "object" got ' + typeof value);
        }
        return true;
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
     * Throw a Type Error if the value is **not** undefined
     *
     * @param {any | undefined} value
     * @return {value is undefined}
     */
    public static assertUndefined(value: undefined | any): value is undefined {
        if (!Assert.isUndefined(value)) {
            throw new TypeError('Expected undefined got ' + typeof value);
        }
        return true;
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
     * Throw a Type Error if the value is **not** NULL
     *
     * @param {any | null} value
     * @return {value is null}
     */
    public static assertNull(value: null | any): value is null {
        if (!Assert.isNull(value)) {
            throw new TypeError('Expected NULL got ' + typeof value);
        }
        return true;
    }

    /**
     * Check if the value is **not** NULL
     *
     * @param value
     * @return {value is any}
     */
    public static isNotNull(value: any): value is any {
        return !Assert.isNull(value);
    }

    /**
     * Throw a Type Error if the value is NULL
     *
     * @param value
     * @return {value is any}
     */
    public static assertNotNull(value: any): value is any {
        if (!Assert.isNotNull(value)) {
            throw new TypeError('Expected not NULL');
        }
        return true;
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
        return Assert.isBool(value);
    }

    /**
     * Throw a Type Error if the value is **not** a boolean
     *
     * @param {boolean | any} value
     * @return {value is boolean}
     */
    public static assertBool(value: number | any): value is boolean {
        if (!Assert.isBool(value)) {
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
    public static assertBoolean(value: number | any): value is boolean {
        return Assert.assertBool(value);
    }
}