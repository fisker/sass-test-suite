export default [
  {
    name: 'value/declaration/input.scss',
    data: 'a {b: 1/2}\n',
  },
  {
    name: 'value/declaration/output.css',
    data: 'a {\n  b: 1/2;\n}\n',
  },
  {
    name: 'value/multiple/input.scss',
    data: 'a {b: 1/2/3/4/5}\n',
  },
  {
    name: 'value/multiple/output.css',
    data: 'a {\n  b: 1/2/3/4/5;\n}\n',
  },
  {
    name: 'value/interpolation/input.scss',
    data: 'a {b: #{1/2}}\n',
  },
  {
    name: 'value/interpolation/output.css',
    data: 'a {\n  b: 1/2;\n}\n',
  },
  {
    name: 'list/declaration/input.scss',
    data: 'a {b: 1 2/3 4}\n',
  },
  {
    name: 'list/declaration/output.css',
    data: 'a {\n  b: 1 2/3 4;\n}\n',
  },
  {
    name: 'list/parenthesized/input.scss',
    data: 'a {b: (1 2/3 4)}\n',
  },
  {
    name: 'list/parenthesized/output.css',
    data: 'a {\n  b: 1 2/3 4;\n}\n',
  },
  {
    name: 'list/bracketed/input.scss',
    data: 'a {b: [1 2/3 4]}\n',
  },
  {
    name: 'list/bracketed/output.css',
    data: 'a {\n  b: [1 2/3 4];\n}\n',
  },
  {
    name: 'list/comma/input.scss',
    data: 'a {b: 1, 2/3, 4}\n',
  },
  {
    name: 'list/comma/output.css',
    data: 'a {\n  b: 1, 2/3, 4;\n}\n',
  },
  {
    name: 'list/interpolation/input.scss',
    data: 'a {b: #{1 2/3 4}}\n',
  },
  {
    name: 'list/interpolation/output.css',
    data: 'a {\n  b: 1 2/3 4;\n}\n',
  },
  {
    name: 'list/argument/function/user_defined/input.scss',
    data: '@function a($b) {@return $b}\n\nc {d: a(1 2/3 4)}\n',
  },
  {
    name: 'list/argument/function/user_defined/output.css',
    data: 'c {\n  d: 1 2/3 4;\n}\n',
  },
  {
    name: 'list/argument/function/built_in/input.scss',
    data: '@use "sass:list";\nc {d: list.join(1 2/3 4, ())}\n',
  },
  {
    name: 'list/argument/function/built_in/output.css',
    data: 'c {\n  d: 1 2/3 4;\n}\n',
  },
  {
    name: 'list/argument/mixin/input.scss',
    data: '@mixin a($b) {c {d: $b}}\n\n@include a(1 2/3 4);\n',
  },
  {
    name: 'list/argument/mixin/output.css',
    data: 'c {\n  d: 1 2/3 4;\n}\n',
  },
  {
    name: 'list/return/input.scss',
    data: '@function a() {@return 1 2/3 4}\n\nb {c: a()}\n',
  },
  {
    name: 'list/return/output.css',
    data: 'b {\n  c: 1 2/3 4;\n}\n',
  },
]
