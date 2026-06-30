// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/root/basic-alone.hrx

export default [
  {
    name: 'input.scss',
    data: '& {\n  foo {\n    bar: baz;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '& foo {\n  bar: baz;\n}\n',
  },
]
