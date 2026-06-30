// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/59_if_expression.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\n$x: 0;\n$if-false: whatever;\n\ndiv {\n  foo: if($if-true: hey, $if-false: ho, $condition: true);\n  foo: if($if-true: hey, $if-false: ho, $condition: false);\n  foo: if($x != 0, if($x, true, false), string.unquote("x is zero"));\n  foo: if(false, 1/0, $if-false: $if-false);\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  foo: hey;\n  foo: ho;\n  foo: x is zero;\n  foo: whatever;\n}\n',
  },
  {
    name: 'warning',
    data: 'DEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n6 |   foo: if($if-true: hey, $if-false: ho, $condition: true);\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 6:8  root stylesheet\n\nDEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n7 |   foo: if($if-true: hey, $if-false: ho, $condition: false);\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 7:8  root stylesheet\n\nDEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass($x): true; else: false)\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n8 |   foo: if($x != 0, if($x, true, false), string.unquote("x is zero"));\n  |                    ^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 8:20  root stylesheet\n\nDEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nSuggestion: if(sass($x != 0): if($x, true, false); else: string.unquote("x is zero"))\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n8 |   foo: if($x != 0, if($x, true, false), string.unquote("x is zero"));\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 8:8  root stylesheet\n\nDEPRECATION WARNING [if-function]: The Sass if() syntax is deprecated in favor of the modern CSS syntax.\n\nMore info: https://sass-lang.com/d/if-function\n\n  ,\n9 |   foo: if(false, 1/0, $if-false: $if-false);\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n    input.scss 9:8  root stylesheet\n',
  },
]
