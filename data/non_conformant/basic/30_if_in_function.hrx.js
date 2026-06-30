// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/30_if_in_function.hrx

export default [
  {
    name: 'input.scss',
    data: '$x: true;\n\n@function foobar() {\n  @if $x {\n    $x: false !global;\n    @return foo;\n  }\n  @else {\n    $x: true !global;\n    @return bar;\n  }\n}\n\ndiv {\n  content: foobar();\n  content: foobar();\n  content: foobar();\n  content: foobar();\n  $x: false !global;\n  content: foobar();\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: foo;\n  content: bar;\n  content: foo;\n  content: bar;\n  content: bar;\n}\n',
  },
]
