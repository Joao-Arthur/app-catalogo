import { MinLengthError } from './RequiredError';

type paramsType = {
    readonly field: string;
    readonly value: { length: number };
    readonly length: number;
}

export function required({ field, value, length }: paramsType) {
    if (value.length < length)
        throw new MinLengthError(field, length);
}
