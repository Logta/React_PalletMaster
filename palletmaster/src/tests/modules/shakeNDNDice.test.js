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
        test('Math.random関数の返答が0.5未満', () => {
            const randomMock = jest.spyOn(Math, 'random');
            randomMock.mockReturnValue(0.2);
            const counter = shakeNDNDice(ItemNDN);
            expect(counter.result).toBe('1');
        });
        test('Math.random関数の返答が0.5以上', () => {
            const randomMock = jest.spyOn(Math, 'random');
            randomMock.mockReturnValue(0.8);
            const counter = shakeNDNDice(ItemNDN);
            expect(counter.result).toBe('2');
        });
    });

    describe('IntSumToString()', () => {
        test('sumToString', () => {
            const numbers = [1, 2, 3];
            const sum = IntSumToString(numbers);
            expect(sum).toBe('6');
        });
    });
});
