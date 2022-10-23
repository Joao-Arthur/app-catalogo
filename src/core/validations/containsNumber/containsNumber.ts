import { ContainsNumberError } from './ContainsNumberError';

const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

type paramsType = {
    readonly value: string;
}

export function containsNumber({ value }: paramsType) {
    if (!numbers.some(number => value.includes(number)))
        throw new ContainsNumberError();
}
