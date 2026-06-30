export default [
  {
    name: 'README.md',
    data: 'When two modules that contain conflicting members are `@forward`ed, that\nproduces an error immediately even if the member is never used. This is unlike\n`@use`, which only produces an error on use.\n',
  },
  {
    name: 'variable/input.scss',
    data: '@forward "other1";\n@forward "other2";\n',
  },
  {
    name: 'variable/_other1.scss',
    data: '$a: from other1;\n',
  },
  {
    name: 'variable/_other2.scss',
    data: '$a: from other2;\n',
  },
  {
    name: 'variable/error',
    data: 'Error: Two forwarded modules both define a variable named $a.\n  ,\n1 | @forward "other1";\n  | ================= original @forward\n2 | @forward "other2";\n  | ^^^^^^^^^^^^^^^^^ new @forward\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'function/input.scss',
    data: '@forward "other1";\n@forward "other2";\n',
  },
  {
    name: 'function/_other1.scss',
    data: '@function a() {@return from other1}\n',
  },
  {
    name: 'function/_other2.scss',
    data: '@function a() {@return from other2}\n',
  },
  {
    name: 'function/error',
    data: 'Error: Two forwarded modules both define a function named a.\n  ,\n1 | @forward "other1";\n  | ================= original @forward\n2 | @forward "other2";\n  | ^^^^^^^^^^^^^^^^^ new @forward\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'mixin/input.scss',
    data: '@forward "other1";\n@forward "other2";\n',
  },
  {
    name: 'mixin/_other1.scss',
    data: '@mixin a {b: from other1}\n',
  },
  {
    name: 'mixin/_other2.scss',
    data: '@mixin a {b: from other2}\n',
  },
  {
    name: 'mixin/error',
    data: 'Error: Two forwarded modules both define a mixin named a.\n  ,\n1 | @forward "other1";\n  | ================= original @forward\n2 | @forward "other2";\n  | ^^^^^^^^^^^^^^^^^ new @forward\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'same_value/variable/input.scss',
    data: '@forward "other1";\n@forward "other2";\n',
  },
  {
    name: 'same_value/variable/_other1.scss',
    data: '$a: b;\n',
  },
  {
    name: 'same_value/variable/_other2.scss',
    data: '$a: b;\n',
  },
  {
    name: 'same_value/variable/error',
    data: 'Error: Two forwarded modules both define a variable named $a.\n  ,\n1 | @forward "other1";\n  | ================= original @forward\n2 | @forward "other2";\n  | ^^^^^^^^^^^^^^^^^ new @forward\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'same_value/function/input.scss',
    data: '@forward "other1";\n@forward "other2";\n',
  },
  {
    name: 'same_value/function/_other1.scss',
    data: '@function a() {@return b}\n',
  },
  {
    name: 'same_value/function/_other2.scss',
    data: '@function a() {@return b}\n',
  },
  {
    name: 'same_value/function/error',
    data: 'Error: Two forwarded modules both define a function named a.\n  ,\n1 | @forward "other1";\n  | ================= original @forward\n2 | @forward "other2";\n  | ^^^^^^^^^^^^^^^^^ new @forward\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'same_value/mixin/input.scss',
    data: '@forward "other1";\n@forward "other2";\n',
  },
  {
    name: 'same_value/mixin/_other1.scss',
    data: '@mixin a {b: c}\n',
  },
  {
    name: 'same_value/mixin/_other2.scss',
    data: '@mixin a {b: c}\n',
  },
  {
    name: 'same_value/mixin/error',
    data: 'Error: Two forwarded modules both define a mixin named a.\n  ,\n1 | @forward "other1";\n  | ================= original @forward\n2 | @forward "other2";\n  | ^^^^^^^^^^^^^^^^^ new @forward\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'because_of_as/first/input.scss',
    data: '@forward "other1" as a-*;\n@forward "other2";\n',
  },
  {
    name: 'because_of_as/first/_other1.scss',
    data: '$b: from other1;\n',
  },
  {
    name: 'because_of_as/first/_other2.scss',
    data: '$a-b: from other2;\n',
  },
  {
    name: 'because_of_as/first/error',
    data: 'Error: Two forwarded modules both define a variable named $a-b.\n  ,\n1 | @forward "other1" as a-*;\n  | ======================== original @forward\n2 | @forward "other2";\n  | ^^^^^^^^^^^^^^^^^ new @forward\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'because_of_as/last/input.scss',
    data: '@forward "other1";\n@forward "other2" as a-*;\n',
  },
  {
    name: 'because_of_as/last/_other1.scss',
    data: '$a-b: from other1;\n',
  },
  {
    name: 'because_of_as/last/_other2.scss',
    data: '$b: from other2;\n',
  },
  {
    name: 'because_of_as/last/error',
    data: 'Error: Two forwarded modules both define a variable named $a-b.\n  ,\n1 | @forward "other1";\n  | ================= original @forward\n2 | @forward "other2" as a-*;\n  | ^^^^^^^^^^^^^^^^^^^^^^^^ new @forward\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
]
