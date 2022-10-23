type paramsType<T> = {
    value: T;
    validations: (({ value }: { value: T }) => void)[];
};

type returnType = {
    errors: Error[];
}

export function validate<T>({ value, validations }: paramsType<T>): returnType {
    return {
        errors: validations
            .map(validation => {
                try {
                    validation({ value });
                } catch (error) {
                    if (error instanceof Error)
                        return error;
                }
            })
            .filter(validationError => !!validationError)
            .map(validationError => validationError as Error),
    };

}
