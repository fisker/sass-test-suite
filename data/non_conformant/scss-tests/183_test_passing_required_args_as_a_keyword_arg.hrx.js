export default [
  {
    name: 'input.scss',
    data: '@mixin a-mixin($required, $arg1: default-val1, $arg2: default-val2) {\n  required: $required;\n  arg1: $arg1;\n  arg2: $arg2; }\n.mixed { @include a-mixin($required: foo); }\n',
  },
  {
    name: 'output.css',
    data: '.mixed {\n  required: foo;\n  arg1: default-val1;\n  arg2: default-val2;\n}\n',
  },
]
