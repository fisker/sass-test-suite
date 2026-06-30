export default [
  {
    name: 'condition/input.scss',
    data: 'a {b: if(c)}\n',
  },
  {
    name: 'condition/error',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n1 | a {b: if(c)}\n  |       ^^^^^\n  '\n    input.scss 1:7  root stylesheet\n\nError: Missing argument $if-true.\n  ,--> input.scss\n1 | a {b: if(c)}\n  |       ^^^^^ invocation\n  '\n  ,\n1 | @function if($condition, $if-true, $if-false) {\n  |           =================================== declaration\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
