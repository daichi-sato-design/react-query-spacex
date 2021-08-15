# react-query-spacex

このアプリケーションは、<a href="https://www.udemy.com/course/hasura-nextjs-firebase-hasuragraphql-web/">こちらの教材</a>を参考にしました。Next.js(TypeScript) で SpaceX 社の API を GraphQL/react-query を使用し取得したデータをコンポーネントへ出力を学ぶことが目的のサイトです。

## 🌟 Project setup 🚀

## 1. create next app

### 1-1. yarn install \*インストールしていない場合

    npm install --global yarn
    yarn --version

### 1-2. create-next-app

    npx create-next-app .

#### Node.js version 10.13 以降が必要です。 -> ターミナル `node -v`で ver 確認出来ます。

### 1-3. react-query のインストール

    yarn add @heroicons/react
    yarn add react-query react-query-devtools graphql graphql-request

### 1-4. prettier の設定 : settings で Require Config + Format On Save にチェック

    touch .prettierrc

```
{
    "singleQuote": true,
    "semi": false
}
```

## 2. TypeScript の導入

https://nextjs.org/learn/excel/typescript/create-tsconfig

### 2-1. 空の tsconfig.json 作成

    touch tsconfig.json

### 2-2. 必要 module のインストール

    yarn add -D typescript @types/react @types/node

### 2-3. 開発 server 起動

    yarn dev

### 2-4. \_app.js, index.js -> tsx へ拡張子変更

### 2-5. AppProps 型追記

```
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default MyApp
```

## 3. Tailwind CSS の導入

https://tailwindcss.com/docs/guides/nextjs

### 3-1. 必要 module のインストール

    yarn add -D tailwindcss@latest postcss@latest autoprefixer@latest

### 3-2. tailwind.config.js, postcss.config.js の生成

    npx tailwindcss init -p

### 3-3. tailwind.config.js の purge 設定追加

```
module.exports = {
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: false,
    theme: {
        extend: {},
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
```

### 3-4. globals.css の編集

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
