// https://github.com/sass/sass-spec/blob/HEAD/spec/css/media/range/error.hrx

export default [
  {
    name: 'invalid_binary_operator/README.md',
    data: "The SassScript binary operators `=`, `>`, `>=`, `<`, and `<=` aren't allowed in\nmedia query expressions, since they can create syntactic ambiguities.\n",
  },
  {
    name: 'invalid_binary_operator/before_colon/input.scss',
    data: "// Even though this isn't *technically* ambiguous, disallowing it makes parsing\n// much easier because you don't have to disambiguate what the first `<` (or\n// other comparison operator) is.\n@media (1 < 2: 10px) {a {b: c}}\n",
  },
  {
    name: 'invalid_binary_operator/before_colon/error',
    data: 'Error: expected ")".\n  ,\n4 | @media (1 < 2: 10px) {a {b: c}}\n  |              ^\n  \'\n  input.scss 4:14  root stylesheet\n',
  },
  {
    name: 'invalid_binary_operator/in_subexpression/input.scss',
    data: "// Even though `1 < 2` here isn't syntactically at the top-level, because `<`\n// binds more tightly than `or`, it's disallowed because it's not in parentheses\n// or square brackets.\n@media (1 < 2 or false = width) {a {b: c}}\n",
  },
  {
    name: 'invalid_binary_operator/in_subexpression/error',
    data: 'Error: expected ")".\n  ,\n4 | @media (1 < 2 or false = width) {a {b: c}}\n  |                        ^\n  \'\n  input.scss 4:24  root stylesheet\n',
  },
  {
    name: 'invalid_binary_operator/lt/input.scss',
    data: '@media (1 < width < 2 < 3) {a {b: c}}\n',
  },
  {
    name: 'invalid_binary_operator/lt/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (1 < width < 2 < 3) {a {b: c}}\n  |                       ^\n  \'\n  input.scss 1:23  root stylesheet\n',
  },
  {
    name: 'invalid_binary_operator/lte/input.scss',
    data: '@media (1 <= width <= 2 <= 3) {a {b: c}}\n',
  },
  {
    name: 'invalid_binary_operator/lte/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (1 <= width <= 2 <= 3) {a {b: c}}\n  |                         ^\n  \'\n  input.scss 1:25  root stylesheet\n',
  },
  {
    name: 'invalid_binary_operator/eq/input.scss',
    data: '@media (1 = 2 = width) {a {b: c}}\n',
  },
  {
    name: 'invalid_binary_operator/eq/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (1 = 2 = width) {a {b: c}}\n  |               ^\n  \'\n  input.scss 1:15  root stylesheet\n',
  },
  {
    name: 'invalid_binary_operator/gte/input.scss',
    data: '@media (3 >= width >= 2 >= 1) {a {b: c}}\n',
  },
  {
    name: 'invalid_binary_operator/gte/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (3 >= width >= 2 >= 1) {a {b: c}}\n  |                         ^\n  \'\n  input.scss 1:25  root stylesheet\n',
  },
  {
    name: 'invalid_binary_operator/gt/input.scss',
    data: '@media (3 > width > 2 > 1) {a {b: c}}\n',
  },
  {
    name: 'invalid_binary_operator/gt/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (3 > width > 2 > 1) {a {b: c}}\n  |                       ^\n  \'\n  input.scss 1:23  root stylesheet\n',
  },
  {
    name: 'invalid_comparison/README.md',
    data: 'The `<=` and `>=` comparison operators may not contain spaces.\n',
  },
  {
    name: 'invalid_comparison/lte/input.scss',
    data: '@media (width < = 100px) {a {b: c}}\n',
  },
  {
    name: 'invalid_comparison/lte/error',
    data: "Error: Expected expression.\n  ,\n1 | @media (width < = 100px) {a {b: c}}\n  |                 ^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'invalid_comparison/gte/input.scss',
    data: '@media (width > = 100px) {a {b: c}}\n',
  },
  {
    name: 'invalid_comparison/gte/error',
    data: "Error: Expected expression.\n  ,\n1 | @media (width > = 100px) {a {b: c}}\n  |                 ^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'invalid_comparison/range_gte/input.scss',
    data: '@media (10px > width > = 1px) {a {b: c}}\n',
  },
  {
    name: 'invalid_comparison/range_gte/error',
    data: "Error: Expected expression.\n  ,\n1 | @media (10px > width > = 1px) {a {b: c}}\n  |                        ^\n  '\n  input.scss 1:24  root stylesheet\n",
  },
  {
    name: 'mismatched_range/README.md',
    data: 'A range-format media feature must have the first operator match the second.\n',
  },
  {
    name: 'mismatched_range/gt_lt/input.scss',
    data: '@media (1px > width < 2px) {a {b: c}}\n',
  },
  {
    name: 'mismatched_range/gt_lt/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (1px > width < 2px) {a {b: c}}\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'mismatched_range/gte_lte/input.scss',
    data: '@media (1px >= width <= 2px) {a {b: c}}\n',
  },
  {
    name: 'mismatched_range/gte_lte/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (1px >= width <= 2px) {a {b: c}}\n  |                      ^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
  {
    name: 'mismatched_range/lt_gt/input.scss',
    data: '@media (1px < width > 2px) {a {b: c}}\n',
  },
  {
    name: 'mismatched_range/lt_gt/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (1px < width > 2px) {a {b: c}}\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'mismatched_range/lte_gte/input.scss',
    data: '@media (1px <= width >= 2px) {a {b: c}}\n',
  },
  {
    name: 'mismatched_range/lte_gte/error',
    data: 'Error: expected ")".\n  ,\n1 | @media (1px <= width >= 2px) {a {b: c}}\n  |                      ^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
]
