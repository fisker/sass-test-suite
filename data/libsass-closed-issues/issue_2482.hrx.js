// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2482.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin mixin()\n{\n\t& .class\n\t{\n\t\tcolor: black;\n\t}\n}\n\n@include mixin();',
  },
  {
    name: 'output.css',
    data: '& .class {\n  color: black;\n}\n',
  },
]
