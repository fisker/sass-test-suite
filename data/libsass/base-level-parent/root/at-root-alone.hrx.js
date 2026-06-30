// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/root/at-root-alone.hrx

export default [
  {
    name: 'input.scss',
    data: '@at-root {\n  & {\n    foo {\n      bar: baz;\n    }\n  }\n}',
  },
  {
    name: 'output.css',
    data: '& foo {\n  bar: baz;\n}\n',
  },
]
