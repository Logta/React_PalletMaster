import shakeNDNDice, { IntSumToString } from '../../modules/shakeNDNDice';
describe('shakeNDNDice', () => {
    let ItemNDN;
    beforeAll(() => {
        ItemNDN = {
            count: 1,
            number: 2,
        };
    });

    beforeEach(() => {
        ItemNDN.count = 1;
        ItemNDN.number = 2;
    });

    describe('shakeNDNDice()', () => {
        test('shakeNDNDice', () => {
            const counter = shakeNDNDice(ItemNDN);
            expect(counter.ok).toBe('1D2');
            expect(counter.result).toMatch(/[0-9]{1}/);
        });
    });

    describe('IntSumToString()', () => {
        test('sumToString', () => {
            const numbers = [1, 2, 3]; // increment上記と同じ
            const sum = IntSumToString(numbers);
            expect(sum).toBe('6');
        });
    });
});
