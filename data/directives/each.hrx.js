// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/each.hrx

export default [
  {
    name: 'sass/inline/input.sass',
    data: '@each $a in b, c\n  .#{$a}\n    d: $a\n',
  },
  {
    name: 'sass/inline/output.css',
    data: '.b {\n  d: b;\n}\n\n.c {\n  d: c;\n}\n',
  },
  {
    name: 'sass/multiline/after_each/input.sass',
    data: '@each\n  $a in b, c\n  .#{$a}\n    d: $a\n',
  },
  {
    name: 'sass/multiline/after_each/output.css',
    data: '.b {\n  d: b;\n}\n\n.c {\n  d: c;\n}\n',
  },
  {
    name: 'sass/multiline/after_variable/input.sass',
    data: '@each $a \n  in b, c\n  .#{$a}\n    d: $a\n',
  },
  {
    name: 'sass/multiline/after_variable/output.css',
    data: '.b {\n  d: b;\n}\n\n.c {\n  d: c;\n}\n',
  },
  {
    name: 'sass/multiline/after_in/input.sass',
    data: '@each $a in\n  b, c\n  .#{$a}\n    d: $a\n',
  },
  {
    name: 'sass/multiline/after_in/output.css',
    data: '.b {\n  d: b;\n}\n\n.c {\n  d: c;\n}\n',
  },
  {
    name: 'sass/multiline/in_expression/input.sass',
    data: '\n@each $a in b,\n c\n  .#{$a}\n    d: $a\n',
  },
  {
    name: 'sass/multiline/in_expression/output.css',
    data: 'c .b {\n  d: b;\n}\n',
  },
  {
    name: 'sass/multiline/in_wrapped_expression/input.sass',
    data: '@each $a in (b,\n c)\n  .#{$a}\n    d: $a\n',
  },
  {
    name: 'sass/multiline/in_wrapped_expression/output.css',
    data: '.b {\n  d: b;\n}\n\n.c {\n  d: c;\n}\n',
  },
  {
    name: 'sass/destructured/multiline/after_first/input.sass',
    data: '@each $a\n  , $b in (c: d)\n  .#{$a}\n    e: $b\n',
  },
  {
    name: 'sass/destructured/multiline/after_first/output.css',
    data: '.c {\n  e: d;\n}\n',
  },
  {
    name: 'sass/destructured/multiline/after_comma/input.sass',
    data: '@each $a,\n  $b in (c: d)\n  .#{$a}\n    e: $b\n',
  },
  {
    name: 'sass/destructured/multiline/after_comma/output.css',
    data: '.c {\n  e: d;\n}\n',
  },
  {
    name: 'sass/destructured/multiline/after_second/input.sass',
    data: '@each $a, $b\n  in (c: d)\n  .#{$a}\n    e: $b\n',
  },
  {
    name: 'sass/destructured/multiline/after_second/output.css',
    data: '.c {\n  e: d;\n}\n',
  },
  {
    name: 'sass/destructured/multiline/before_third/input.sass',
    data: '@each $a, $b\n  ,$c in (d: e)\n  .#{$a}\n    f: $b\n',
  },
  {
    name: 'sass/destructured/multiline/before_third/output.css',
    data: '.d {\n  f: e;\n}\n',
  },
]
