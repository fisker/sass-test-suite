// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/24_escapes_double_quoted_specials/todo_05_variable_quoted_double.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "\\0_\\a_\\A";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'todo.txt',
    data: 'Fails on shared build (gcc/clang)\r\nLooks like some issue with "\\r"',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n.result {\n  dquoted: "�_\\a_\\a";\n  dquoted: "[�_\\a_\\a]";\n  dquoted: "�_\\a_\\a";\n  dquoted: "�_\\a_\\a";\n  dquoted: "[\'�_\\a_\\a\']";\n  squoted: "�_\\a_\\a";\n  squoted: "[�_\\a_\\a]";\n  squoted: "�_\\a_\\a";\n  squoted: "�_\\a_\\a";\n  squoted: "[\'�_\\a_\\a\']";\n}\n',
  },
]
