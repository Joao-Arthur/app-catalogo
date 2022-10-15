import { RequiredError } from './RequiredError';

type paramsType = {
    readonly value: string | number | undefined | null;
}

export function required({ value }: paramsType) {
    if (!value)
        throw new RequiredError();
}
