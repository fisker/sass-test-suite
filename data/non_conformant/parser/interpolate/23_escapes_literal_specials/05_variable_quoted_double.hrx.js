export default [
  {
    name: 'input.scss',
    data: '$input: \\0_\\a_\\A;\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "\\\\0 _\\\\a _\\\\a ";\n  dquoted: "[\\\\0 _\\\\a _\\\\a ]";\n  dquoted: "\\\\0 _\\\\a _\\\\a ";\n  dquoted: "\\\\0 _\\\\a _\\\\a ";\n  dquoted: "[\'\\\\0 _\\\\a _\\\\a \']";\n  squoted: "\\\\0 _\\\\a _\\\\a ";\n  squoted: "[\\\\0 _\\\\a _\\\\a ]";\n  squoted: "\\\\0 _\\\\a _\\\\a ";\n  squoted: "\\\\0 _\\\\a _\\\\a ";\n  squoted: "[\'\\\\0 _\\\\a _\\\\a \']";\n}\n',
  },
]
