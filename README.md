# nuxtPage

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate static project
$ npm run build
$ npm run serve
```

# ノンプログラマーのために
1. https://colab.research.google.com/ へアクセス
2. 以下をコピペして再生ボタンをクリック、しばらく待つ。

```
!pip install colabcode
from colabcode import ColabCode
ColabCode(port=10000)
```

3. https://3077ada86055.ngrok.io のようなリンクが表示されるため、開く。
4. 左上のハンバーガーバーをクリックして、 Terminal > New Terminal をクリック
5. 開いたところに、以下をコピペしてEnterボタン。いろいろ表示されるが心配ない。しばらく待つ。

```bash
git clone https://github.com/TEDxNagoyaU/website.git
```

6. なにも表示されなくなったら、以下をコピペしてEnter。***の部分は適当な名前を自分でつける。これからしようとしている変更に関連しているとよい。ただしこれは全世界で一意でなくてはならないため、「{自分の名前}{この作業が自分の何回目(n)}{変更の名前}」のようにするとその後困らなくてよい。

```bash
git checkout -b someChangeOf***
```

7. フォルダを開いて変更する。
8. 変更が終わったら、左側タブに青いマークがついているのでクリック。
9. メッセージに変更した内容を簡潔に書き、変更したファイル名の横にある+ボタンをクリック。複数のファイルを変更した場合、変更したファイルすべての+ボタンをクリックしないと反映されないから注意！また、意図していないファイルが変更されていた場合には、+ボタンは押さないこと。
10. すべての変更したファイルの+ボタンを押したら、チェックボタンがタブの上の方にある（カーソルを合わせると「commit」と表示される）をクリック
11. TERMINALで以下をコピペしてEnter。***の部分は6で自分がつけたのと同じものにする。

```bash
git push origin someChangeOf***
```

12. これで作業は終わり。colabのタブとエディターのタブを閉じていい。
13. techの強い人に「変更したから取り込んでほしい、ブランチ名はsomeChangeOf***だよ」と伝える。強い人が変更を反映してくれる。

## How to make .md files

### Talks

```markdown
---
name: speaker name
title: talk title
position: スピーカーの職業等
img: speaker image url (for example: /talks/2019/SasukeKimataSqr.png )
youtubeId: D-CYFJA-R8k (youtube url is https://youtube.com/watch?v=D-CYFJA-R8k)
detail: true (if true, detail button appear.)
leadSentence: 学生に新たな出会いと発見を届ける学生団体 アクトあいち。弱冠16歳にして、その代表を務めている。まだ見ぬ世界へ一歩踏み出そうとする1人の若者が、名古屋の地で、ある”思い”を語る。(リード文)
meta: [
  { hid: "description", name: "description", content: "header description is" }
]
---

# H1
if detail: true, this document will appear
```

### partners

```markdown
---
name: partner name
logo: partner image url (for example: /partners/2019/daido.png)
---
There are some text here.
```

### articles

```markdown
---
title : article title
date: 2020/07/09 <- date written
description : this text appears article card decription
tags: ["tag1", "tag2"]
thumbnail: "/article/past-talks/SasukeKimataSqr.png"
meta: [
  { hid: "description", name: "description", content: "header description is" }
]
---

# h1
hogehoge

## h2
fugafuga

```