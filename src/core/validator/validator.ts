import { validate } from './validate';
import {
    avaliableValidations,
} from './avaliableValidations';

export const validator = {
    validate,
    validations: avaliableValidations,
} as const;
