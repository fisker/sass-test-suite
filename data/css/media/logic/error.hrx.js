// https://github.com/sass/sass-spec/blob/HEAD/spec/css/media/logic/error.hrx

export default [
  {
    name: 'and_after/type_and_not/input.scss',
    data: '@media a and not (b) and (c) {x {y: z}}\n',
  },
  {
    name: 'and_after/type_and_not/error',
    data: 'Error: expected "{".\n  ,\n1 | @media a and not (b) and (c) {x {y: z}}\n  |                      ^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
  {
    name: 'and_after/or/input.scss',
    data: '@media (a) or (b) and (c) {x {y: z}}\n',
  },
  {
    name: 'and_after/or/error',
    data: 'Error: expected "{".\n  ,\n1 | @media (a) or (b) and (c) {x {y: z}}\n  |                   ^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
  {
    name: 'or_after/type/input.scss',
    data: '@media a or (b) {x {y: z}}\n',
  },
  {
    name: 'or_after/type/error',
    data: 'Error: expected "{".\n  ,\n1 | @media a or (b) {x {y: z}}\n  |             ^\n  \'\n  input.scss 1:13  root stylesheet\n',
  },
  {
    name: 'or_after/type_and_not/input.scss',
    data: '@media a and not (b) or (c) {x {y: z}}\n',
  },
  {
    name: 'or_after/type_and_not/error',
    data: 'Error: expected "{".\n  ,\n1 | @media a and not (b) or (c) {x {y: z}}\n  |                      ^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
  {
    name: 'or_after/and/input.scss',
    data: '@media (a) and (b) or (c) {x {y: z}}\n',
  },
  {
    name: 'or_after/and/error',
    data: 'Error: expected "{".\n  ,\n1 | @media (a) and (b) or (c) {x {y: z}}\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'or_after/type_then_and/input.scss',
    data: '@media a and (b) or (c) {x {y: z}}\n',
  },
  {
    name: 'or_after/type_then_and/error',
    data: 'Error: expected "{".\n  ,\n1 | @media a and (b) or (c) {x {y: z}}\n  |                  ^\n  \'\n  input.scss 1:18  root stylesheet\n',
  },
  {
    name: 'or_after/interpolation/input.scss',
    data: '@media #{"(a)"} or (b) {x {y: z}}\n',
  },
  {
    name: 'or_after/interpolation/error',
    data: 'Error: expected "{".\n  ,\n1 | @media #{"(a)"} or (b) {x {y: z}}\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'nothing_after/not/input.scss',
    data: '@media not {x {y: z}}\n',
  },
  {
    name: 'nothing_after/not/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media not {x {y: z}}\n  |            ^\n  '\n  input.scss 1:12  root stylesheet\n",
  },
  {
    name: 'nothing_after/and_not/input.scss',
    data: '@media a and not {x {y: z}}\n',
  },
  {
    name: 'nothing_after/and_not/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media a and not {x {y: z}}\n  |                  ^\n  '\n  input.scss 1:18  root stylesheet\n",
  },
  {
    name: 'nothing_after/and/after_type/input.scss',
    data: '@media a and {x {y: z}}\n',
  },
  {
    name: 'nothing_after/and/after_type/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media a and {x {y: z}}\n  |              ^\n  '\n  input.scss 1:14  root stylesheet\n",
  },
  {
    name: 'nothing_after/and/after_interpolation/input.scss',
    data: '@media #{a} and {x {y: z}}\n',
  },
  {
    name: 'nothing_after/and/after_interpolation/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media #{a} and {x {y: z}}\n  |                 ^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'nothing_after/and/after_paren/input.scss',
    data: '@media (a) and {x {y: z}}\n',
  },
  {
    name: 'nothing_after/and/after_paren/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media (a) and {x {y: z}}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'nothing_after/or/input.scss',
    data: '@media (a) or {x {y: z}}\n',
  },
  {
    name: 'nothing_after/or/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media (a) or {x {y: z}}\n  |               ^\n  '\n  input.scss 1:15  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/not/input.scss',
    data: '@media not(a) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/not/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media not(a) {x {y: z}}\n  |           ^\n  '\n  input.scss 1:11  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and_not/type/input.scss',
    data: '@media a and not(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and_not/type/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media a and not(b) {x {y: z}}\n  |                 ^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and_not/type_and_modifier/input.scss',
    data: '@media only a and not(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and_not/type_and_modifier/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media only a and not(b) {x {y: z}}\n  |                      ^\n  '\n  input.scss 1:22  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and/after_type/input.scss',
    data: '@media a and(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and/after_type/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media a and(b) {x {y: z}}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and/first/input.scss',
    data: '@media (a) and(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and/first/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media (a) and(b) {x {y: z}}\n  |               ^\n  '\n  input.scss 1:15  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and/later/input.scss',
    data: '@media (a) and (b) and(c) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and/later/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media (a) and (b) and(c) {x {y: z}}\n  |                       ^\n  '\n  input.scss 1:23  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/or/first/input.scss',
    data: '@media (a) or(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/or/first/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media (a) or(b) {x {y: z}}\n  |              ^\n  '\n  input.scss 1:14  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/or/later/input.scss',
    data: '@media (a) or (b) or(c) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/or/later/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media (a) or (b) or(c) {x {y: z}}\n  |                     ^\n  '\n  input.scss 1:21  root stylesheet\n",
  },
]
