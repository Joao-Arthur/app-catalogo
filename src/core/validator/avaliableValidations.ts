import { validations } from '../validations';

const containsNumber = validations.containsNumber;
const containsSpecial = validations.containsSpecial;
const emailFormat = validations.emailFormat;
const required = validations.required;

type minLengthParams = {
    readonly value: {
        readonly length: number;
    }
}

const minLength =
    (length: number) =>
        ({ value }: minLengthParams) =>
            validations.minLength({ value, minLength: length });

export const avaliableValidations = {
    containsNumber,
    containsSpecial,
    emailFormat,
    required,
    minLength,
} as const;
