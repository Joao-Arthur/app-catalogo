import { validator } from '../../core/validator';

type paramsType = {
    readonly email: string;
    readonly password: string;
}

export async function signUp({ email, password }: paramsType) {
    const emailValidation = validator.validate({
        value: email,
        validations: [
            validator.validations.required,
            validator.validations.minLength(3),
            validator.validations.emailFormat,
        ],
    });
    const passwordValidation = validator.validate({
        value: password,
        validations: [
            validator.validations.required,
            validator.validations.minLength(8),
            validator.validations.containsNumber,
            validator.validations.containsSpecial,
        ],
    });

    if (emailValidation.errors.length)
        return;
    if (passwordValidation.errors.length)
        return;
}
