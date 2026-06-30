// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_942.hrx

export default [
  {
    name: 'input.scss',
    data: '$v: ".foo \\\n.bar";\n\n#{$v} {\n\tcolor: #F00;\n}\n\ndiv {\n\tcontent: "foo\\\nbar";\n}',
  },
  {
    name: 'output.css',
    data: '.foo .bar {\n  color: #F00;\n}\n\ndiv {\n  content: "foobar";\n}\n',
  },
]
