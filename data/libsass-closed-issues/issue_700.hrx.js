// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_700.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\n.selector {\n  color: color.invert(transparent);\n}',
  },
  {
    name: 'output.css',
    data: '.selector {\n  color: rgba(255, 255, 255, 0);\n}\n',
  },
]
