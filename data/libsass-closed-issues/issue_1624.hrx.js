// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1624.hrx

export default [
  {
    name: 'input.scss',
    data: "@function foo($foo) {\n  @return $foo;\n}\n\n@function data($foo) {\n  @return '[data-' + $foo + ']';\n}\n\n#{foo(foo)} {\n  #{data('bar')} {\n    baz: bam;\n  }\n}\n",
  },
  {
    name: 'output.css',
    data: 'foo [data-bar] {\n  baz: bam;\n}\n',
  },
]
