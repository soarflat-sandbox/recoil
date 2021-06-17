# Recoil

[Recoil](https://recoiljs.org/)の学習用リポジトリ

## Recoil の概念

- Atoms
- Selectors

### Atoms

状態の一部を表現したもの。

以下は Atoms の例。

```js
import { atom } from 'recoil';

const textState = atom({
  // 状態の一意な ID
  key: 'textState',
  // 状態の初期値
  default: '',
});
```

Atoms はどのコンポーネントからでも読み書きできる。

また、Atoms の値を読み取るコンポーネントは、その Atoms を暗黙で購読している。

そのため、Atoms が更新されると、その Atoms を購読しているすべてのコンポーネントが再レンダリングされる。

### Selectors

派生状態（ある状態を変換した状態）を表現したもの。

以下は Selectors の例。

```js
import { atom } from 'recoil';

const textState = atom({
  // 状態の一意な ID
  key: 'textState',
  // 状態の初期値
  default: '',
});

export const charCountState = selector({
  // 状態の一意な ID
  key: 'charCountState',
  // ある状態を受けとり、それを更新する純粋関数を定義
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});
```

`charCountState`が Selector。

Atom である`textState`が変換された状態が定義されている。
