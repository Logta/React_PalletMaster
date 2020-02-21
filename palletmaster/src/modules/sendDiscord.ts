import webhook from 'webhook-discord';

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

function sendDiscordText(result: Result, item: HookInfo): boolean {
    if (result.ok) {
        try {
            const Hook = new webhook.Webhook(item.url);
            Hook.info(item.user, item.name + ' ' + result.result);
            return true;
        } catch (error) {
            return false;
        }
    }
    return false;
}
