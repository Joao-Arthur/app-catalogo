import { minLength } from './minLength';
import { MinLengthError } from './MinLengthError';

describe('minLength', () => {
    it('should throw when length not achieved', () => {
        expect(
            () => minLength({ value: 'abcdefg', minLength: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ value: '', minLength: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ value: [5, 23, 0], minLength: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ value: [], minLength: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ value: { length: 7 }, minLength: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ value: { length: 0 }, minLength: 10 }),
        ).toThrowError(MinLengthError);
    });

    it('should not throw when length achieved', () => {
        expect(
            () => minLength({ value: 'abcdefghij', minLength: 10 }),
        ).not.toThrowError(MinLengthError);
        expect(
            () => minLength({ value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], minLength: 10 }),
        ).not.toThrowError(MinLengthError);
        expect(
            () => minLength({ value: { length: 10 }, minLength: 10 }),
        ).not.toThrowError(MinLengthError);
    });
});
