export default [
  {
    name: 'input.scss',
    data: '%x {\n  color: red;\n}\n\nfoo {\n  width: 10px;\n  @extend %x;\n}\n\nhux {\n  height: 12px;\n  @extend %x;\n}',
  },
  {
    name: 'output.css',
    data: 'hux, foo {\n  color: red;\n}\n\nfoo {\n  width: 10px;\n}\n\nhux {\n  height: 12px;\n}\n',
  },
]
