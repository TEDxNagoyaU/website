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