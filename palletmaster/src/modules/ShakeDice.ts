interface Item {
    name: string;
    url: string;
    user: string;
    diceValue: string;
}

interface Result {
    ok: string;
    result: string;
}

const ShakeDice = (item: Item): Result => {
    let result: Result = {
        ok: '',
        result: '',
    };

    let _1d100Value: number = Math.floor(Math.random() * 100) + 1;

    result.ok = getOkStatus(_1d100Value, +item.diceValue);

    result.result =
        '技能:' + item.name + ' ' + _1d100Value + ' <= ' + item.diceValue;

    return result;
};

export const getOkStatus = (diceValue: number, skillValue: number): string => {
    if (diceValue <= 5) {
        return 'クリティカル';
    } else if (diceValue <= skillValue) {
        return '成功';
    } else {
        return '失敗';
    }
};

export const ShakeOneDice = (num: number): number => {
    return Math.floor(Math.random() * num) + 1;
};

export default ShakeDice;
