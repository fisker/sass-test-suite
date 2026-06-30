// https://github.com/sass/sass-spec/blob/HEAD/spec/operators/plus.hrx

export default [
  {
    name: 'syntax/whitespace/neither/input.scss',
    data: 'a {b: c+d}\n',
  },
  {
    name: 'syntax/whitespace/neither/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'syntax/whitespace/both/input.scss',
    data: 'a {b: c + d}\n',
  },
  {
    name: 'syntax/whitespace/both/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'syntax/whitespace/left/space/input.scss',
    data: 'a {b: c +d}\n',
  },
  {
    name: 'syntax/whitespace/left/space/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'syntax/whitespace/left/space/warning',
    data: "DEPRECATION WARNING [strict-unary]: This operation is parsed as:\n\n    c + d\n\nbut you may have intended it to mean:\n\n    c (+d)\n\nAdd a space after + to clarify that it's meant to be a binary operation, or wrap\nit in parentheses to make it a unary operation. This will be an error in future\nversions of Sass.\n\nMore info and automated migrator: https://sass-lang.com/d/strict-unary\n\n  ,\n1 | a {b: c +d}\n  |       ^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'syntax/whitespace/left/tab/input.scss',
    data: 'a {b: c\t+d}\n',
  },
  {
    name: 'syntax/whitespace/left/tab/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'syntax/whitespace/left/tab/warning',
    data: "DEPRECATION WARNING [strict-unary]: This operation is parsed as:\n\n    c + d\n\nbut you may have intended it to mean:\n\n    c (+d)\n\nAdd a space after + to clarify that it's meant to be a binary operation, or wrap\nit in parentheses to make it a unary operation. This will be an error in future\nversions of Sass.\n\nMore info and automated migrator: https://sass-lang.com/d/strict-unary\n\n  ,\n1 | a {b: c    +d}\n  |       ^^^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'syntax/whitespace/left/newline/input.scss',
    data: 'a {b: c\n+d}\n',
  },
  {
    name: 'syntax/whitespace/left/newline/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'syntax/whitespace/left/newline/warning',
    data: "DEPRECATION WARNING [strict-unary]: This operation is parsed as:\n\n    c + d\n\nbut you may have intended it to mean:\n\n    c (+d)\n\nAdd a space after + to clarify that it's meant to be a binary operation, or wrap\nit in parentheses to make it a unary operation. This will be an error in future\nversions of Sass.\n\nMore info and automated migrator: https://sass-lang.com/d/strict-unary\n\n  ,\n1 |   a {b: c\n  | ,-------^\n2 | | +d}\n  | '--^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'syntax/whitespace/right/input.scss',
    data: 'a {b: c+ d}\n',
  },
  {
    name: 'syntax/whitespace/right/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'syntax/comment/both/input.scss',
    data: 'a {b: c/**/+/**/d}\n',
  },
  {
    name: 'syntax/comment/both/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'syntax/comment/left/input.scss',
    data: 'a {b: c/**/+d}\n',
  },
  {
    name: 'syntax/comment/left/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
  {
    name: 'syntax/comment/right/input.scss',
    data: 'a {b: c+/**/d}\n',
  },
  {
    name: 'syntax/comment/right/output.css',
    data: 'a {\n  b: cd;\n}\n',
  },
]
