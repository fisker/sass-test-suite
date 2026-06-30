export default [
  {
    name: 'input.scss',
    data: '$input: \'squoted\';\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "squoted";\n  dquoted: "[squoted]";\n  dquoted: "squoted";\n  dquoted: "squoted";\n  dquoted: "[\'squoted\']";\n  squoted: "squoted";\n  squoted: "[squoted]";\n  squoted: "squoted";\n  squoted: "squoted";\n  squoted: "[\'squoted\']";\n}\n',
  },
]
