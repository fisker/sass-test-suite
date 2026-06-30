export default [
  {
    name: 'logic/and_after/type_and_not/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and_after/type_and_not/plain.css',
    data: '@media a and not (b) and (c) {x {y: z}}\n',
  },
  {
    name: 'logic/and_after/type_and_not/error',
    data: 'Error: expected "{".\n  ,\n1 | @media a and not (b) and (c) {x {y: z}}\n  |                      ^\n  \'\n  plain.css 1:22  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'logic/and_after/or/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/and_after/or/plain.css',
    data: '@media (a) or (b) and (c) {x {y: z}}\n',
  },
  {
    name: 'logic/and_after/or/error',
    data: 'Error: expected "{".\n  ,\n1 | @media (a) or (b) and (c) {x {y: z}}\n  |                   ^\n  \'\n  plain.css 1:19  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'logic/or_after/type/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/or_after/type/plain.css',
    data: '@media a or (b) {x {y: z}}\n',
  },
  {
    name: 'logic/or_after/type/error',
    data: 'Error: expected "{".\n  ,\n1 | @media a or (b) {x {y: z}}\n  |             ^\n  \'\n  plain.css 1:13  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'logic/or_after/type_and_not/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/or_after/type_and_not/plain.css',
    data: '@media a and not (b) or (c) {x {y: z}}\n',
  },
  {
    name: 'logic/or_after/type_and_not/error',
    data: 'Error: expected "{".\n  ,\n1 | @media a and not (b) or (c) {x {y: z}}\n  |                      ^\n  \'\n  plain.css 1:22  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'logic/or_after/and/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/or_after/and/plain.css',
    data: '@media (a) and (b) or (c) {x {y: z}}\n',
  },
  {
    name: 'logic/or_after/and/error',
    data: 'Error: expected "{".\n  ,\n1 | @media (a) and (b) or (c) {x {y: z}}\n  |                    ^\n  \'\n  plain.css 1:20  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'logic/or_after/type_then_and/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/or_after/type_then_and/plain.css',
    data: '@media a and (b) or (c) {x {y: z}}\n',
  },
  {
    name: 'logic/or_after/type_then_and/error',
    data: 'Error: expected "{".\n  ,\n1 | @media a and (b) or (c) {x {y: z}}\n  |                  ^\n  \'\n  plain.css 1:18  @use\n  input.scss 1:1  root stylesheet\n',
  },
  {
    name: 'logic/nothing_after/not/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/nothing_after/not/plain.css',
    data: '@media not {x {y: z}}\n',
  },
  {
    name: 'logic/nothing_after/not/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media not {x {y: z}}\n  |            ^\n  '\n  plain.css 1:12  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'logic/nothing_after/and_not/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/nothing_after/and_not/plain.css',
    data: '@media a and not {x {y: z}}\n',
  },
  {
    name: 'logic/nothing_after/and_not/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media a and not {x {y: z}}\n  |                  ^\n  '\n  plain.css 1:18  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'logic/nothing_after/and/after_type/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/nothing_after/and/after_type/plain.css',
    data: '@media a and {x {y: z}}\n',
  },
  {
    name: 'logic/nothing_after/and/after_type/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media a and {x {y: z}}\n  |              ^\n  '\n  plain.css 1:14  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'logic/nothing_after/and/after_paren/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/nothing_after/and/after_paren/plain.css',
    data: '@media (a) and {x {y: z}}\n',
  },
  {
    name: 'logic/nothing_after/and/after_paren/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media (a) and {x {y: z}}\n  |                ^\n  '\n  plain.css 1:16  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'logic/nothing_after/or/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'logic/nothing_after/or/plain.css',
    data: '@media (a) or {x {y: z}}\n',
  },
  {
    name: 'logic/nothing_after/or/error',
    data: "Error: expected media condition in parentheses.\n  ,\n1 | @media (a) or {x {y: z}}\n  |               ^\n  '\n  plain.css 1:15  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/not/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'missing_whitespace/not/plain.css',
    data: '@media not(a) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/not/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media not(a) {x {y: z}}\n  |           ^\n  '\n  plain.css 1:11  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and_not/type/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'missing_whitespace/and_not/type/plain.css',
    data: '@media a and not(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and_not/type/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media a and not(b) {x {y: z}}\n  |                 ^\n  '\n  plain.css 1:17  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and_not/type_and_modifier/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'missing_whitespace/and_not/type_and_modifier/plain.css',
    data: '@media only a and not(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and_not/type_and_modifier/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media only a and not(b) {x {y: z}}\n  |                      ^\n  '\n  plain.css 1:22  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and/after_type/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'missing_whitespace/and/after_type/plain.css',
    data: '@media a and(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and/after_type/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media a and(b) {x {y: z}}\n  |             ^\n  '\n  plain.css 1:13  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and/first/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'missing_whitespace/and/first/plain.css',
    data: '@media (a) and(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and/first/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media (a) and(b) {x {y: z}}\n  |               ^\n  '\n  plain.css 1:15  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/and/later/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'missing_whitespace/and/later/plain.css',
    data: '@media (a) and (b) and(c) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/and/later/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media (a) and (b) and(c) {x {y: z}}\n  |                       ^\n  '\n  plain.css 1:23  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/or/first/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'missing_whitespace/or/first/plain.css',
    data: '@media (a) or(b) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/or/first/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media (a) or(b) {x {y: z}}\n  |              ^\n  '\n  plain.css 1:14  @use\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'missing_whitespace/or/later/input.scss',
    data: "@use 'plain';\n",
  },
  {
    name: 'missing_whitespace/or/later/plain.css',
    data: '@media (a) or (b) or(c) {x {y: z}}\n',
  },
  {
    name: 'missing_whitespace/or/later/error',
    data: "Error: Expected whitespace.\n  ,\n1 | @media (a) or (b) or(c) {x {y: z}}\n  |                     ^\n  '\n  plain.css 1:21  @use\n  input.scss 1:1  root stylesheet\n",
  },
]
