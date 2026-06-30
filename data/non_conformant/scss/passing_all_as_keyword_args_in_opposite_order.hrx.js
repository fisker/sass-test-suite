// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/passing_all_as_keyword_args_in_opposite_order.hrx

export default [
  {
    name: 'input.scss',
    data: '@mixin a-mixin($required, $arg1: default-val1, $arg2: default-val2) {\n  required: $required;\n  arg1: $arg1;\n  arg2: $arg2; }\n.mixed { @include a-mixin($arg2: non-default-val2, $arg1: non-default-val1, $required: foo); }\n',
  },
  {
    name: 'output.css',
    data: '.mixed {\n  required: foo;\n  arg1: non-default-val1;\n  arg2: non-default-val2;\n}\n',
  },
]
