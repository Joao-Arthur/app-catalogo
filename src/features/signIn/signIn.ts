type paramsType = {
    readonly email: string;
    readonly password: string;
}

export async function signIn({email, password}:paramsType) {
    if(!email)
        throw new Error('informe o email');
    if(!password)
        throw new Error('informe a senha');
    if(email !== 'teste' || password !== '123')
        throw new Error('email ou senha incorretos');
}
