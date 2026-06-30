export default [
  {
    name: 'before_query/scss/input.scss',
    data: '@supports\n  (a: b) {c {d: e}}\n',
  },
  {
    name: 'before_query/scss/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/after_open_paren/scss/input.scss',
    data: '@supports (\n  a: b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/after_open_paren/scss/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/after_open_paren/sass/input.sass',
    data: '@supports (\n  a: b)\n    c\n      d: e\n',
  },
  {
    name: 'declaration/normal_prop/after_open_paren/sass/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/before_colon/scss/input.scss',
    data: '@supports (a \n  : b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/before_colon/scss/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/before_colon/sass/input.sass',
    data: '@supports (a\n  : b)\n    c\n      d: e\n',
  },
  {
    name: 'declaration/normal_prop/before_colon/sass/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/after_colon/scss/input.scss',
    data: '@supports (a:\n  b) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/after_colon/scss/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/after_colon/sass/input.sass',
    data: '@supports (a:\n  b)\n    c\n      d: e\n',
  },
  {
    name: 'declaration/normal_prop/after_colon/sass/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/before_close_paren/scss/input.scss',
    data: '@supports (a: b\n  ) {c {d: e}}\n',
  },
  {
    name: 'declaration/normal_prop/before_close_paren/scss/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'declaration/normal_prop/before_close_paren/sass/input.sass',
    data: '@supports (a: b\n  )\n    c\n      d: e\n',
  },
  {
    name: 'declaration/normal_prop/before_close_paren/sass/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'function/after_open_paren/scss/input.scss',
    data: '@supports a(\n  b) {c {d: e}}\n',
  },
  {
    name: 'function/after_open_paren/scss/output.css',
    data: '@supports a(\n  b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'function/after_open_paren/sass/input.sass',
    data: '@supports a(\n  b)\n    c\n      d: e\n',
  },
  {
    name: 'function/after_open_paren/sass/output.css',
    data: '@supports a(\n  b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'function/before_close_paren/scss/input.scss',
    data: '@supports a(b \n  ) {c {d: e}}\n',
  },
  {
    name: 'function/before_close_paren/scss/output.css',
    data: '@supports a(b\n  ) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'function/before_close_paren/sass/input.sass',
    data: '@supports a(b\n  )\n  c\n      d: e\n',
  },
  {
    name: 'function/before_close_paren/sass/output.css',
    data: '@supports a(b\n  ) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/after_open_paren/scss/input.scss',
    data: '@supports (\n  a b) {c {d: e}}\n',
  },
  {
    name: 'anything/after_open_paren/scss/output.css',
    data: '@supports (a b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/after_open_paren/sass/input.sass',
    data: '@supports (\n  a b)\n    c\n      d: e\n',
  },
  {
    name: 'anything/after_open_paren/sass/output.css',
    data: '@supports (a b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/after_not_in_paren/sass/input.sass',
    data: '@supports (not\n  (a))\n    b\n      c: d\n',
  },
  {
    name: 'anything/after_not_in_paren/sass/output.css',
    data: '@supports not (a) {\n  b {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'anything/after_ident/scss/input.scss',
    data: '@supports (a\n  b) {c {d: e}}\n',
  },
  {
    name: 'anything/after_ident/scss/output.css',
    data: '@supports (a\n  b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/after_ident/sass/input.sass',
    data: '@supports (a\n  b)\n    c\n      d: e\n',
  },
  {
    name: 'anything/after_ident/sass/output.css',
    data: '@supports (a\n  b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/before_close_paren/scss/input.scss',
    data: '@supports (a b\n  ) {c {d: e}}\n',
  },
  {
    name: 'anything/before_close_paren/scss/output.css',
    data: '@supports (a b\n  ) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'anything/before_close_paren/sass/input.sass',
    data: '@supports (a b\n  ) \n    c\n      d: e\n',
  },
  {
    name: 'anything/before_close_paren/sass/output.css',
    data: '@supports (a b\n  ) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'after_query/scss/input.scss',
    data: '@supports (a: b)\n  {c {d: e}}\n',
  },
  {
    name: 'after_query/scss/output.css',
    data: '@supports (a: b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'negation/after_not_in_paren/sass/input.sass',
    data: '@supports (not\n (a)) \n    b\n      c: d\n',
  },
  {
    name: 'negation/after_not_in_paren/sass/output.css',
    data: '@supports not (a) {\n  b {\n    c: d;\n  }\n}\n',
  },
  {
    name: 'multi_conditions/after_and_in_paren/sass/input.sass',
    data: '@supports ((a) and\n  (b))\n    c\n      d: e\n',
  },
  {
    name: 'multi_conditions/after_and_in_paren/sass/output.css',
    data: '@supports (a) and (b) {\n  c {\n    d: e;\n  }\n}\n',
  },
  {
    name: 'interpolation/paren/before_operator/input.sass',
    data: '@supports (#{"(a: b)"} \n  and (c: d))\n  @d\n',
  },
  {
    name: 'interpolation/paren/before_operator/output.css',
    data: '@supports (a: b) and (c: d) {\n  @d;\n}\n',
  },
  {
    name: 'interpolation/paren/after_operator/input.sass',
    data: '@supports (#{"(a: b)"} and\n  (c: d))\n    @d\n',
  },
  {
    name: 'interpolation/paren/after_operator/output.css',
    data: '@supports (a: b) and (c: d) {\n  @d;\n}\n',
  },
  {
    name: 'interpolation/paren/after_second/input.sass',
    data: '@supports (#{"(a: b)"} and (c: d) \n  and (e: f))\n    @d\n',
  },
  {
    name: 'interpolation/paren/after_second/output.css',
    data: '@supports (a: b) and (c: d) and (e: f) {\n  @d;\n}\n',
  },
  {
    name: 'error/before_query/sass/input.sass',
    data: '@supports\n  (a: b)\n    c\n      d: e\n',
  },
  {
    name: 'error/before_query/sass/error',
    data: 'Error: expected "(".\n  ,\n1 | @supports\n  |          ^\n  \'\n  input.sass 1:10  root stylesheet\n',
  },
  {
    name: 'error/interpolation/no_paren/before_operator/input.sass',
    data: '@supports #{"(a: b)"} \n  and (c: d)\n    @d\n',
  },
  {
    name: 'error/interpolation/no_paren/before_operator/error',
    data: "Error: expected selector.\n  ,\n2 |   and (c: d)\n  |       ^\n  '\n  input.sass 2:7  root stylesheet\n",
  },
  {
    name: 'error/interpolation/no_paren/after_second/input.sass',
    data: '@supports #{"(a: b)"} and (c: d) \n  and (e: f)\n    @d\n',
  },
  {
    name: 'error/interpolation/no_paren/after_second/error',
    data: "Error: expected selector.\n  ,\n2 |   and (e: f)\n  |       ^\n  '\n  input.sass 2:7  root stylesheet\n",
  },
  {
    name: 'error/interpolation/no_paren/after_operator/input.sass',
    data: '@supports #{"(a: b)"} and\n  (c: d)\n    @d\n',
  },
  {
    name: 'error/interpolation/no_paren/after_operator/error',
    data: 'Error: expected "(".\n  ,\n1 | @supports #{"(a: b)"} and\n  |                          ^\n  \'\n  input.sass 1:26  root stylesheet\n',
  },
  {
    name: 'error/multi_conditions/before_and/sass/input.sass',
    data: '@supports (a)\n and (b)\n    c\n      d: e\n',
  },
  {
    name: 'error/multi_conditions/before_and/sass/error',
    data: "Error: expected selector.\n  ,\n2 |  and (b)\n  |      ^\n  '\n  input.sass 2:6  root stylesheet\n",
  },
  {
    name: 'error/multi_conditions/after_and/sass/input.sass',
    data: '@supports (a) and\n  (b)\n    c\n      d: e\n',
  },
  {
    name: 'error/multi_conditions/after_and/sass/error',
    data: 'Error: expected "(".\n  ,\n1 | @supports (a) and\n  |                  ^\n  \'\n  input.sass 1:18  root stylesheet\n',
  },
  {
    name: 'error/negation/after_not/sass/input.sass',
    data: '@supports not\n (a) \n    b\n      c: d\n',
  },
  {
    name: 'error/negation/after_not/sass/error',
    data: 'Error: expected "(".\n  ,\n1 | @supports not\n  |              ^\n  \'\n  input.sass 1:14  root stylesheet\n',
  },
]
