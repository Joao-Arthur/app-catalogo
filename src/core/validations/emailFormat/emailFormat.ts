import * as EmailValidator from 'email-validator';
import { EmailFormatError } from './EmailFormatError';

type paramsType = {
    readonly value: string;
}

export function emailFormat({ value }: paramsType) {
    if (!EmailValidator.validate(value))
        throw new EmailFormatError();
}
