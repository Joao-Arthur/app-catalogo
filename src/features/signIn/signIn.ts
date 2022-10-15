type paramsType = {
    readonly email: string;
    readonly password: string;
}

export async function signIn({ email, password }: paramsType) {
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
                containsSpecial,
            ],
        },
    ]);

    if (email !== 'teste' || password !== '123')
        throw new Error('Email ou senha incorretos!');
}
