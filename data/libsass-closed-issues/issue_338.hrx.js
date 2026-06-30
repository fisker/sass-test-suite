// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_338.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:list";\n$list: ("a", "b");\n\ntest {\n    content: if( list.length($list) > 2, list.nth($list, 3), list.nth($list, 1) );\n}\n',
  },
  {
    name: 'output.css',
    data: 'test {\n  content: "a";\n}\n',
  },
  {
    name: 'warning',
    data: "DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass(list.length($list) > 2): list.nth($list, 3); else: list.nth($list, 1))\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n5 |     content: if( list.length($list) > 2, list.nth($list, 3), list.nth($list, 1) );\n  |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n    input.scss 5:14  root stylesheet\n",
  },
]
