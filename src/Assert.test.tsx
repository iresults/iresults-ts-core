import { Assert } from './Assert';
import { testSuites } from './TestSuites';

describe('isString', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isString.shouldSucceedTestCases()) {
            expect(Assert.isString(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isString.shouldFailTestCases()) {
            expect(() => Assert.isString(testSet)).toThrow(TypeError);
        }
    });
});

describe('isNumber', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isNumber.shouldSucceedTestCases()) {
            expect(Assert.isNumber(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isNumber.shouldFailTestCases()) {
            expect(() => Assert.isNumber(testSet)).toThrow(TypeError);
        }
    });
});

describe('isNumeric', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isNumeric.shouldSucceedTestCases()) {
            expect(Assert.isNumeric(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isNumeric.shouldFailTestCases()) {
            expect(() => Assert.isNumeric(testSet)).toThrow(TypeError);
        }
    });
});

describe('isInteger', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isInteger.shouldSucceedTestCases()) {
            expect(Assert.isInt(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isInteger.shouldFailTestCases()) {
            expect(() => Assert.isInt(testSet)).toThrow(TypeError);
        }
    });
    it('assert should succeed', () => {
        for (const testSet of testSuites.isInteger.shouldSucceedTestCases()) {
            expect(Assert.isInteger(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isInteger.shouldFailTestCases()) {
            expect(() => Assert.isInteger(testSet)).toThrow(TypeError);
        }
    });
});

describe('isArray', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isArray.shouldSucceedTestCases()) {
            expect(Assert.isArray(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isArray.shouldFailTestCases()) {
            expect(() => Assert.isArray(testSet)).toThrow(TypeError);
        }
    });
});

describe('isObject', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isObject.shouldSucceedTestCases()) {
            expect(Assert.isObject(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isObject.shouldFailTestCases()) {
            expect(() => Assert.isObject(testSet)).toThrow(TypeError);
        }
    });
});

describe('isUndefined', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isUndefined.shouldSucceedTestCases()) {
            expect(Assert.isUndefined(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isUndefined.shouldFailTestCases()) {
            expect(() => Assert.isUndefined(testSet)).toThrow(TypeError);
        }
    });
});

describe('isNull', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isNull.shouldSucceedTestCases()) {
            expect(Assert.isNull(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isNull.shouldFailTestCases()) {
            expect(() => Assert.isNull(testSet)).toThrow(TypeError);
        }
    });
});

describe('isNotNull', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isNotNull.shouldSucceedTestCases()) {
            expect(Assert.isNotNull(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isNotNull.shouldFailTestCases()) {
            expect(() => Assert.isNotNull(testSet)).toThrow(TypeError);
        }
    });
});

describe('isBoolean', () => {
    it('assert should succeed', () => {
        for (const testSet of testSuites.isBoolean.shouldSucceedTestCases()) {
            expect(Assert.isBool(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isBoolean.shouldFailTestCases()) {
            expect(() => Assert.isBool(testSet)).toThrow(TypeError);
        }
    });
    it('assert should succeed', () => {
        for (const testSet of testSuites.isBoolean.shouldSucceedTestCases()) {
            expect(Assert.isBoolean(testSet)).toBeTruthy();
        }
    });
    it('assert should fail', () => {
        for (const testSet of testSuites.isBoolean.shouldFailTestCases()) {
            expect(() => Assert.isBoolean(testSet)).toThrow(TypeError);
        }
    });
});