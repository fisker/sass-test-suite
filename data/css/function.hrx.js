export default [
  {
    name: 'lowercase/parameter/input.scss',
    data: '@function --a(--b <color>) {result: c}\n',
  },
  {
    name: 'lowercase/parameter/output.css',
    data: '@function --a(--b <color>) {\n  result: c;\n}\n',
  },
  {
    name: 'lowercase/returns/input.scss',
    data: '@function --a() returns <ident> {result: b}\n',
  },
  {
    name: 'lowercase/returns/output.css',
    data: '@function --a() returns <ident> {\n  result: b;\n}\n',
  },
  {
    name: 'lowercase/interpolation/input.scss',
    data: '@function --#{a}() {result: b}\n',
  },
  {
    name: 'lowercase/interpolation/output.css',
    data: '@function --a() {\n  result: b;\n}\n',
  },
  {
    name: 'lowercase/result/sass_script/input.scss',
    data: '@function --a() {\n  result: $b;\n}\n',
  },
  {
    name: 'lowercase/result/sass_script/output.css',
    data: '@function --a() {\n  result: $b;\n}\n',
  },
  {
    name: 'lowercase/result/characters/input.scss',
    data: '@function --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'lowercase/result/characters/output.css',
    data: '@function --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'lowercase/result/interpolation/input.scss',
    data: '@function --a() {\n  result: #{1 + 1};\n}\n',
  },
  {
    name: 'lowercase/result/interpolation/output.css',
    data: '@function --a() {\n  result: 2;\n}\n',
  },
  {
    name: 'uppercase/result/sass_script/input.scss',
    data: '@FUNCTION --a() {\n  result: $b;\n}\n',
  },
  {
    name: 'uppercase/result/sass_script/output.css',
    data: '@FUNCTION --a() {\n  result: $b;\n}\n',
  },
  {
    name: 'uppercase/result/characters/input.scss',
    data: '@FUNCTION --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'uppercase/result/characters/output.css',
    data: '@FUNCTION --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'uppercase/result/interpolation/input.scss',
    data: '@FUNCTION --a() {\n  result: #{1 + 1};\n}\n',
  },
  {
    name: 'uppercase/result/interpolation/output.css',
    data: '@FUNCTION --a() {\n  result: 2;\n}\n',
  },
  {
    name: 'uppercase/result/nesting/input.scss',
    data: '@function --a() {\n  RESULT: {b: c};\n}\n',
  },
  {
    name: 'uppercase/result/nesting/output.css',
    data: '@function --a() {\n  RESULT: {b: c};\n}\n',
  },
  {
    name: 'interpolated/result/sass_script/input.scss',
    data: '@#{function} --a() {\n  result: 1 + 1;\n}\n',
  },
  {
    name: 'interpolated/result/sass_script/output.css',
    data: '@function --a() {\n  result: 2;\n}\n',
  },
  {
    name: 'interpolated/result/nested/input.sass',
    data: '@function --a()\n  #{result}:\n    b: c\n',
  },
  {
    name: 'interpolated/result/nested/output.css',
    data: '@function --a() {\n  result-b: c;\n}\n',
  },
  {
    name: 'result/uppercase/sass_script/input.scss',
    data: '@function --a() {\n  RESULT: $b;\n}\n',
  },
  {
    name: 'result/uppercase/sass_script/output.css',
    data: '@function --a() {\n  RESULT: $b;\n}\n',
  },
  {
    name: 'result/uppercase/characters/input.scss',
    data: '@function --a() {\n  RESULT: {}#&%^*;\n}\n',
  },
  {
    name: 'result/uppercase/characters/output.css',
    data: '@function --a() {\n  RESULT: {}#&%^*;\n}\n',
  },
  {
    name: 'result/uppercase/interpolation/input.scss',
    data: '@function --a() {\n  RESULT: #{1 + 1};\n}\n',
  },
  {
    name: 'result/uppercase/interpolation/output.css',
    data: '@function --a() {\n  RESULT: 2;\n}\n',
  },
  {
    name: 'result/interpolated/sass_script/input.scss',
    data: '@function --a() {\n  #{result}: 1 + 1;\n}\n',
  },
  {
    name: 'result/interpolated/sass_script/output.css',
    data: '@function --a() {\n  result: 2;\n}\n',
  },
  {
    name: 'result/interpolated/nested/input.sass',
    data: '@function --a()\n  #{result}:\n    b: c\n',
  },
  {
    name: 'result/interpolated/nested/output.css',
    data: '@function --a() {\n  result-b: c;\n}\n',
  },
  {
    name: 'result/style_rule/sass_script/input.scss',
    data: '.a {\n  result: 1 + 1;\n}\n',
  },
  {
    name: 'result/style_rule/sass_script/output.css',
    data: '.a {\n  result: 2;\n}\n',
  },
  {
    name: 'result/style_rule/interpolation/input.scss',
    data: '.a {\n  result: #{1 + 1};\n}\n',
  },
  {
    name: 'result/style_rule/interpolation/output.css',
    data: '.a {\n  result: 2;\n}\n',
  },
  {
    name: 'error/lowercase/result/nested/input.sass',
    data: '@function --a()\n  result:\n    b: c\n',
  },
  {
    name: 'error/lowercase/result/nested/error',
    data: "Error: Nothing may be indented beneath a @function result.\n  ,\n3 |     b: c\n  |     ^\n  '\n  input.sass 3:5  root stylesheet\n",
  },
  {
    name: 'error/uppercase/result/nested/input.sass',
    data: '@FUNCTION --a()\n  result:\n    b: c\n',
  },
  {
    name: 'error/uppercase/result/nested/error',
    data: "Error: Nothing may be indented beneath a @function result.\n  ,\n3 |     b: c\n  |     ^\n  '\n  input.sass 3:5  root stylesheet\n",
  },
  {
    name: 'error/interpolated/result/characters/input.scss',
    data: '@#{function} --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'error/interpolated/result/characters/error',
    data: 'Error: expected "{".\n  ,\n2 |   result: {}#&%^*;\n  |                  ^\n  \'\n  input.scss 2:18  root stylesheet\n',
  },
  {
    name: 'error/result/uppercase/nested/input.sass',
    data: '@function --a()\n  RESULT:\n    b: c\n',
  },
  {
    name: 'error/result/uppercase/nested/error',
    data: "Error: Nothing may be indented beneath a @function result.\n  ,\n3 |     b: c\n  |     ^\n  '\n  input.sass 3:5  root stylesheet\n",
  },
  {
    name: 'error/result/interpolated/characters/input.scss',
    data: '@function --a() {\n  #{result}: {}#&%^*;\n}\n',
  },
  {
    name: 'error/result/interpolated/characters/error',
    data: 'Error: expected "{".\n  ,\n2 |   #{result}: {}#&%^*;\n  |                     ^\n  \'\n  input.scss 2:21  root stylesheet\n',
  },
  {
    name: 'error/result/style_rule/characters/input.scss',
    data: '.a {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'error/result/style_rule/characters/error',
    data: 'Error: expected "{".\n  ,\n2 |   result: {}#&%^*;\n  |                  ^\n  \'\n  input.scss 2:18  root stylesheet\n',
  },
]
