import { emailFormat } from './emailFormat';
import { EmailFormatError } from './EmailFormatError';

describe('emailFormat', () => {
    it('should throw when email is not valid', () => {
        expect(
            () => emailFormat({ value: 'joão ' }),
        ).toThrowError(EmailFormatError);
        expect(
            () => emailFormat({ value: '   ' }),
        ).toThrowError(EmailFormatError);
    });

    it('should not throw when email is valid', () => {
        expect(
            () => emailFormat({ value: 'joao@gmail.com' }),
        ).not.toThrowError(EmailFormatError);
        expect(
            () => emailFormat({ value: 'paulo_pedro@hotmail.com' }),
        ).not.toThrowError(EmailFormatError);
        expect(
            () => emailFormat({ value: 'lucas@outlook.com' }),
        ).not.toThrowError(EmailFormatError);
    });
});
