export default function onSubmit(func: any, item: any) {
    if (item == null) return;
    let reader = new FileReader();

    // jsonファイル,pmjファイル以外は処理を止める
    if (checkFileTypeJSONorPMJ(item.name)) {
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
            if (
                reader.result != null &&
                !(reader.result instanceof ArrayBuffer)
            ) {
                let json = JSON.parse(reader.result);
                func(json);
            }
        });
    }
}

export const checkFileTypeJSONorPMJ = (fileName: string): boolean => {
    // jsonファイル,pmjファイル以外は処理を止める
    if (
        !fileName.match('.json$') &&
        !fileName.match('.pmj$') &&
        !fileName.match('.PMJ$')
    ) {
        return false;
    }
    return true;
};
