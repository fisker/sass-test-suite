// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/clamp.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `clamp()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'error/syntax/no_args/input.scss',
    data: 'a {b: clamp()}\n',
  },
  {
    name: 'error/syntax/no_args/error',
    data: "Error: Missing argument.\n  ,\n1 | a {b: clamp()}\n  |       ^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/one_arg/input.scss',
    data: 'a {b: clamp(1px)}\n',
  },
  {
    name: 'error/syntax/one_arg/error',
    data: "Error: 3 arguments required, but only 1 was passed.\n  ,\n1 | a {b: clamp(1px)}\n  |       ^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/two_args/input.scss',
    data: 'a {b: clamp(1px, 2px)}\n',
  },
  {
    name: 'error/syntax/two_args/error',
    data: "Error: 3 arguments required, but only 2 were passed.\n  ,\n1 | a {b: clamp(1px, 2px)}\n  |       ^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/four_args/input.scss',
    data: 'a {b: clamp(1px, 2px, 3px, 4px)}\n',
  },
  {
    name: 'error/syntax/four_args/error',
    data: "Error: Only 3 arguments allowed, but 4 were passed.\n  ,\n1 | a {b: clamp(1px, 2px, 3px, 4px)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/rest/input.scss',
    data: 'a {b: clamp(1px 2px 3px...)}\n',
  },
  {
    name: 'error/syntax/rest/error',
    data: "Error: Rest arguments can't be used with calculations.\n  ,\n1 | a {b: clamp(1px 2px 3px...)}\n  |       ^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'error/syntax/invalid_arg/input.scss',
    data: 'a {b: clamp(1px, $, 2px)}\n',
  },
  {
    name: 'error/syntax/invalid_arg/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {b: clamp(1px, $, 2px)}\n  |                   ^\n  '\n  input.scss 1:19  root stylesheet\n",
  },
  {
    name: 'error/known_incompatible/first/input.scss',
    data: 'a {b: clamp(1s, 2px, 3px)}\n',
  },
  {
    name: 'error/known_incompatible/first/error',
    data: "Error: 1s and 2px are incompatible.\n  ,\n1 | a {b: clamp(1s, 2px, 3px)}\n  |             ^^ 1s\n  |                 === 2px\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/known_incompatible/second/input.scss',
    data: 'a {b: clamp(1px, 2s, 3px)}\n',
  },
  {
    name: 'error/known_incompatible/second/error',
    data: "Error: 1px and 2s are incompatible.\n  ,\n1 | a {b: clamp(1px, 2s, 3px)}\n  |             ^^^ 1px\n  |                  == 2s\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/known_incompatible/third/input.scss',
    data: 'a {b: clamp(1px, 2px, 3s)}\n',
  },
  {
    name: 'error/known_incompatible/third/error',
    data: "Error: 1px and 3s are incompatible.\n  ,\n1 | a {b: clamp(1px, 2px, 3s)}\n  |             ^^^ 1px\n  |                       == 3s\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'error/complex_unit/input.scss',
    data: 'a {b: clamp(1px*1px, 2%*2%, 3px*3px)}\n',
  },
  {
    name: 'error/complex_unit/error',
    data: "Error: Number calc(1px * 1px) isn't compatible with CSS calculations.\n  ,\n1 | a {b: clamp(1px*1px, 2%*2%, 3px*3px)}\n  |             ^^^^^^^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'simplified/lower_bound/far_below/input.scss',
    data: 'a {b: clamp(1px, 0px, 3px)}\n',
  },
  {
    name: 'simplified/lower_bound/far_below/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'simplified/lower_bound/fuzzy_equal/input.scss',
    data: 'a {b: clamp(1px, 1.00000000001px, 3px)}\n',
  },
  {
    name: 'simplified/lower_bound/fuzzy_equal/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
  {
    name: 'simplified/between/input.scss',
    data: 'a {b: clamp(1px, 2.5px, 3px)}\n',
  },
  {
    name: 'simplified/between/output.css',
    data: 'a {\n  b: 2.5px;\n}\n',
  },
  {
    name: 'simplified/upper_bound/far_above/input.scss',
    data: 'a {b: clamp(1px, 4px, 3px)}\n',
  },
  {
    name: 'simplified/upper_bound/far_above/output.css',
    data: 'a {\n  b: 3px;\n}\n',
  },
  {
    name: 'simplified/upper_bound/fuzzy_equal/input.scss',
    data: 'a {b: clamp(1px, 2.99999999999px, 3px)}\n',
  },
  {
    name: 'simplified/upper_bound/fuzzy_equal/output.css',
    data: 'a {\n  b: 3px;\n}\n',
  },
  {
    name: 'simplified/compatible_units/input.scss',
    data: 'a {b: clamp(1px, 1in, 1cm)}\n',
  },
  {
    name: 'simplified/compatible_units/output.css',
    data: 'a {\n  b: 1cm;\n}\n',
  },
  {
    name: 'preserved/math/first/input.scss',
    data: 'a {b: clamp(1% + 1px, 2px, 3px)}\n',
  },
  {
    name: 'preserved/math/first/output.css',
    data: 'a {\n  b: clamp(1% + 1px, 2px, 3px);\n}\n',
  },
  {
    name: 'preserved/math/second/input.scss',
    data: 'a {b: clamp(1px, 1% + 2px, 3px)}\n',
  },
  {
    name: 'preserved/math/second/output.css',
    data: 'a {\n  b: clamp(1px, 1% + 2px, 3px);\n}\n',
  },
  {
    name: 'preserved/math/third/input.scss',
    data: 'a {b: clamp(1px, 2px, 1% + 3px)}\n',
  },
  {
    name: 'preserved/math/third/output.css',
    data: 'a {\n  b: clamp(1px, 2px, 1% + 3px);\n}\n',
  },
  {
    name: 'preserved/unit/first/input.scss',
    data: 'a {b: clamp(1%, 2px, 3px)}\n',
  },
  {
    name: 'preserved/unit/first/output.css',
    data: 'a {\n  b: clamp(1%, 2px, 3px);\n}\n',
  },
  {
    name: 'preserved/unit/second/input.scss',
    data: 'a {b: clamp(1px, 2%, 3px)}\n',
  },
  {
    name: 'preserved/unit/second/output.css',
    data: 'a {\n  b: clamp(1px, 2%, 3px);\n}\n',
  },
  {
    name: 'preserved/unit/third/input.scss',
    data: 'a {b: clamp(1px, 2px, 3%)}\n',
  },
  {
    name: 'preserved/unit/third/output.css',
    data: 'a {\n  b: clamp(1px, 2px, 3%);\n}\n',
  },
  {
    name: 'preserved/single_arg/var/input.scss',
    data: 'a {b: clamp(var(--c))}\n',
  },
  {
    name: 'preserved/single_arg/var/output.css',
    data: 'a {\n  b: clamp(var(--c));\n}\n',
  },
  {
    name: 'preserved/single_arg/unquoted_string/input.scss',
    data: '$a: b;\nc {d: clamp($a)}\n',
  },
  {
    name: 'preserved/single_arg/unquoted_string/output.css',
    data: 'c {\n  d: clamp(b);\n}\n',
  },
  {
    name: 'preserved/single_arg/interpolation/input.scss',
    data: 'a {b: clamp(#{c})}\n',
  },
  {
    name: 'preserved/single_arg/interpolation/output.css',
    data: 'a {\n  b: clamp(c);\n}\n',
  },
  {
    name: 'case_insensitive/input.scss',
    data: 'a {b: ClAmP(1px, 0px, 3px)}\n',
  },
  {
    name: 'case_insensitive/output.css',
    data: 'a {\n  b: 1px;\n}\n',
  },
]
