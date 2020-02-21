import { getAbilityValue, getAbility } from '../../modules/getAbilityValue';
describe('getAbilityValue', () => {
    let item;
    const abilityValue = {
        STR: 1,
        CON: 2,
        POW: 3,
        DEX: 4,
        APP: 5,
        SIZ: 6,
        INT: 7,
        EDU: 8,
    };
    const power = 5;

    describe('getAbility()', () => {
        test('正常系', () => {
            item = 'STR';
            const value = getAbilityValue(item, abilityValue, power);
            expect(value).toBe('5');
        });
        test('異常系', () => {
            const value = getAbilityValue('error', abilityValue, power);
            expect(value).toBe('-5');
        });
    });

    describe('getAbilityValue()', () => {
        test('STR', () => {
            const value = getAbility('STR', abilityValue);
            expect(value).toBe(1);
        });
        test('CON', () => {
            const value = getAbility('CON', abilityValue);
            expect(value).toBe(2);
        });
        test('POW', () => {
            const value = getAbility('POW', abilityValue);
            expect(value).toBe(3);
        });
        test('DEX', () => {
            const value = getAbility('DEX', abilityValue);
            expect(value).toBe(4);
        });
        test('APP', () => {
            const value = getAbility('APP', abilityValue);
            expect(value).toBe(5);
        });
        test('SIZ', () => {
            const value = getAbility('SIZ', abilityValue);
            expect(value).toBe(6);
        });
        test('INT', () => {
            const value = getAbility('INT', abilityValue);
            expect(value).toBe(7);
        });
        test('EDU', () => {
            const value = getAbility('EDU', abilityValue);
            expect(value).toBe(8);
        });
        test('異常系', () => {
            const value = getAbility('error', abilityValue);
            expect(value).toBe(-1);
        });
    });
});
