// https://github.com/sass/sass-spec/blob/HEAD/spec/css/supports/error.hrx

export default [
  {
    name: 'syntax/none/input.scss',
    data: '@supports {@a}\n',
  },
  {
    name: 'syntax/none/error',
    data: 'Error: expected "(".\n  ,\n1 | @supports {@a}\n  |           ^\n  \'\n  input.scss 1:11  root stylesheet\n',
  },
  {
    name: 'syntax/ident/plain/input.scss',
    data: '@supports a {@b}\n',
  },
  {
    name: 'syntax/ident/plain/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports a {@b}\n  |           ^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'syntax/ident/interpolated_after/input.scss',
    data: '@supports a#{b} {@c}\n',
  },
  {
    name: 'syntax/ident/interpolated_after/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports a#{b} {@c}\n  |           ^^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'syntax/ident/interpolated_before/input.scss',
    data: '@supports #{a}b {@c}\n',
  },
  {
    name: 'syntax/ident/interpolated_before/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports #{a}b {@c}\n  |           ^^^^^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'syntax/raw_declaration/input.scss',
    data: '@supports a: b {@c}\n',
  },
  {
    name: 'syntax/raw_declaration/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports a: b {@c}\n  |           ^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'syntax/ident_after_not/input.scss',
    data: '@supports not a {@b}\n',
  },
  {
    name: 'syntax/ident_after_not/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports not a {@b}\n  |               ^\n  '\n  input.scss 1:15  root stylesheet\n",
  },
  {
    name: 'syntax/declaration/multiple/input.scss',
    data: '@supports (a: b) (c: d) {@e}\n',
  },
  {
    name: 'syntax/declaration/multiple/error',
    data: 'Error: expected "{".\n  ,\n1 | @supports (a: b) (c: d) {@e}\n  |                  ^\n  \'\n  input.scss 1:18  root stylesheet\n',
  },
  {
    name: 'syntax/declaration/not/input.scss',
    data: '@supports (not a: b) {@c}\n',
  },
  {
    name: 'syntax/declaration/not/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports (not a: b) {@c}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'syntax/declaration/parens/input.scss',
    data: '@supports ((a): b) {c}\n',
  },
  {
    name: 'syntax/declaration/parens/error',
    data: 'Error: expected ")".\n  ,\n1 | @supports ((a): b) {c}\n  |               ^\n  \'\n  input.scss 1:15  root stylesheet\n',
  },
  {
    name: 'syntax/declaration/custom_prop/empty/input.scss',
    data: '@supports (--a:) {@c}\n',
  },
  {
    name: 'syntax/declaration/custom_prop/empty/error',
    data: "Error: Expected token.\n  ,\n1 | @supports (--a:) {@c}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'syntax/operator/and_after_not/input.scss',
    data: '@supports not (a: b) and (c: d) {@e}\n',
  },
  {
    name: 'syntax/operator/and_after_not/error',
    data: 'Error: expected "{".\n  ,\n1 | @supports not (a: b) and (c: d) {@e}\n  |                      ^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
  {
    name: 'syntax/operator/or_after_and/input.scss',
    data: '@supports (a: b) and (c: d) or (e: f) {@g}\n',
  },
  {
    name: 'syntax/operator/or_after_and/error',
    data: 'Error: Expected "and".\n  ,\n1 | @supports (a: b) and (c: d) or (e: f) {@g}\n  |                             ^\n  \'\n  input.scss 1:29  root stylesheet\n',
  },
  {
    name: 'syntax/operator/not_after_and/input.scss',
    data: '@supports (a: b) and (not c: d) {@e}\n',
  },
  {
    name: 'syntax/operator/not_after_and/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports (a: b) and (not c: d) {@e}\n  |                           ^\n  '\n  input.scss 1:27  root stylesheet\n",
  },
  {
    name: 'syntax/operator/not_function_after_and/input.scss',
    data: '@supports (a: b) and not() {@c}\n',
  },
  {
    name: 'syntax/operator/not_function_after_and/error',
    data: 'Error: "not" is not a valid identifier here.\n  ,\n1 | @supports (a: b) and not() {@c}\n  |                      ^^^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
  {
    name: 'syntax/operator/lonely_not/input.scss',
    data: '@supports not {@c}\n',
  },
  {
    name: 'syntax/operator/lonely_not/error',
    data: 'Error: expected "(".\n  ,\n1 | @supports not {@c}\n  |               ^\n  \'\n  input.scss 1:15  root stylesheet\n',
  },
  {
    name: 'syntax/operator/trailing_and/input.scss',
    data: '@supports (a: b) and {@c}\n',
  },
  {
    name: 'syntax/operator/trailing_and/error',
    data: 'Error: expected "(".\n  ,\n1 | @supports (a: b) and {@c}\n  |                      ^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
  {
    name: 'syntax/operator/trailing_or/input.scss',
    data: '@supports (a: b) or {@c}\n',
  },
  {
    name: 'syntax/operator/trailing_or/error',
    data: 'Error: expected "(".\n  ,\n1 | @supports (a: b) or {@c}\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'syntax/anything/non_identifier_start/input.scss',
    data: '@supports (1 a) {@b}\n',
  },
  {
    name: 'syntax/anything/non_identifier_start/error',
    data: "Error: Expected identifier.\n  ,\n1 | @supports (1 a) {@b}\n  |            ^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'syntax/anything/not/input.scss',
    data: '@supports (not a) {@b}\n',
  },
  {
    name: 'syntax/anything/not/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports (not a) {@b}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'syntax/anything/colon/input.scss',
    data: '@supports (a !:$) {@b}\n',
  },
  {
    name: 'syntax/anything/colon/error',
    data: 'Error: expected ":".\n  ,\n1 | @supports (a !:$) {@b}\n  |              ^\n  \'\n  input.scss 1:14  root stylesheet\n',
  },
  {
    name: 'syntax/function/space_before_arg/input.scss',
    data: '@supports a (b) {@b}\n',
  },
  {
    name: 'syntax/function/space_before_arg/error',
    data: "Error: Expected @supports condition.\n  ,\n1 | @supports a (b) {@b}\n  |           ^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'syntax/function/not/input.scss',
    data: '@supports not(:) {@b}\n',
  },
  {
    name: 'syntax/function/not/error',
    data: "Error: Expected identifier.\n  ,\n1 | @supports not(:) {@b}\n  |               ^\n  '\n  input.scss 1:15  root stylesheet\n",
  },
]
