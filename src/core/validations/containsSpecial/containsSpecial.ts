import { ContainsSpecialError } from './ContainsSpecialError';

const specialCharacters = ['!', '@', '#', '$', '%', '¨', '&', '*', '(', ')'] as const;

type paramsType = {
    readonly value: string;
}

export function containsSpecial({ value }: paramsType) {
    if (!specialCharacters.some(special => value.includes(special)))
        throw new ContainsSpecialError();
}
