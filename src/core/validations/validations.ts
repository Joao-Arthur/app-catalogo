import { containsNumber } from './containsNumber';
import { containsSpecial } from './containsSpecial';
import { emailFormat } from './emailFormat';
import { minLength } from './minLength';
import { required } from './required';

export const validations = {
    containsNumber,
    containsSpecial,
    emailFormat,
    minLength,
    required,
} as const;
