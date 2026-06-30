// https://github.com/sass/sass-spec/blob/HEAD/spec/css/plain/function.hrx

export default [
  {
    name: 'lowercase/parameter/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'lowercase/parameter/plain.css',
    data: '@function --a(--b <color>) {result: c}\n',
  },
  {
    name: 'lowercase/parameter/output.css',
    data: '@function --a(--b <color>) {\n  result: c;\n}\n',
  },
  {
    name: 'lowercase/returns/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'lowercase/returns/plain.css',
    data: '@function --a() returns <ident> {result: b}\n',
  },
  {
    name: 'lowercase/returns/output.css',
    data: '@function --a() returns <ident> {\n  result: b;\n}\n',
  },
  {
    name: 'lowercase/result/sass_script/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'lowercase/result/sass_script/plain.css',
    data: '@function --a() {\n  result: $b;\n}\n',
  },
  {
    name: 'lowercase/result/sass_script/output.css',
    data: '@function --a() {\n  result: $b;\n}\n',
  },
  {
    name: 'lowercase/result/characters/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'lowercase/result/characters/plain.css',
    data: '@function --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'lowercase/result/characters/output.css',
    data: '@function --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'uppercase/result/sass_script/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'uppercase/result/sass_script/plain.css',
    data: '@FUNCTION --a() {\n  result: $b;\n}\n',
  },
  {
    name: 'uppercase/result/sass_script/output.css',
    data: '@FUNCTION --a() {\n  result: $b;\n}\n',
  },
  {
    name: 'uppercase/result/characters/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'uppercase/result/characters/plain.css',
    data: '@FUNCTION --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'uppercase/result/characters/output.css',
    data: '@FUNCTION --a() {\n  result: {}#&%^*;\n}\n',
  },
  {
    name: 'result/uppercase/sass_script/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'result/uppercase/sass_script/plain.css',
    data: '@function --a() {\n  RESULT: $b;\n}\n',
  },
  {
    name: 'result/uppercase/sass_script/output.css',
    data: '@function --a() {\n  RESULT: $b;\n}\n',
  },
  {
    name: 'result/uppercase/characters/input.scss',
    data: '@use "plain";\n',
  },
  {
    name: 'result/uppercase/characters/plain.css',
    data: '@function --a() {\n  RESULT: {}#&%^*;\n}\n',
  },
  {
    name: 'result/uppercase/characters/output.css',
    data: '@function --a() {\n  RESULT: {}#&%^*;\n}\n',
  },
]
