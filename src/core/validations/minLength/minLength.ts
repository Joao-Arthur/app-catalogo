import { MinLengthError } from './MinLengthError';

type paramsType = {
    readonly field: string;
    readonly value: { length: number };
    readonly length: number;
}

export function minLength({ field, value, length }: paramsType) {
    if (value.length < length)
        throw new MinLengthError(field, length);
}
