import { EmailFormatError } from "./EmailFormatError";

type paramsType = {
    readonly value: string;
}

export function emailFormat({ value }: paramsType) {
    if ()
        throw new EmailFormatError();
}
