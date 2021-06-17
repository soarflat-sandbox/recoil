import { atom, selector } from 'recoil';

// Atom を定義する
// Atom は状態の一部を表現したもの。
// Atom はどのコンポーネントからでも読み書きできる。
// Atom の値を読み取るコンポーネントは、その Atom を暗黙で購読している。
// そのため、Atom が更新されると、その Atom を購読しているすべてのコンポーネントが再レンダリングされる。
export const textState = atom({
  // 状態の一意な ID
  key: 'textState',
  // 状態の初期値
  default: '',
});

// Selector を定義する
// Selector は派生状態（ある状態を変換した状態）を表現したもの。
export const charCountState = selector({
  // 状態の一意な ID
  key: 'charCountState',
  // ある状態を受けとり、それを更新する純粋関数を定義
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export const todoListState = atom({
  key: 'todoListState',
  default: [],
});
