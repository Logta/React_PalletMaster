interface HookInfo {
    name: string;
    url: string;
    user: string;
    diceValue: string;
}

interface Result {
    ok: string;
    result: string;
}

export default function sendBCDice(info: HookInfo) {
    getDiceResultAsync(info).then((result: Result) => {
        sendDiscordText(result, info);
    });
}

export const getDiceResult = async (diceValue: string): Promise<any> => {
    const url =
        'https://www.taruki.com/bcdice-api' +
        '/v1/diceroll?system=Cthulhu&command=' +
        'CCB<=' +
        diceValue; // リクエスト先URL
    return await fetch(url, {
        method: 'GET',
    });
};

export const getDiceResultAsync = async (info: HookInfo): Promise<Result> => {
    const response = await getDiceResult(info.diceValue).catch(error => error);
    const result = response.json();
    return result;
};

function sendDiscordText(result: Result, item: HookInfo) {
    const obj = {
        username: item.user,
        content: item.name + ' ' + result.result,
        embeds: [
            {
                title: item.name + ' ダイスロール',
                description: result.result,
                color: 5620992,
                footer: {
                    text: '© 2020 Palletmaster',
                },
                author: {
                    name: 'ダイスロール結果',
                },
            },
        ],
    };
    const method = 'POST';
    const body = JSON.stringify(obj);
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };
    fetch(item.url, { method, headers, body })
        .then(console.log)
        .catch(console.error);
}
