// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/at-root/ampersand.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @at-root {\n    & {\n      color: blue;\n    }\n\n    &--modifier {\n      color: red;\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  color: blue;\n}\n\nfoo--modifier {\n  color: red;\n}\n',
  },
]
