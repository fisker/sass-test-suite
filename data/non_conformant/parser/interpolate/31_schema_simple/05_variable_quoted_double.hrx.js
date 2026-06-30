export default [
  {
    name: 'input.scss',
    data: '$input: "["\'foo\'"]";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "[ foo ]";\n  dquoted: "[[ foo ]]";\n  dquoted: "[ foo ]";\n  dquoted: "[ foo ]";\n  dquoted: "[\'[ foo ]\']";\n  squoted: "[ foo ]";\n  squoted: "[[ foo ]]";\n  squoted: "[ foo ]";\n  squoted: "[ foo ]";\n  squoted: "[\'[ foo ]\']";\n}\n',
  },
]
