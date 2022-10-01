import { formatCurrency } from './formatCurrency';

describe('formatCurrency', ()=> {
    it('should format float numbers', ()=> {
        expect(formatCurrency(10.10)).toBe('R$ 10,10');
        expect(formatCurrency(3.1)).toBe('R$ 3,10');
        expect(formatCurrency(4.04)).toBe('R$ 4,04');
    });

    it('should format round numbers', ()=> {
        expect(formatCurrency(420)).toBe('R$ 420,00');
        expect(formatCurrency(0)).toBe('R$ 0,00');
    });

    it('should format periodic decimation numbers', ()=> {
        expect(formatCurrency(0.2 + 0.4)).toBe('R$ 0,60');
    });
});
