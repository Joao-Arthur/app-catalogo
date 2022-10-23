import { required } from './required';
import { RequiredError } from './RequiredError';

describe('required', () => {
    it('should throw when value is not passed', () => {
        expect(
            () => required({ value: undefined }),
        ).toThrowError(RequiredError);
        expect(
            () => required({ value: null }),
        ).toThrowError(RequiredError);
        expect(
            () => required({ value: '' }),
        ).toThrowError(RequiredError);
        expect(
            () => required({ value: 0 }),
        ).toThrowError(RequiredError);
    });

    it('should not throw when value is passed', () => {
        expect(
            () => required({ value: 'abcdefghij' }),
        ).not.toThrowError(RequiredError);
        expect(
            () => required({ value: 1 }),
        ).not.toThrowError(RequiredError);
        expect(
            () => required({ value: -1 }),
        ).not.toThrowError(RequiredError);
        expect(
            () => required({ value: 20 }),
        ).not.toThrowError(RequiredError);
        expect(
            () => required({ value: -48 }),
        ).not.toThrowError(RequiredError);
        expect(
            () => required({ value: '0' }),
        ).not.toThrowError(RequiredError);
        expect(
            () => required({ value: 'Lorem ipsum dolor sit amet' }),
        ).not.toThrowError(RequiredError);

    });
});
