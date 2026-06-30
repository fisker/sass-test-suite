export default [
  {
    name: 'syntax/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n',
  },
  {
    name: 'syntax/_other.scss',
    data: 'a {b: }\n',
  },
  {
    name: 'syntax/error',
    data: "Error: Expected expression.\n  ,\n1 | a {b: }\n  |       ^\n  '\n  _other.scss 1:7  load-css()\n  input.scss 2:1   root stylesheet\n",
  },
  {
    name: 'runtime/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n',
  },
  {
    name: 'runtime/_other.scss',
    data: 'a {b: 1px + 1em}\n',
  },
  {
    name: 'runtime/error',
    data: "Error: 1px and 1em have incompatible units.\n  ,\n1 | a {b: 1px + 1em}\n  |       ^^^^^^^^^\n  '\n  _other.scss 1:7  load-css()\n  input.scss 2:1   root stylesheet\n",
  },
  {
    name: 'extend/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other");\n',
  },
  {
    name: 'extend/_other.scss',
    data: 'a {@extend missing}\n',
  },
  {
    name: 'extend/error',
    data: 'Error: The target selector was not found.\nUse "@extend missing !optional" to avoid this error.\n  ,\n1 | a {@extend missing}\n  |    ^^^^^^^^^^^^^^^\n  \'\n  _other.scss 1:4  load-css()\n  input.scss 2:1   root stylesheet\n',
  },
]
