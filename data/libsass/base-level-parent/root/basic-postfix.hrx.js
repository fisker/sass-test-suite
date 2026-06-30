// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass/base-level-parent/root/basic-postfix.hrx

export default [
  {
    name: 'input.scss',
    data: '&post {\n  foo {\n    bar: baz;\n  }\n}',
  },
  {
    name: 'error',
    data: "Error: A top-level selector may not contain a parent selector with a suffix.\n  ,\n1 | &post {\n  | ^^^^^\n  '\n  input.scss 1:1  root stylesheet\n",
  },
]
