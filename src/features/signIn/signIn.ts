import { validator } from '../../core/validator';

type paramsType = {
    readonly email: string;
    readonly password: string;
}

export async function signIn({ email, password }: paramsType) {
    validator.validate({
        value: email,
        validations: [
            validator.validations.required,
            validator.validations.minLength(3),
            validator.validations.emailFormat,
        ],
    });
    validator.validate({
        value: password,
        validations: [
            validator.validations.required,
            validator.validations.minLength(8),
            validator.validations.containsNumber,
            validator.validations.containsSpecial,
        ],
    });

    if (email !== 'teste' || password !== '123')
        throw new Error('Email ou senha incorretos!');
}
