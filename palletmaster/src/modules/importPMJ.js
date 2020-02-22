export default function onSubmit(func, item) {
    if (item == null) return;
    let reader = new FileReader();

    // jsonファイル,pmjファイル以外は処理を止める
    if (!item.name.match('.json$') && !item.name.match('.pmj$')) {
        alert('jsonファイル、またはpmjファイルを選択してください');
        return;
    }

    // ファイル読み取りに失敗したとき
    reader.onerror = function() {
        alert('ファイル読み取りに失敗しました');
    };
    //読み込んだファイルの中身を取得する
    reader.readAsText(item, 'UTF-8');

    //ファイルの中身を取得後に処理を行う
    if (item != null) {
        reader.addEventListener('load', function() {
            let json = JSON.parse(reader.result);
            func(json);
        });
    }
}
