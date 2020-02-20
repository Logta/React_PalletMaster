interface ItemNDN {
    count: number;
    number: number;
}

interface Result {
    ok: string;
    result: string;
}

function ShakeNDNDice(item: ItemNDN): Result {
    let diceResults: number[] = [];

    let result: Result = {
        ok: String(item.count) + 'D' + String(item.number),
        result: '',
    };

    for (var i = 0; i < item.count; i++) {
        diceResults.push(Math.round(Math.random() * item.number) + 1);
    }

    result.result = IntSumToString(diceResults);

    return result;
}

export const IntSumToString = (results: number[]): string => {
    return String(
        results.reduce((total, data) => {
            return total + data;
        })
    );
};

export default ShakeNDNDice;
