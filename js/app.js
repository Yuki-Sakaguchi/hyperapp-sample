// ステータス
const state = {
  count: 0
};

// アクション
const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 })
};

// ビュー
const view = (state, actions) => (
  hyperapp.h('main', {}, 
    hyperapp.h('h1', {}, state.count),
    hyperapp.h('button', { onclick: actions.down }, '-'),
    hyperapp.h('button', { onclick: actions.up }, '+')
  )
);

// マウント
const main = hyperapp.app(state, actions, view, document.body);