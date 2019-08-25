This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Redux の書き方

### states
statesフォルダ内に保存するデータ名のファイルを作る(ex: setting->設定データ)

#### データ名ファイル内
index.tsを記述
→他データフォルダのindex.tsを参照
setterの分だけSetﾃﾞｰﾀ.tsファイルを作成

### データ名フォルダ外
index.tsに追記
他を参照して書く

*要注意点
　Stateに書かれてるデータ型とReducerで返り値になっているデータ型が完全に一致していないとエラーを吐く
　データ型の一部が欠落していると返り値のデータ型が増殖してしまう
　例：正常　const reducer: (state: データ名.State | undefined, action: Actions) => データ名.State
　　　異常　const reducer: (state: データ名.State | undefined, action: Actions) => データ名.State|
                 データ名{------------------}
　　　上記はデータ名{------------------}の形の欠落データ型がreturnされてしまっている
　...stateは扱いに注意 → Characterのファイルを参照
　　　

### containers
./containersフォルダにreduxを関連付けるcomponents、pageのファイルと同名のtsxファイルを作成する

#### containers中
```
const mapStateToProps = (state: RootState) => {
    return {
        Propsに渡すデータ名(components、pageのPropsに書かれているものと同名): state.state名.データ名,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Action>) => {
    return {
        Propsに渡すメソッド名(components、pageのPropsに書かれているものと同名): (引数: ﾃﾞｰﾀ型) => {
            dispatch(actionCreator.state名.メソッド名(*));
        },
        *→は{url}と記述したりurlと記述したり…クラスだと{}つかないことが多い
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(コンポーネント名);
```
(コンポーネント名)でエラーが出ている場合、./states/データ名直下のindex.tsの
Stateに書かれてるデータ型とReducerで返り値になっているデータ型が完全に一致していない可能性あり

### containersにリンクを張り替える
pages内ycomponents内のファイルをリンクしてしまっている場合、
Reduxが紐づいていないコンポーネントが呼び出されてしまう

そのため、リンクの張り替えをを行ってcontainers内の
コンポーネントを参照するようにする必要がある
**./App.tsx内か./pages/Home.tsxのimportを書き換える**