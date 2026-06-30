// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/comment_after_if_directive.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @if true {a: b}\n  @else {x: y}\n  /* This is a comment */\n  c: d }\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: b;\n  /* This is a comment */\n  c: d;\n}\n',
  },
]
