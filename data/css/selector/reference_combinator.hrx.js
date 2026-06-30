// https://github.com/sass/sass-spec/blob/HEAD/spec/css/selector/reference_combinator.hrx

export default [
  {
    name: 'input.scss',
    data: "// Reference combinators used to be supported by Sass when they were part of the\n// CSS spec, but they're no longer supported and should now produce errors.\n.foo /bar/ .baz {\n  a: b;\n}\n",
  },
  {
    name: 'error',
    data: "Error: expected selector.\n  ,\n3 | .foo /bar/ .baz {\n  |      ^\n  '\n  input.scss 3:6  root stylesheet\n",
  },
]
