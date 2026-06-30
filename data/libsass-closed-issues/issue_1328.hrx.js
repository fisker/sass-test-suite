// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1328.hrx

export default [
  {
    name: 'input.scss',
    data: '#{bar},\n[foo="#{bar}"],\n[foo="#{bar}"] {\n    content: "foo";\n}\n',
  },
  {
    name: 'output.css',
    data: 'bar,\n[foo=bar],\n[foo=bar] {\n  content: "foo";\n}\n',
  },
]
