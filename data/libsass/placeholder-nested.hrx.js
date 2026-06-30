// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/placeholder-nested.hrx

export default [
  {
    name: 'input.scss',
    data: '%x {\n  width: 100px;\n\n  %y {\n    height: 100px;\n  }\n}\n\n.foo {\n  @extend %x;\n\n  .bar { @extend %y }\n}\n',
  },
  {
    name: 'output.css',
    data: '.foo {\n  width: 100px;\n}\n.foo .bar {\n  height: 100px;\n}\n',
  },
]
