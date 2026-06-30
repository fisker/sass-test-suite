// https://github.com/sass/sass-spec/blob/HEAD/spec/css/selector/parent.hrx

export default [
  {
    name: 'alone/first/input.scss',
    data: '& {a: b}\n',
  },
  {
    name: 'alone/first/output.css',
    data: '& {\n  a: b;\n}\n',
  },
  {
    name: 'alone/second/input.scss',
    data: 'a {\n  & {b: c}\n}\n',
  },
  {
    name: 'alone/second/output.css',
    data: 'a {\n  b: c;\n}\n',
  },
  {
    name: 'in_at_rule/input.scss',
    data: '@a {\n  & {b: c}\n}\n',
  },
  {
    name: 'in_at_rule/output.css',
    data: '@a {\n  & {\n    b: c;\n  }\n}\n',
  },
  {
    name: 'compound/input.scss',
    data: 'a {\n  &.b {c: d}\n}\n',
  },
  {
    name: 'compound/output.css',
    data: 'a.b {\n  c: d;\n}\n',
  },
  {
    name: 'suffix/input.scss',
    data: 'a {\n  &b {c: d}\n}\n',
  },
  {
    name: 'suffix/output.css',
    data: 'ab {\n  c: d;\n}\n',
  },
  {
    name: 'complex/simple_parent/input.scss',
    data: 'a {\n  b &.c {d: e}\n}\n',
  },
  {
    name: 'complex/simple_parent/output.css',
    data: 'b a.c {\n  d: e;\n}\n',
  },
  {
    name: 'complex/complex_parent/input.scss',
    data: 'a b {\n  c &.d {e: f}\n}\n',
  },
  {
    name: 'complex/complex_parent/output.css',
    data: 'c a b.d {\n  e: f;\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/is/input.scss',
    data: 'a {\n  :is(&) {b: c}\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/is/output.css',
    data: ':is(a) {\n  b: c;\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/where/input.scss',
    data: 'a {\n  :where(&) {b: c}\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/where/output.css',
    data: ':where(a) {\n  b: c;\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/matches/input.scss',
    data: 'a {\n  :matches(&) {b: c}\n}\n',
  },
  {
    name: 'selector_pseudo/simple_parent/matches/output.css',
    data: ':matches(a) {\n  b: c;\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/is/input.scss',
    data: 'a b {\n  :is(&) {c: d}\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/is/output.css',
    data: ':is(a b) {\n  c: d;\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/where/input.scss',
    data: 'a b {\n  :where(&) {c: d}\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/where/output.css',
    data: ':where(a b) {\n  c: d;\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/matches/input.scss',
    data: 'a b {\n  :where(&) {c: d}\n}\n',
  },
  {
    name: 'selector_pseudo/complex_parent/matches/output.css',
    data: ':where(a b) {\n  c: d;\n}\n',
  },
  {
    name: 'multiple/input.scss',
    data: 'a {\n  &.b &.c {d: e}\n}\n',
  },
  {
    name: 'multiple/output.css',
    data: 'a.b a.c {\n  d: e;\n}\n',
  },
  {
    name: 'in_one_complex/input.scss',
    data: 'a {\n  &.b, c {d: e}\n}\n',
  },
  {
    name: 'in_one_complex/output.css',
    data: 'a.b, a c {\n  d: e;\n}\n',
  },
  {
    name: 'error/first_arg_suffix/input.scss',
    data: '&a {b: c}\n',
  },
  {
    name: 'error/first_arg_suffix/error',
    data: "Error: A top-level selector may not contain a parent selector with a suffix.\n  ,\n1 | &a {b: c}\n  | ^^\n  '\n  input.scss 1:1  root stylesheet\n",
  },
  {
    name: 'error/in_at_rule_suffix/input.scss',
    data: '@a {\n  &b {c: d}\n}\n',
  },
  {
    name: 'error/in_at_rule_suffix/error',
    data: "Error: A top-level selector may not contain a parent selector with a suffix.\n  ,\n2 |   &b {c: d}\n  |   ^^\n  '\n  input.scss 2:3  root stylesheet\n",
  },
  {
    name: 'error/non_initial/input.scss',
    data: 'a {\n  [b]& {c: d}\n}\n',
  },
  {
    name: 'error/non_initial/error',
    data: 'Error: "&" may only used at the beginning of a compound selector.\n  ,\n2 |   [b]& {c: d}\n  |      ^\n  \'\n  input.scss 2:6  root stylesheet\n',
  },
  {
    name: 'error/prefix/input.scss',
    data: 'a {\n  b& {c: d}\n}\n',
  },
  {
    name: 'error/prefix/error',
    data: 'Error: "&" may only used at the beginning of a compound selector.\n  ,\n2 |   b& {c: d}\n  |    ^\n  \'\n  input.scss 2:4  root stylesheet\n',
  },
]
