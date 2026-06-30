// https://github.com/sass/sass-spec/blob/HEAD/spec/css/supports/syntax/declaration.hrx

export default [
  {
    name: 'plain/ident/input.scss',
    data: '@supports (a: b) {@c}\n',
  },
  {
    name: 'plain/ident/output.css',
    data: '@supports (a: b) {\n  @c;\n}\n',
  },
  {
    name: 'plain/quoted_rhs/input.scss',
    data: '@supports (a: "b") {@c}\n',
  },
  {
    name: 'plain/quoted_rhs/output.css',
    data: '@supports (a: "b") {\n  @c;\n}\n',
  },
  {
    name: 'dynamic/lhs/input.scss',
    data: '@supports (1 + 1: b) {@c}\n',
  },
  {
    name: 'dynamic/lhs/output.css',
    data: '@supports (2: b) {\n  @c;\n}\n',
  },
  {
    name: 'dynamic/rhs/input.scss',
    data: '@supports (a: 1 + 1) {@c}\n',
  },
  {
    name: 'dynamic/rhs/output.css',
    data: '@supports (a: 2) {\n  @c;\n}\n',
  },
  {
    name: 'nested/input.scss',
    data: '@supports ((((a: b)))) {@c}\n',
  },
  {
    name: 'nested/output.css',
    data: '@supports (a: b) {\n  @c;\n}\n',
  },
  {
    name: 'custom_prop/value/input.scss',
    data: '@supports (--a: b) {@c}\n',
  },
  {
    name: 'custom_prop/value/output.css',
    data: '@supports (--a: b) {\n  @c;\n}\n',
  },
  {
    name: 'custom_prop/whitespace/input.scss',
    data: '@supports (--a: ) {@c}\n',
  },
  {
    name: 'custom_prop/whitespace/output.css',
    data: '@supports (--a: ) {\n  @c;\n}\n',
  },
  {
    name: 'custom_prop/comma/input.scss',
    data: '@supports (--a: ,) {@c}\n',
  },
  {
    name: 'custom_prop/comma/output.css',
    data: '@supports (--a: ,) {\n  @c;\n}\n',
  },
]
