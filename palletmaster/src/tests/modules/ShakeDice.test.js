import { ShakeOneDice, getOkStatus } from '../../modules/ShakeDice';

describe('shakeNDNDice', () => {
    describe('shakeOneDice()', () => {
        test('Math.random関数の返答が0.5未満', () => {
            const randomMock = jest.spyOn(Math, 'random');
            randomMock.mockReturnValue(0.2);
            const dice = ShakeOneDice(2);
            expect(dice).toBe(1);
        });
        test('Math.random関数の返答が0.5以上', () => {
            const randomMock = jest.spyOn(Math, 'random');
            randomMock.mockReturnValue(0.8);
            const dice = ShakeOneDice(2);
            expect(dice).toBe(2);
        });
    });
    describe('getOkStatus()', () => {
        test('クリティカル', () => {
            const result = getOkStatus(2, 50);
            expect(result).toBe('クリティカル');
        });
        test('成功', () => {
            const result = getOkStatus(25, 50);
            expect(result).toBe('成功');
        });
        test('失敗', () => {
            const result = getOkStatus(75, 50);
            expect(result).toBe('失敗');
        });
    });
});
