// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/meta/inspect/error.hrx

export default [
  {
    name: 'too_few_args/input.scss',
    data: '@use "sass:meta";\na {a: meta.inspect()}\n',
  },
  {
    name: 'too_few_args/error',
    data: "Error: Missing argument $value.\n  ,--> input.scss\n2 | a {a: meta.inspect()}\n  |       ^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function inspect($value) {\n  |           =============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'too_many_args/input.scss',
    data: '@use "sass:meta";\na {a: meta.inspect(1, 2)}\n',
  },
  {
    name: 'too_many_args/error',
    data: "Error: Only 1 argument allowed, but 2 were passed.\n  ,--> input.scss\n2 | a {a: meta.inspect(1, 2)}\n  |       ^^^^^^^^^^^^^^^^^^ invocation\n  '\n  ,--> sass:meta\n1 | @function inspect($value) {\n  |           =============== declaration\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
