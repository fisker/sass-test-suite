// https://github.com/sass/sass-spec/blob/HEAD/spec/directives/use/error/syntax/member.hrx

export default [
  {
    name: 'identifier_only/input.scss',
    data: '// A namespaced identifier with neither parentheses for a function nor a leading\n// dollar sign for a variable is invalid syntax.\na {a: namespace.member}\n',
  },
  {
    name: 'identifier_only/error',
    data: 'Error: expected "(".\n  ,\n3 | a {a: namespace.member}\n  |                       ^\n  \'\n  input.scss 3:23  root stylesheet\n',
  },
  {
    name: 'function/no_namespace/input.scss',
    data: 'a {a: .member()}\n',
  },
  {
    name: 'function/no_namespace/error',
    data: "Error: Expected digit.\n  ,\n1 | a {a: .member()}\n  |        ^\n  '\n  input.scss 1:8  root stylesheet\n",
  },
  {
    name: 'function/no_member/input.scss',
    data: 'a {a: namespace.()}\n',
  },
  {
    name: 'function/no_member/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {a: namespace.()}\n  |                 ^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'function/private/input.scss',
    data: 'a {a: namespace._member()}\n',
  },
  {
    name: 'function/private/error',
    data: "Error: Private members can't be accessed from outside their modules.\n  ,\n1 | a {a: namespace._member()}\n  |                 ^^^^^^^\n  '\n  input.scss 1:17  root stylesheet\n",
  },
  {
    name: 'function/definition/input.scss',
    data: '@function namespace.member() {@return null}\n',
  },
  {
    name: 'function/definition/error',
    data: 'Error: expected "(".\n  ,\n1 | @function namespace.member() {@return null}\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'variable/no_namespace/input.scss',
    data: 'a {a: $.member}\n',
  },
  {
    name: 'variable/no_namespace/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {a: $.member}\n  |        ^\n  '\n  input.scss 1:8  root stylesheet\n",
  },
  {
    name: 'variable/no_member/input.scss',
    data: 'a {a: namespace.$}\n',
  },
  {
    name: 'variable/no_member/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {a: namespace.$}\n  |                  ^\n  '\n  input.scss 1:18  root stylesheet\n",
  },
  {
    name: 'variable/private/input.scss',
    data: 'a {a: namespace.$_member}\n',
  },
  {
    name: 'variable/private/error',
    data: "Error: Private members can't be accessed from outside their modules.\n  ,\n1 | a {a: namespace.$_member}\n  |       ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 1:7  root stylesheet\n",
  },
  {
    name: 'variable/global/input.scss',
    data: 'namespace.$member: value !global;\n',
  },
  {
    name: 'variable/global/error',
    data: "Error: !global isn't allowed for variables in other modules.\n  ,\n1 | namespace.$member: value !global;\n  |                          ^^^^^^^\n  '\n  input.scss 1:26  root stylesheet\n",
  },
  {
    name: 'mixin/no_namespace/input.scss',
    data: 'a {@include .member}\n',
  },
  {
    name: 'mixin/no_namespace/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {@include .member}\n  |             ^\n  '\n  input.scss 1:13  root stylesheet\n",
  },
  {
    name: 'mixin/no_member/input.scss',
    data: 'a {@include namespace.}\n',
  },
  {
    name: 'mixin/no_member/error',
    data: "Error: Expected identifier.\n  ,\n1 | a {@include namespace.}\n  |                       ^\n  '\n  input.scss 1:23  root stylesheet\n",
  },
  {
    name: 'mixin/private/input.scss',
    data: 'a {@include namespace._member}\n',
  },
  {
    name: 'mixin/private/error',
    data: "Error: Private members can't be accessed from outside their modules.\n  ,\n1 | a {@include namespace._member}\n  |                       ^^^^^^^\n  '\n  input.scss 1:23  root stylesheet\n",
  },
  {
    name: 'mixin/definition/input.scss',
    data: '@mixin namespace.member() {}\n',
  },
  {
    name: 'mixin/definition/error',
    data: 'Error: expected "{".\n  ,\n1 | @mixin namespace.member() {}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'unused_private/input.scss',
    data: '// Private member usage is a syntax error, so it should fail at parse time\n// without needing to be executed.\n@function foo() {\n  @debug namespace.$_member;\n}\n',
  },
  {
    name: 'unused_private/error',
    data: "Error: Private members can't be accessed from outside their modules.\n  ,\n4 |   @debug namespace.$_member;\n  |          ^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 4:10  root stylesheet\n",
  },
]
