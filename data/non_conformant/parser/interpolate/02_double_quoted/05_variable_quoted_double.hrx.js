export default [
  {
    name: 'input.scss',
    data: '$input: "dquoted";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "dquoted";\n  dquoted: "[dquoted]";\n  dquoted: "dquoted";\n  dquoted: "dquoted";\n  dquoted: "[\'dquoted\']";\n  squoted: "dquoted";\n  squoted: "[dquoted]";\n  squoted: "dquoted";\n  squoted: "dquoted";\n  squoted: "[\'dquoted\']";\n}\n',
  },
]
