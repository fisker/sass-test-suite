// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/syntax/url.hrx

export default [
  {
    name: 'unquoted/input.scss',
    data: '@use foo;\n',
  },
  {
    name: 'unquoted/error',
    data: "Error: Expected string.\n  ,\n1 | @use foo;\n  |      ^\n  '\n  input.scss 1:6  root stylesheet\n",
  },
  {
    name: 'empty/input.scss',
    data: '@use "";\n',
  },
  {
    name: 'empty/error',
    data: 'Error: The default namespace "" is not a valid Sass identifier.\n\nRecommendation: add an "as" clause to define an explicit namespace.\n  ,\n1 | @use "";\n  | ^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'non_identifier/input.scss',
    data: '@use "123";\n',
  },
  {
    name: 'non_identifier/error',
    data: 'Error: The default namespace "123" is not a valid Sass identifier.\n\nRecommendation: add an "as" clause to define an explicit namespace.\n  ,\n1 | @use "123";\n  | ^^^^^^^^^^\n  \'\n  input.scss 1:1  root stylesheet\n',
  },
]
