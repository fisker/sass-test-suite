// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_864.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:color";\ndiv { color: color.adjust(#999, $saturation: -50%); }',
  },
  {
    name: 'output.css',
    data: 'div {\n  color: #999999;\n}\n',
  },
]
