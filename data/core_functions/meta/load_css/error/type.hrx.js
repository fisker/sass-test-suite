export default [
  {
    name: 'url/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css(1);\n',
  },
  {
    name: 'url/error',
    data: "Error: $url: 1 is not a string.\n  ,\n2 | @include meta.load-css(1);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:1  root stylesheet\n",
  },
  {
    name: 'with/map/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: 1);\n',
  },
  {
    name: 'with/map/error',
    data: 'Error: $with: 1 is not a map.\n  ,\n2 | @include meta.load-css("other", $with: 1);\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'with/key/input.scss',
    data: '@use "sass:meta";\n@include meta.load-css("other", $with: (1: null));\n',
  },
  {
    name: 'with/key/error',
    data: 'Error: $with key: 1 is not a string.\n  ,\n2 | @include meta.load-css("other", $with: (1: null));\n  | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
]
