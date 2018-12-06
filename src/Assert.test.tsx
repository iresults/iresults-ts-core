import { Assert } from './Assert';

class SomeObject {}

describe('isString', () => {
    const shouldSucceedTestCases = () => {
        return [
            'a string',
            'another string'
        ];
    };
    const shouldFailTestCases = () => {
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
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isString(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isString(testSet)).toBeFalsy();
        }
    });

    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertString(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertString(testSet)).toThrow(TypeError);
        }
    });
});

describe('isNumber', () => {
    const shouldSucceedTestCases = () => {
        return [
            1,
            2.03,
            Number.MAX_SAFE_INTEGER,
            Number.MAX_VALUE,
            Number.MIN_SAFE_INTEGER,
            Number.MIN_VALUE,
        ];
    };
    const shouldFailTestCases = () => {
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
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isNumber(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isNumber(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertNumber(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertNumber(testSet)).toThrow(TypeError);
        }
    });
});

describe('isNumeric', () => {
    const shouldSucceedTestCases = () => {
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
    };
    const shouldFailTestCases = () => {
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
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isNumeric(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isNumeric(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertNumeric(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertNumeric(testSet)).toThrow(TypeError);
        }
    });
});

describe('isInteger', () => {
    const shouldSucceedTestCases = () => {
        return [
            1,
            Number.MAX_SAFE_INTEGER,
            Number.MIN_SAFE_INTEGER,
        ];
    };
    const shouldFailTestCases = () => {
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
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isInt(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isInt(testSet)).toBeFalsy();
        }
    });
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isInteger(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isInteger(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertInt(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertInt(testSet)).toThrow(TypeError);
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertInteger(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertInteger(testSet)).toThrow(TypeError);
        }
    });
});

describe('isArray', () => {
    const shouldSucceedTestCases = () => {
        return [
            [],
            [1],
            ['text'],
        ];
    };
    const shouldFailTestCases = () => {
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
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isArray(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isArray(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertArray(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertArray(testSet)).toThrow(TypeError);
        }
    });
});

describe('isObject', () => {
    const shouldSucceedTestCases = () => {
        return [
            {},
            new SomeObject(),
            [],
            [1],
            ['text'],
        ];
    };
    const shouldFailTestCases = () => {
        return [
            true,
            false,
            null,
            undefined,
            'string',
            1.0,
            2.03,
        ];
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isObject(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isObject(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertObject(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertObject(testSet)).toThrow(TypeError);
        }
    });
});

describe('isUndefined', () => {
    const shouldSucceedTestCases = () => {
        return [
            undefined
        ];
    };
    const shouldFailTestCases = () => {
        return [
            true,
            false,
            null,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isUndefined(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isUndefined(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertUndefined(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertUndefined(testSet)).toThrow(TypeError);
        }
    });
});

describe('isNull', () => {
    const shouldSucceedTestCases = () => {
        return [
            null
        ];
    };
    const shouldFailTestCases = () => {
        return [
            true,
            false,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isNull(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isNull(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertNull(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertNull(testSet)).toThrow(TypeError);
        }
    });
});

describe('isNotNull', () => {
    const shouldSucceedTestCases = () => {
        return [
            true,
            false,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    };
    const shouldFailTestCases = () => {
        return [
            null
        ];
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isNotNull(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isNotNull(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertNotNull(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertNotNull(testSet)).toThrow(TypeError);
        }
    });
});

describe('isBoolean', () => {
    const shouldSucceedTestCases = () => {
        return [
            true,
            false,
        ];
    };
    const shouldFailTestCases = () => {
        return [
            null,
            undefined,
            [3],
            ['text'],
            'string',
            new SomeObject()
        ];
    };
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isBool(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isBool(testSet)).toBeFalsy();
        }
    });
    it('should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.isBoolean(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(Assert.isBoolean(testSet)).toBeFalsy();
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertBool(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertBool(testSet)).toThrow(TypeError);
        }
    });
    it('assert should succeed', () => {
        for (const testSet of shouldSucceedTestCases()) {
            expect(Assert.assertBoolean(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of shouldFailTestCases()) {
            expect(() => Assert.assertBoolean(testSet)).toThrow(TypeError);
        }
    });
});