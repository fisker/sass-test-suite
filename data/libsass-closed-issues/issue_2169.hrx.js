// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2169.hrx

export default [
  {
    name: 'input.scss',
    data: '@function test($a, $b) {\n  @return "#{$a}" + "#{$b}" + "" + "";\n}\n\nfoo {\n  content: test(\'bim\', \'baz\');\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  content: "bimbaz";\n}\n',
  },
]
