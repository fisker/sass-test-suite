export default [
  {
    name: 'empty/input.scss',
    data: '@forward;\n',
  },
  {
    name: 'empty/error',
    data: "Error: Expected string.\n  ,\n1 | @forward;\n  |         ^\n  '\n  input.scss 1:9  root stylesheet\n",
  },
  {
    name: 'as/nothing/input.scss',
    data: '@forward "a" as;\n',
  },
  {
    name: 'as/nothing/error',
    data: 'Error: Expected identifier.\n  ,\n1 | @forward "a" as;\n  |                ^\n  \'\n  input.scss 1:16  root stylesheet\n',
  },
  {
    name: 'as/asterisk/input.scss',
    data: '@forward "a" as *;\n',
  },
  {
    name: 'as/asterisk/error',
    data: 'Error: Expected identifier.\n  ,\n1 | @forward "a" as *;\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'as/invalid/input.scss',
    data: '@forward "a" as 1-*;\n',
  },
  {
    name: 'as/invalid/error',
    data: 'Error: Expected identifier.\n  ,\n1 | @forward "a" as 1-*;\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'as/no_star/input.scss',
    data: '@forward "a" as foo;\n',
  },
  {
    name: 'as/no_star/error',
    data: 'Error: expected "*".\n  ,\n1 | @forward "a" as foo;\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'show/nothing/input.scss',
    data: '@forward "a" show;\n',
  },
  {
    name: 'show/nothing/error',
    data: 'Error: Expected variable, mixin, or function name\n  ,\n1 | @forward "a" show;\n  |                  ^\n  \'\n  input.scss 1:18  root stylesheet\n',
  },
  {
    name: 'show/invalid/input.scss',
    data: '@forward "a" show 1;\n',
  },
  {
    name: 'show/invalid/error',
    data: 'Error: Expected variable, mixin, or function name\n  ,\n1 | @forward "a" show 1;\n  |                   ^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
  {
    name: 'show/empty_variable/input.scss',
    data: '@forward "a" show $;\n',
  },
  {
    name: 'show/empty_variable/error',
    data: 'Error: Expected variable, mixin, or function name\n  ,\n1 | @forward "a" show $;\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'show/trailing_comma/input.scss',
    data: '@forward "a" show b,;\n',
  },
  {
    name: 'show/trailing_comma/error',
    data: 'Error: Expected variable, mixin, or function name\n  ,\n1 | @forward "a" show b,;\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'show/and_hide/input.scss',
    data: '@forward "a" show b hide c;\n',
  },
  {
    name: 'show/and_hide/error',
    data: 'Error: expected ";".\n  ,\n1 | @forward "a" show b hide c;\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'hide/nothing/input.scss',
    data: '@forward "a" hide;\n',
  },
  {
    name: 'hide/nothing/error',
    data: 'Error: Expected variable, mixin, or function name\n  ,\n1 | @forward "a" hide;\n  |                  ^\n  \'\n  input.scss 1:18  root stylesheet\n',
  },
  {
    name: 'hide/invalid/input.scss',
    data: '@forward "a" hide 1;\n',
  },
  {
    name: 'hide/invalid/error',
    data: 'Error: Expected variable, mixin, or function name\n  ,\n1 | @forward "a" hide 1;\n  |                   ^\n  \'\n  input.scss 1:19  root stylesheet\n',
  },
  {
    name: 'hide/empty_variable/input.scss',
    data: '@forward "a" hide $;\n',
  },
  {
    name: 'hide/empty_variable/error',
    data: 'Error: Expected variable, mixin, or function name\n  ,\n1 | @forward "a" hide $;\n  |                    ^\n  \'\n  input.scss 1:20  root stylesheet\n',
  },
  {
    name: 'hide/trailing_comma/input.scss',
    data: '@forward "a" hide b,;\n',
  },
  {
    name: 'hide/trailing_comma/error',
    data: 'Error: Expected variable, mixin, or function name\n  ,\n1 | @forward "a" hide b,;\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'hide/and_show/input.scss',
    data: '@forward "a" hide b show c;\n',
  },
  {
    name: 'hide/and_show/error',
    data: 'Error: expected ";".\n  ,\n1 | @forward "a" hide b show c;\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'url/unquoted/input.scss',
    data: '@forward foo;\n',
  },
  {
    name: 'url/unquoted/error',
    data: "Error: Expected string.\n  ,\n1 | @forward foo;\n  |          ^\n  '\n  input.scss 1:10  root stylesheet\n",
  },
  {
    name: 'within/mixin/input.scss',
    data: '@mixin a {\n  @forward "b";\n}\n',
  },
  {
    name: 'within/mixin/error',
    data: 'Error: This at-rule is not allowed here.\n  ,\n2 |   @forward "b";\n  |   ^^^^^^^^^^^^\n  \'\n  input.scss 2:3  root stylesheet\n',
  },
  {
    name: 'within/function/input.scss',
    data: '@function a() {\n  @forward "b";\n}\n',
  },
  {
    name: 'within/function/error',
    data: 'Error: This at-rule is not allowed here.\n  ,\n2 |   @forward "b";\n  |   ^^^^^^^^^^^^\n  \'\n  input.scss 2:3  root stylesheet\n',
  },
  {
    name: 'within/style_rule/input.scss',
    data: 'a {\n  @forward "b";\n}\n',
  },
  {
    name: 'within/style_rule/error',
    data: 'Error: This at-rule is not allowed here.\n  ,\n2 |   @forward "b";\n  |   ^^^^^^^^^^^^\n  \'\n  input.scss 2:3  root stylesheet\n',
  },
  {
    name: 'after/at_rule/unknown/input.scss',
    data: '@a;\n@forward "b";\n',
  },
  {
    name: 'after/at_rule/unknown/error',
    data: 'Error: @forward rules must be written before any other rules.\n  ,\n2 | @forward "b";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'after/at_rule/sass/input.scss',
    data: '@if true {};\n@forward "a";\n',
  },
  {
    name: 'after/at_rule/sass/error',
    data: 'Error: @forward rules must be written before any other rules.\n  ,\n2 | @forward "a";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'after/at_rule/import/input.scss',
    data: '@import "a";\n@forward "b";\n',
  },
  {
    name: 'after/at_rule/import/error',
    data: 'Error: @forward rules must be written before any other rules.\n  ,\n2 | @forward "b";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'after/at_rule/css/input.scss',
    data: '@keyframes a {};\n@forward "b";\n',
  },
  {
    name: 'after/at_rule/css/error',
    data: 'Error: @forward rules must be written before any other rules.\n  ,\n2 | @forward "b";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'after/style_rule/input.scss',
    data: 'a {};\n@forward "b";\n',
  },
  {
    name: 'after/style_rule/error',
    data: 'Error: @forward rules must be written before any other rules.\n  ,\n2 | @forward "b";\n  | ^^^^^^^^^^^^\n  \'\n  input.scss 2:1  root stylesheet\n',
  },
  {
    name: 'after/indented/mixin/input.sass',
    data: '=a\n  b: c\n@forward "d"\n',
  },
  {
    name: 'after/indented/mixin/error',
    data: 'Error: @forward rules must be written before any other rules.\n  ,\n3 | @forward "d"\n  | ^^^^^^^^^^^^\n  \'\n  input.sass 3:1  root stylesheet\n',
  },
  {
    name: 'after/indented/include/input.sass',
    data: '+a\n@forward "b"\n',
  },
  {
    name: 'after/indented/include/error',
    data: 'Error: @forward rules must be written before any other rules.\n  ,\n2 | @forward "b"\n  | ^^^^^^^^^^^^\n  \'\n  input.sass 2:1  root stylesheet\n',
  },
  {
    name: 'with/empty/input.scss',
    data: '@forward "other" with ();\n',
  },
  {
    name: 'with/empty/error',
    data: 'Error: expected "$".\n  ,\n1 | @forward "other" with ();\n  |                        ^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'with/missing_keyword/input.scss',
    data: '@forward "other" with (a);\n',
  },
  {
    name: 'with/missing_keyword/error',
    data: 'Error: expected "$".\n  ,\n1 | @forward "other" with (a);\n  |                        ^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'with/missing_value/input.scss',
    data: '@forward "other" with ($a);\n',
  },
  {
    name: 'with/missing_value/error',
    data: 'Error: expected ":".\n  ,\n1 | @forward "other" with ($a);\n  |                          ^\n  \'\n  input.scss 1:26  root stylesheet\n',
  },
  {
    name: 'with/space_after_dollar/input.scss',
    data: '@forward "other" with ($ a: b);\n',
  },
  {
    name: 'with/space_after_dollar/error',
    data: 'Error: Expected identifier.\n  ,\n1 | @forward "other" with ($ a: b);\n  |                         ^\n  \'\n  input.scss 1:25  root stylesheet\n',
  },
  {
    name: 'with/namespace_variable/input.scss',
    data: '@forward "other" with (a.$b: c);\n',
  },
  {
    name: 'with/namespace_variable/error',
    data: 'Error: expected "$".\n  ,\n1 | @forward "other" with (a.$b: c);\n  |                        ^\n  \'\n  input.scss 1:24  root stylesheet\n',
  },
  {
    name: 'with/extra_comma/input.scss',
    data: '@forward "other" with ($a: b,,);\n',
  },
  {
    name: 'with/extra_comma/error',
    data: 'Error: expected ")".\n  ,\n1 | @forward "other" with ($a: b,,);\n  |                              ^\n  \'\n  input.scss 1:30  root stylesheet\n',
  },
  {
    name: 'with/no_arguments/input.scss',
    data: '@forward "other" with;\n',
  },
  {
    name: 'with/no_arguments/error',
    data: 'Error: expected "(".\n  ,\n1 | @forward "other" with;\n  |                      ^\n  \'\n  input.scss 1:22  root stylesheet\n',
  },
  {
    name: 'with/before_as/input.scss',
    data: '@forward "other" with ($a: b) as c-*;\n',
  },
  {
    name: 'with/before_as/error',
    data: 'Error: expected ";".\n  ,\n1 | @forward "other" with ($a: b) as c-*;\n  |                               ^\n  \'\n  input.scss 1:31  root stylesheet\n',
  },
  {
    name: 'with/before_show/input.scss',
    data: '@forward "other" with ($a: b) show c;\n',
  },
  {
    name: 'with/before_show/error',
    data: 'Error: expected ";".\n  ,\n1 | @forward "other" with ($a: b) show c;\n  |                               ^\n  \'\n  input.scss 1:31  root stylesheet\n',
  },
  {
    name: 'with/before_hide/input.scss',
    data: '@forward "other" with ($a: b) hide c;\n',
  },
  {
    name: 'with/before_hide/error',
    data: 'Error: expected ";".\n  ,\n1 | @forward "other" with ($a: b) hide c;\n  |                               ^\n  \'\n  input.scss 1:31  root stylesheet\n',
  },
]
