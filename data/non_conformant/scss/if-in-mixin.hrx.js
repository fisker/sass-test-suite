// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/if-in-mixin.hrx

export default [
  {
    name: 'input.scss',
    data: '$x: true;\n\n@mixin foobar() {\n  @if $x {\n    $x: false !global;\n    content: foo;\n  }\n  @else {\n    $x: true !global;\n    content: bar;\n  }\n}\n\ndiv {\n  @include foobar();\n  @include foobar();\n  @include foobar();\n  $x: true !global;\n  @include foobar();\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  content: foo;\n  content: bar;\n  content: foo;\n  content: foo;\n}\n',
  },
]
