export function formatCurrency(value: number) {
    const fixedNumber = value.toFixed(2);
    const [whole, decimal] = fixedNumber.split('.');
    return `R$ ${whole},${decimal}`;
}