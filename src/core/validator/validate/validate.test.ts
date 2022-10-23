import { validate } from './validate';

class FirstError extends Error { }
class SecondError extends Error { }


describe('validate', () => {
    it('should validate the validations', () => {
        expect(validate({
            value: 'Thiago',
            validations: [
                () => { throw new FirstError('Lorem Ipsum'); },
                () => { },
                () => { throw new SecondError('Dolor Sit Amet'); },
            ],
        })).toEqual({
            errors: [
                new FirstError('Lorem Ipsum'),
                new SecondError('Dolor Sit Amet'),
            ],
        });
    });
});
