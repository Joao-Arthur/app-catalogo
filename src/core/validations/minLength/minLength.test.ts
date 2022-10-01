import { minLength } from './minLength';
import { MinLengthError } from './MinLengthError';

describe('minLength', () => {
    it('should throw when length not achieved', () => {
        expect(
            () => minLength({ field: 'user', value: 'abcdefg', length: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ field: 'user', value: '', length: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ field: 'user', value: [5, 23, 0], length: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ field: 'user', value: [], length: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ field: 'user', value: { length: 7 }, length: 10 }),
        ).toThrowError(MinLengthError);
        expect(
            () => minLength({ field: 'user', value: { length: 0 }, length: 10 }),
        ).toThrowError(MinLengthError);
    });

    it('should not throw when length achieved', () => {
        expect(
            () => minLength({ field: 'user', value: 'abcdefghij', length: 10 }),
        ).not.toThrowError(MinLengthError);
        expect(
            () => minLength({ field: 'user', value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], length: 10 }),
        ).not.toThrowError(MinLengthError);
        expect(
            () => minLength({ field: 'user', value: { length: 10 }, length: 10 }),
        ).not.toThrowError(MinLengthError);
    });
});
