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

function ShakeDice(item: Item): Result {
    let result: Result = {
        ok: '',
        result: '',
    };

    let _1d100Value: number = Math.round(Math.random() * 100) + 1;

    if (_1d100Value <= 5) {
        result.ok = 'クリティカル';
    } else if (_1d100Value <= +item.diceValue) {
        result.ok = '成功';
    } else {
        result.ok = '失敗';
    }

    result.result =
        '技能:' + item.name + ' ' + _1d100Value + ' <= ' + item.diceValue;

    return result;
}

export default ShakeDice;
