type paramsType = {
    readonly email: string;
    readonly password: string;
}

export async function signUp({ email, password }: paramsType) {
    validator.validate([
        {
            name: 'e-mail',
            value: email,
            validations: [
                required,
                minLength(3),
                emailFormat,
            ],
        },
        {
            name: 'senha',
            value: password,
            validations: [
                required,
                minLength(8),
                containsNumber,
                containsSpecialChar,
            ],
        },
    ]);
}
