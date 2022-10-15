import { emailFormat } from './emailFormat';
import { EmailFormatError } from './EmailFormatError';

describe('emailFormat', () => {
    it('should throw when not contains special character', () => {
        expect(
            () => emailFormat({ value: 'a8bcdefg' }),
        ).toThrowError(EmailFormatError);
        expect(
            () => emailFormat({ value: '' }),
        ).toThrowError(EmailFormatError);
    });

    it('should not throw when contains special character', () => {
        expect(
            () => emailFormat({ value: '%' }),
        ).not.toThrowError(EmailFormatError);
        expect(
            () => emailFormat({ value: 'hi m*rk' }),
        ).not.toThrowError(EmailFormatError);
        expect(
            () => emailFormat({ value: 'hello w@rld' }),
        ).not.toThrowError(EmailFormatError);
    });
});
