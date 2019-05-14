class SomeObject {}

const isString = {
    shouldSucceedTestCases: () => {
        return [
            'a string',
            'another string'
        ];
    },
    shouldFailTestCases: () => {
        return [
            true,
            false,
            null,
            undefined,
            1,
            2.03,
            [3],
            ['text'],
            new SomeObject()
        ];

    }
};

const isNumber = {
    shouldSucceedTestCases: () => {
        return [
            1,
            2.03,
            Number.MAX_SAFE_INTEGER,
            Number.MAX_VALUE,
            Number.MIN_SAFE_INTEGER,
            Number.MIN_VALUE,
        ];
    },
    shouldFailTestCases: () => {
        return [
            true,
            false,
            null,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    }
};

const isNumeric = {
    shouldSucceedTestCases: () => {
        return [
            1,
            2.03,
            Number.MAX_SAFE_INTEGER,
            Number.MAX_VALUE,
            Number.MIN_SAFE_INTEGER,
            Number.MIN_VALUE,
            '1',
            '2.03',
            Number.MAX_SAFE_INTEGER.toFixed(100),
            Number.MAX_VALUE.toFixed(100),
            Number.MIN_SAFE_INTEGER.toFixed(100),
            Number.MIN_VALUE.toFixed(100),
        ];
    },
    shouldFailTestCases: () => {
        return [
            true,
            false,
            null,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    }
};

const isInteger = {
    shouldSucceedTestCases: () => {
        return [
            1,
            Number.MAX_SAFE_INTEGER,
            Number.MIN_SAFE_INTEGER,
        ];
    },
    shouldFailTestCases: () => {
        return [
            true,
            false,
            null,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject(),
            '1',
            '2.03',
        ];
    }
};

const isArray = {
    shouldSucceedTestCases: () => {
        return [
            [],
            [1],
            ['text'],
        ];
    },
    shouldFailTestCases: () => {
        return [
            true,
            false,
            null,
            undefined,
            'string',
            1.0,
            2.03,
            new SomeObject()
        ];
    }
};

const isObject = {
    shouldSucceedTestCases: () => {
        return [
            {},
            new SomeObject(),
            [],
            [1],
            ['text'],
        ];
    },
    shouldFailTestCases: () => {
        return [
            true,
            false,
            null,
            undefined,
            'string',
            1.0,
            2.03,
        ];
    }
};

const isUndefined = {
    shouldSucceedTestCases: (): undefined[] => {
        return [
            undefined
        ];
    },
    shouldFailTestCases: () => {
        return [
            true,
            false,
            null,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    }
};

const isNull = {
    shouldSucceedTestCases: (): null[] => {
        return [
            null
        ];
    },
    shouldFailTestCases: () => {
        return [
            true,
            false,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    }
};

const isNotNull = {
    shouldSucceedTestCases: () => {
        return [
            true,
            false,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    },
    shouldFailTestCases: (): null[] => {
        return [
            null
        ];
    }
};

const isBoolean = {
    shouldSucceedTestCases: () => {
        return [
            true,
            false,
        ];
    },
    shouldFailTestCases: () => {
        return [
            null,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    }
};

const testSuites = {
    isString,
    isNumber,
    isNumeric,
    isInteger,
    isArray,
    isObject,
    isUndefined,
    isNull,
    isNotNull,
    isBoolean,
};

export {
    testSuites
};