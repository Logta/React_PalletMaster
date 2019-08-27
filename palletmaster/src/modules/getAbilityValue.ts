type abilityValue = {
    STR: number,
    CON: number,
    POW: number,
    DEX: number,
    APP: number,
    SIZ: number,
    INT: number,
    EDU: number
  };
  
function getAbilityValue(item: string, abilityValue: abilityValue) : number{
    const eq = <T>(val1: T) => (val2: T) => val1 === val2;
        
    const result = when(item)
    .on(eq("STR"), () => abilityValue.STR)
    .on(eq("CON"), () => abilityValue.CON)
    .on(eq("POW"), () => abilityValue.POW)
    .on(eq("DEX"), () => abilityValue.DEX)
    .on(eq("APP"), () => abilityValue.APP)
    .on(eq("SIZ"), () => abilityValue.SIZ)
    .on(eq("INT"), () => abilityValue.INT)
    .on(eq("EDU"), () => abilityValue.EDU)
    .otherwise(() => -1)

    return result;
};

type ChainedWhen<T, R> = {
    on: <A>(pred: (v: T) => boolean, fn: () => A) => ChainedWhen<T, R | A>;
    otherwise: <A>(fn: () => A) => R | A;
};

const match = <T, R>(val: any): ChainedWhen<T, R> => ({
    on: <A>(pred: (v: T) => boolean, fn: () => A) => match<T, R | A>(val),
    otherwise: <A>(fn: () => A): A | R => val
});

const chain = <T, R>(val: T): ChainedWhen<T, R> => ({
    on: <A>(pred: (v: T) => boolean, fn: () => A) =>
        pred(val) ? match(fn()) : chain<T, A | R>(val),
    otherwise: <A>(fn: () => A) => fn()
});

const when = <T>(val: T) => ({
    on: <A>(pred: (v: T) => boolean, fn: () => A) =>
        pred(val) ? match<T, A>(fn()) : chain<T, A>(val)
});

export default getAbilityValue;