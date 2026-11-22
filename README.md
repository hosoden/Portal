# あそびのひろば

GitHub Pagesで公開する、子ども向けブラウザゲームのポータルサイトです。ビルドツールや外部画像を使わず、HTML・CSS・Vanilla JavaScriptで構成しています。

## ローカルで確認する

`index.html`をブラウザで開くと確認できます。GitHub Pagesへ公開するときも、リポジトリ名に依存しない相対パスを使用します。

## ゲームを追加する

1. `js/games.js`の`window.games`配列にゲーム情報を追加します。
2. `id`、`title`、`category`、`categoryLabel`、`ageLabel`、`ageMin`、`ageMax`、`icon`、`status`、`description`を設定します。公開するゲームには`url`も設定してください。
3. `howTo`（遊び方）、`skills`（遊んで育まれる力）、`parentTip`（保護者向けの案内）を追加します。これらの内容はカードの「遊び方・育つ力」からモーダルで読めます。
4. `status`は公開中なら`available`、準備中なら`coming-soon`にします。`category`は`creative`、`puzzle`、`coming-soon`のいずれかを指定します。
5. `icon`は`js/app.js`内の`icons`にあるSVGアイコンのキーを指定します。必要に応じてインラインSVGを追加してください。サムネイルの外部画像は不要です。

ゲームデータの例：

```js
{
  id: "new-game",
  title: "新しいゲーム",
  subtitle: "New Game",
  category: "puzzle",
  categoryLabel: "めいろ・パズル",
  ageLabel: "5〜8さい",
  ageMin: 5,
  ageMax: 8,
  icon: "maze",
  status: "available",
  url: "https://example.github.io/NewGame/",
  description: "ゲームの内容を紹介します。",
  howTo: ["遊び方を説明します。"],
  skills: ["遊びを通じて育まれる力を紹介します。"],
  parentTip: "保護者向けの案内を記載します。"
}
```

## 公開について

GitHubリポジトリの **Settings > Pages** を開き、Build and deploymentのSourceで **Deploy from a branch** を選択します。公開対象ブランチ（通常は`main`）とフォルダー（`/(root)`）を指定して **Save** してください。数分後に表示されるPagesのURLからアクセスできます。

このサイトでは、公開中のゲームへ移動するリンクを新しいタブで開きます。広告配信やアクセス解析を今後導入する場合は、Cookie等の利用や情報の取り扱いについてプライバシーポリシーを更新してください。
