export default [
  {
    name: 'ident_minus_space_ident/input.scss',
    data: 'a {b: U+abc- def}\n',
  },
  {
    name: 'ident_minus_space_ident/error',
    data: "Error: Expected hex digit.\n  ,\n1 | a {b: U+abc- def}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'minus_ident_minus/input.scss',
    data: 'a {b: u+123-abc-def}\n',
  },
  {
    name: 'minus_ident_minus/error',
    data: "Error: Expected end of identifier.\n  ,\n1 | a {b: u+123-abc-def}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'minus_number_minus_ident/input.scss',
    data: 'a {b: U+123-456-ABC}\n',
  },
  {
    name: 'minus_number_minus_ident/error',
    data: "Error: Expected end of identifier.\n  ,\n1 | a {b: U+123-456-ABC}\n  |                ^\n  '\n  input.scss 1:16  root stylesheet\n",
  },
  {
    name: 'no_digits/input.scss',
    data: 'a {b: U+}\n',
  },
  {
    name: 'no_digits/error',
    data: 'Error: Expected hex digit or "?".\n  ,\n1 | a {b: U+}\n  |         ^\n  \'\n  input.scss 1:9  root stylesheet\n',
  },
  {
    name: 'nothing_after_minus/input.scss',
    data: 'a {b: U+abc-}\n',
  },
  {
    name: 'nothing_after_minus/error',
    data: "Error: Expected hex digit.\n  ,\n1 | a {b: U+abc-}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'question_mark_after_minus/input.scss',
    data: 'a {b: u+abc-de?}\n',
  },
  {
    name: 'question_mark_after_minus/error',
    data: 'Error: expected ";".\n  ,\n1 | a {b: u+abc-de?}\n  |               ^\n  \'\n  input.scss 1:15  root stylesheet\n',
  },
  {
    name: 'too_many/after_minus/decimal_digits/input.scss',
    data: 'a {b: U+abc-1234567}\n',
  },
  {
    name: 'too_many/after_minus/decimal_digits/error',
    data: "Error: Expected at most 6 digits.\n  ,\n1 | a {b: U+abc-1234567}\n  |             ^^^^^^^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'too_many/after_minus/hex_digits/input.scss',
    data: 'a {b: U+abc-abcdefa}\n',
  },
  {
    name: 'too_many/after_minus/hex_digits/error',
    data: "Error: Expected at most 6 digits.\n  ,\n1 | a {b: U+abc-abcdefa}\n  |             ^^^^^^^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'too_many/decimal_digits/input.scss',
    data: 'a {b: U+1234567}\n',
  },
  {
    name: 'too_many/decimal_digits/error',
    data: "Error: Expected at most 6 digits.\n  ,\n1 | a {b: U+1234567}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_many/hex_digits/input.scss',
    data: 'a {b: U+ABCDEFA}\n',
  },
  {
    name: 'too_many/hex_digits/error',
    data: "Error: Expected at most 6 digits.\n  ,\n1 | a {b: U+ABCDEFA}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_many/question_marks/after_question_mark/input.scss',
    data: 'a {b: U+???????}\n',
  },
  {
    name: 'too_many/question_marks/after_question_mark/error',
    data: "Error: Expected at most 6 digits.\n  ,\n1 | a {b: U+???????}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'too_many/question_marks/after_decimal/input.scss',
    data: 'a {b: U+12345??}\n',
  },
  {
    name: 'too_many/question_marks/after_decimal/error',
    data: "Error: Expected at most 6 digits.\n  ,\n1 | a {b: U+12345??}\n  |       ^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
]
