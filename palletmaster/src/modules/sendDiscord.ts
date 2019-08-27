interface Item {
  name: string;
  url: string;
  user: string;
  value: string;
}

interface Result {
  ok: string;
  result: string;
}

export function sendBCDice(item: Item) 
{
  sendDice(sendDiscordText, item);
}

function ShakeDice(item: Item): Result
{
  let result: Result = {
    ok :"",
    result : "",
  };
  let _1d100Value: number = Math.round(Math.random() * 100) + 1;
  if(_1d100Value <= 5){
    result.ok = "クリティカル"
  }else if(_1d100Value <= +item.value){
    result.ok = "成功"
  }else{
    result.ok = "失敗"
  }

  result.result = "技能:" + item.name + " " + _1d100Value
   + " <= " + item.value;

   return result;
}

function sendDiscordText(result: Result, item: Item) {
  if (result.ok) {
    const webhook = require("webhook-discord");

    const Hook = new webhook.Webhook(item.url);
    Hook.info(item.user, item.name + " " + result.result);
  }
}

async function sendDice(func: (json: Result, item: Item) => void, item: Item) {
  const url =
    "https://www.taruki.com/bcdice-api" +
    "/v1/diceroll?system=Cthulhu&command=" +
    "CCB<=" +
    item.value; // リクエスト先URL

  fetch(url)
    .then(res => res.json())
    .then(response => {
      let json = response;
      const jsonLog = JSON.stringify(json);
      if (response.ok) {
        return func(json, item);
      }
    })
    .catch(error => console.log(error));
}

export function goodbye(name: string) {
  return `Goodbye ${name}`;
}

export default ShakeDice;