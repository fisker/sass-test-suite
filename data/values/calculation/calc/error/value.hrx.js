export default [
  {
    name: 'variable/null/input.scss',
    data: '$a: null;\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/null/error',
    data: "Error: Value null can't be used in a calculation.\n  ,\n2 | b {c: calc($a)}\n  |            ^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'variable/boolean/input.scss',
    data: '$a: true;\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/boolean/error',
    data: "Error: Value true can't be used in a calculation.\n  ,\n2 | b {c: calc($a)}\n  |            ^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'variable/color/input.scss',
    data: '$a: blue;\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/color/error',
    data: "Error: Value blue can't be used in a calculation.\n  ,\n2 | b {c: calc($a)}\n  |            ^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'variable/function/input.scss',
    data: '@use \'sass:meta\';\n$a: meta.get-function("get-function", $module: "meta");\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/function/error',
    data: 'Error: Value get-function("get-function") can\'t be used in a calculation.\n  ,\n3 | b {c: calc($a)}\n  |            ^^\n  \'\n  input.scss 3:12  root stylesheet\n',
  },
  {
    name: 'variable/list/input.scss',
    data: '$a: 1 2 3;\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/list/error',
    data: "Error: Value (1 2 3) can't be used in a calculation.\n  ,\n2 | b {c: calc($a)}\n  |            ^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'variable/map/input.scss',
    data: '$a: (b: c);\nd {e: calc($a)}\n',
  },
  {
    name: 'variable/map/error',
    data: "Error: Value (b: c) can't be used in a calculation.\n  ,\n2 | d {e: calc($a)}\n  |            ^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'variable/quoted_string/input.scss',
    data: '$a: "foo";\nb {c: calc($a)}\n',
  },
  {
    name: 'variable/quoted_string/error',
    data: 'Error: Value "foo" can\'t be used in a calculation.\n  ,\n2 | b {c: calc($a)}\n  |            ^^\n  \'\n  input.scss 2:12  root stylesheet\n',
  },
  {
    name: 'function/null/input.scss',
    data: '@function a() {@return null}\nb {c: calc(a())}\n',
  },
  {
    name: 'function/null/error',
    data: "Error: Value null can't be used in a calculation.\n  ,\n2 | b {c: calc(a())}\n  |            ^^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'function/boolean/input.scss',
    data: '@function a() {@return true}\nb {c: calc(a())}\n',
  },
  {
    name: 'function/boolean/error',
    data: "Error: Value true can't be used in a calculation.\n  ,\n2 | b {c: calc(a())}\n  |            ^^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'function/color/input.scss',
    data: '@function a() {@return blue}\nb {c: calc(a())}\n',
  },
  {
    name: 'function/color/error',
    data: "Error: Value blue can't be used in a calculation.\n  ,\n2 | b {c: calc(a())}\n  |            ^^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'function/function/input.scss',
    data: '@use \'sass:meta\';\n@function a() {@return meta.get-function("get-function", $module: "meta")}\nb {c: calc(a())}\n',
  },
  {
    name: 'function/function/error',
    data: 'Error: Value get-function("get-function") can\'t be used in a calculation.\n  ,\n3 | b {c: calc(a())}\n  |            ^^^\n  \'\n  input.scss 3:12  root stylesheet\n',
  },
  {
    name: 'function/list/input.scss',
    data: '@function a() {@return 1 2 3}\nb {c: calc(a())}\n',
  },
  {
    name: 'function/list/error',
    data: "Error: Value (1 2 3) can't be used in a calculation.\n  ,\n2 | b {c: calc(a())}\n  |            ^^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'function/map/input.scss',
    data: '@function a() {@return (b: c)}\nd {e: calc(a())}\n',
  },
  {
    name: 'function/map/error',
    data: "Error: Value (b: c) can't be used in a calculation.\n  ,\n2 | d {e: calc(a())}\n  |            ^^^\n  '\n  input.scss 2:12  root stylesheet\n",
  },
  {
    name: 'function/quoted_string/input.scss',
    data: '@function a() {@return "foo"}\nb {c: calc(a())}\n',
  },
  {
    name: 'function/quoted_string/error',
    data: 'Error: Value "foo" can\'t be used in a calculation.\n  ,\n2 | b {c: calc(a())}\n  |            ^^^\n  \'\n  input.scss 2:12  root stylesheet\n',
  },
]
