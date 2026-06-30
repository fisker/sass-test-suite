// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/52_interchangeable_hyphens_underscores.hrx

export default [
  {
    name: 'input.scss',
    data: '$my-cool-var: "hello";\n@mixin my-cool-mixin($yada-yada) {\n  blah: blah;\n  hi: $yada_yada;\n}\n@function my-cool-function($cool_arg) {\n  @return $cool-arg;\n}\n\ndiv {\n  @include my_cool-mixin($yada_yada: "hi");\n  @include my_cool-mixin($my_cool-var);\n  foo: my-cool_function($cool-arg: "boop");\n  foo: my-cool_function($my-cool_var);\n  bar: $my_cool_var;\n}\n\n@each $my_cool_var in a, b, c {\n  div {\n    color: $my-cool-var;\n  }\n}\n\n@for $my_cool_var from 1 to 10 {\n  div {\n    color: $my-cool-var;\n  }\n}\n\n\n@function blah_blah() {\n  @return blah;\n}\n\ndiv {\n  foo: blah-blah();\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: blah;\n  hi: "hi";\n  blah: blah;\n  hi: "hello";\n  foo: "boop";\n  foo: "hello";\n  bar: "hello";\n}\n\ndiv {\n  color: a;\n}\n\ndiv {\n  color: b;\n}\n\ndiv {\n  color: c;\n}\n\ndiv {\n  color: 1;\n}\n\ndiv {\n  color: 2;\n}\n\ndiv {\n  color: 3;\n}\n\ndiv {\n  color: 4;\n}\n\ndiv {\n  color: 5;\n}\n\ndiv {\n  color: 6;\n}\n\ndiv {\n  color: 7;\n}\n\ndiv {\n  color: 8;\n}\n\ndiv {\n  color: 9;\n}\n\ndiv {\n  foo: blah;\n}\n',
  },
]
