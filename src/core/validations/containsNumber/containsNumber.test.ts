import { containsNumber } from './containsNumber';
import { ContainsNumberError } from './ContainsNumberError';

describe('containsNumber', () => {
    it('should throw when not contains number', () => {
        expect(
            () => containsNumber({ value: 'ab&cdefg' }),
        ).toThrowError(ContainsNumberError);
        expect(
            () => containsNumber({ value: '' }),
        ).toThrowError(ContainsNumberError);
    });

    it('should not throw when contains number', () => {
        expect(
            () => containsNumber({ value: '7' }),
        ).not.toThrowError(ContainsNumberError);
        expect(
            () => containsNumber({ value: 'hi m4rk' }),
        ).not.toThrowError(ContainsNumberError);
        expect(
            () => containsNumber({ value: 'h3llo world' }),
        ).not.toThrowError(ContainsNumberError);
    });
});
