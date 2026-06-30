// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1432/simple-selectors.hrx

export default [
  {
    name: 'input.scss',
    data: '@use "sass:selector";\n@debug(selector.simple-selectors(null));\n',
  },
  {
    name: 'error',
    data: "Error: $selector: null is not a valid selector: it must be a string,\na list of strings, or a list of lists of strings.\n  ,\n2 | @debug(selector.simple-selectors(null));\n  |        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:8  root stylesheet\n",
  },
]
