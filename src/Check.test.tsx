import { Check } from './Check';
import { testSuites } from './TestSuites';

describe('isString', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isString.shouldSucceedTestCases()) {
            expect(Check.isString(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isString.shouldFailTestCases()) {
            expect(Check.isString(testSet)).toBeFalsy();
        }
    });

});

describe('isNumber', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isNumber.shouldSucceedTestCases()) {
            expect(Check.isNumber(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isNumber.shouldFailTestCases()) {
            expect(Check.isNumber(testSet)).toBeFalsy();
        }
    });
});

describe('isNumeric', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isNumeric.shouldSucceedTestCases()) {
            expect(Check.isNumeric(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isNumeric.shouldFailTestCases()) {
            expect(Check.isNumeric(testSet)).toBeFalsy();
        }
    });
});

describe('isInteger', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isInteger.shouldSucceedTestCases()) {
            expect(Check.isInt(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isInteger.shouldFailTestCases()) {
            expect(Check.isInt(testSet)).toBeFalsy();
        }
    });
    it('should succeed', () => {
        for (const testSet of testSuites.isInteger.shouldSucceedTestCases()) {
            expect(Check.isInteger(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isInteger.shouldFailTestCases()) {
            expect(Check.isInteger(testSet)).toBeFalsy();
        }
    });
});

describe('isArray', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isArray.shouldSucceedTestCases()) {
            expect(Check.isArray(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isArray.shouldFailTestCases()) {
            expect(Check.isArray(testSet)).toBeFalsy();
        }
    });
});

describe('isObject', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isObject.shouldSucceedTestCases()) {
            expect(Check.isObject(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isObject.shouldFailTestCases()) {
            expect(Check.isObject(testSet)).toBeFalsy();
        }
    });
});

describe('isUndefined', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isUndefined.shouldSucceedTestCases()) {
            expect(Check.isUndefined(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isUndefined.shouldFailTestCases()) {
            expect(Check.isUndefined(testSet)).toBeFalsy();
        }
    });
});

describe('isNull', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isNull.shouldSucceedTestCases()) {
            expect(Check.isNull(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isNull.shouldFailTestCases()) {
            expect(Check.isNull(testSet)).toBeFalsy();
        }
    });
});

describe('isNotNull', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isNotNull.shouldSucceedTestCases()) {
            expect(Check.isNotNull(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isNotNull.shouldFailTestCases()) {
            expect(Check.isNotNull(testSet)).toBeFalsy();
        }
    });
});

describe('isBoolean', () => {
    it('should succeed', () => {
        for (const testSet of testSuites.isBoolean.shouldSucceedTestCases()) {
            expect(Check.isBool(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isBoolean.shouldFailTestCases()) {
            expect(Check.isBool(testSet)).toBeFalsy();
        }
    });
    it('should succeed', () => {
        for (const testSet of testSuites.isBoolean.shouldSucceedTestCases()) {
            expect(Check.isBoolean(testSet)).toBeTruthy();
        }
    });
    it('should fail', () => {
        for (const testSet of testSuites.isBoolean.shouldFailTestCases()) {
            expect(Check.isBoolean(testSet)).toBeFalsy();
        }
    });
});