/**
 * Determine if two objects are equal
 */
export interface Equal {
    /**
     * Return if `other` is equal to this instance
     *
     * Equality in this sense does **not** mean "the same". Two objects can be equal even if they are separate
     * instances and are stored in different places in memory.
     *
     * Two equal objects even do **not** have to be of the same type.
     *
     * @param {T} other
     * @returns {boolean}
     */
    equals<T>(other: T): boolean;
}
