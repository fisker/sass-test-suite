export default [
  {
    name: 'input.scss',
    data: '$input: "["\'foo   \'"]"    "bar";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "[ foo    ] bar";\n  dquoted: "[[ foo    ] bar]";\n  dquoted: "[ foo    ] bar";\n  dquoted: "[ foo    ] bar";\n  dquoted: "[\'[ foo    ] bar\']";\n  squoted: "[ foo    ] bar";\n  squoted: "[[ foo    ] bar]";\n  squoted: "[ foo    ] bar";\n  squoted: "[ foo    ] bar";\n  squoted: "[\'[ foo    ] bar\']";\n}\n',
  },
]
