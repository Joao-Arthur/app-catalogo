import { containsSpecial } from './containsSpecial';
import { ContainsSpecialError } from './ContainsSpecialError';

describe('containsSpecial', () => {
    it('should throw when not contains special character', () => {
        expect(
            () => containsSpecial({ value: 'a8bcdefg' }),
        ).toThrowError(ContainsSpecialError);
        expect(
            () => containsSpecial({ value: '' }),
        ).toThrowError(ContainsSpecialError);
    });

    it('should not throw when contains special character', () => {
        expect(
            () => containsSpecial({ value: '%' }),
        ).not.toThrowError(ContainsSpecialError);
        expect(
            () => containsSpecial({ value: 'hi m*rk' }),
        ).not.toThrowError(ContainsSpecialError);
        expect(
            () => containsSpecial({ value: 'hello w@rld' }),
        ).not.toThrowError(ContainsSpecialError);
    });
});
