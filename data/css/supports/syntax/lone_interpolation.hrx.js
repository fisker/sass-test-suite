export default [
  {
    name: 'top_level/alone/input.scss',
    data: '@supports #{"(a: b)"} {@c}\n',
  },
  {
    name: 'top_level/alone/output.css',
    data: '@supports (a: b) {\n  @c;\n}\n',
  },
  {
    name: 'top_level/before_operator/input.scss',
    data: '@supports #{"(a: b)"} and (c: 1 + 1) {@d}\n',
  },
  {
    name: 'top_level/before_operator/output.css',
    data: '@supports (a: b) and (c: 2) {\n  @d;\n}\n',
  },
  {
    name: 'top_level/after_operator/input.scss',
    data: '@supports (c: 1 + 1) and #{"(a: b)"}  {@d}\n',
  },
  {
    name: 'top_level/after_operator/output.css',
    data: '@supports (c: 2) and (a: b) {\n  @d;\n}\n',
  },
  {
    name: 'parens/alone/input.scss',
    data: '@supports (#{"(a: b)"}) {@c}\n',
  },
  {
    name: 'parens/alone/output.css',
    data: '@supports ((a: b)) {\n  @c;\n}\n',
  },
  {
    name: 'parens/before_operator/input.scss',
    data: '@supports (#{"(a: b)"} and (c: 1 + 1)) {@d}\n',
  },
  {
    name: 'parens/before_operator/output.css',
    data: '@supports (a: b) and (c: 2) {\n  @d;\n}\n',
  },
  {
    name: 'parens/after_operator/input.scss',
    data: '@supports ((c: 1 + 1) and #{"(a: b)"})  {@d}\n',
  },
  {
    name: 'parens/after_operator/output.css',
    data: '@supports (c: 2) and (a: b) {\n  @d;\n}\n',
  },
]
