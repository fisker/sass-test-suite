// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_613.hrx

export default [
  {
    name: 'input.scss',
    data: '$var: 1;\n\n@mixin test {\n  $var: 2;\n}\n\n@function test() {\n  $var: 3;\n  @return "dummy";\n}\n\n.selector {\n  $var: 4;\n  @include test;\n  $dummy: test();\n  content: $var;\n}\n\n.other-selector {\n    content: $var;\n}\n',
  },
  {
    name: 'output.css',
    data: '.selector {\n  content: 4;\n}\n\n.other-selector {\n  content: 1;\n}\n',
  },
]
