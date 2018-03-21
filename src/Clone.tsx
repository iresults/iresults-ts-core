/**
 * Allow cloning of instances
 */
export interface Clone {
    /**
     * Create a clone of the instance
     *
     * @returns {Clone}
     */
    clone(): Clone;
}
