export default [
  {
    name: 'binary/after/input.sass',
    data: '$a: b +\nc\nd\n  e: $a\n',
  },
  {
    name: 'binary/after/output.css',
    data: 'd {\n  e: bc;\n}\n',
  },
  {
    name: 'binary/before/input.sass',
    data: '$a: b\n+ c\nd\n  e: $a\n',
  },
  {
    name: 'binary/before/output.css',
    data: 'd {\n  e: b;\n}\n',
  },
  {
    name: 'binary/before/warning',
    data: "WARNING: This selector doesn't have any properties and won't be rendered.\n\n  ,\n2 | + c\n  | ^^^\n  '\n    input.sass 2:1  root stylesheet\n",
  },
  {
    name: 'unary/after/input.sass',
    data: '$a: not\nb\nc\n  d: $a\n',
  },
  {
    name: 'unary/after/output.css',
    data: 'c {\n  d: false;\n}\n',
  },
  {
    name: 'error/binary/before_indent/input.sass',
    data: '$a: b \n  + c\n',
  },
  {
    name: 'error/binary/before_indent/error',
    data: "Error: Nothing may be indented beneath a variable declaration.\n  ,\n2 |   + c\n  |   ^\n  '\n  input.sass 2:3  root stylesheet\n",
  },
  {
    name: 'error/unary/before/input.sass',
    data: '$a:\nnot c\n',
  },
  {
    name: 'error/unary/before/output.css',
    data: '',
  },
  {
    name: 'error/unary/before_indent/input.sass',
    data: '$a:\n  not c\n',
  },
  {
    name: 'error/unary/before_indent/output.css',
    data: '',
  },
]
