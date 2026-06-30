// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/operations/division.hrx

export default [
  {
    name: 'slash/with_string/slash_plus_string/input.scss',
    data: 'a {b: 1 / 2 + foo()}\n',
  },
  {
    name: 'slash/with_string/slash_plus_string/output.css',
    data: 'a {\n  b: 0.5foo();\n}\n',
  },
  {
    name: 'slash/with_string/slash_plus_string/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: 1 / 2 + foo()}\n  |       ^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'slash/with_string/slash_minus_string/input.scss',
    data: 'a {b: 1 / 2 - foo()}\n',
  },
  {
    name: 'slash/with_string/slash_minus_string/output.css',
    data: 'a {\n  b: 0.5-foo();\n}\n',
  },
  {
    name: 'slash/with_string/slash_minus_string/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: 1 / 2 - foo()}\n  |       ^^^^^\n  '\n    input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'slash/with_string/slash_slash_string/input.scss',
    data: 'a {b: 1 / 2 / foo()}\n',
  },
  {
    name: 'slash/with_string/slash_slash_string/output.css',
    data: 'a {\n  b: 1/2/foo();\n}\n',
  },
  {
    name: 'slash/with_string/string_plus_slash/input.scss',
    data: 'a {b: foo() + 1 / 2}\n',
  },
  {
    name: 'slash/with_string/string_plus_slash/output.css',
    data: 'a {\n  b: foo()0.5;\n}\n',
  },
  {
    name: 'slash/with_string/string_plus_slash/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: foo() + 1 / 2}\n  |               ^^^^^\n  '\n    input.scss 1:15  root stylesheet\n",
  },
  {
    name: 'slash/with_string/string_minus_slash/input.scss',
    data: 'a {b: foo() - 1 / 2}\n',
  },
  {
    name: 'slash/with_string/string_minus_slash/output.css',
    data: 'a {\n  b: foo()-0.5;\n}\n',
  },
  {
    name: 'slash/with_string/string_minus_slash/warning',
    data: "DEPRECATION WARNING [slash-div]: Using / for division outside of calc() is deprecated and will be removed in Dart Sass 2.0.0.\n\nRecommendation: math.div(1, 2) or calc(1 / 2)\n\nMore info and automated migrator: https://sass-lang.com/d/slash-div\n\n  ,\n1 | a {b: foo() - 1 / 2}\n  |               ^^^^^\n  '\n    input.scss 1:15  root stylesheet\n",
  },
]
