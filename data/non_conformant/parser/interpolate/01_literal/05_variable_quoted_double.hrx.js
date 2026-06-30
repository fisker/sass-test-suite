export default [
  {
    name: 'input.scss',
    data: '$input: literal;\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "literal";\n  dquoted: "[literal]";\n  dquoted: "literal";\n  dquoted: "literal";\n  dquoted: "[\'literal\']";\n  squoted: "literal";\n  squoted: "[literal]";\n  squoted: "literal";\n  squoted: "literal";\n  squoted: "[\'literal\']";\n}\n',
  },
]
