export default [
  {
    name: 'input.scss',
    data: 'a {b: if()}\n',
  },
  {
    name: 'error',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n1 | a {b: if()}\n  |       ^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: Missing argument $condition.\n  ,--> input.scss\n1 | a {b: if()}\n  |       ^^^^ invocation\n  '\n  ,\n1 | @function if($condition, $if-true, $if-false) {\n  |           =================================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
