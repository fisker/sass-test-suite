export default [
  {
    name: 'input.scss',
    data: '$input: \'\\\'\';\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "\'";\n  dquoted: "[\']";\n  dquoted: "\'";\n  dquoted: "\'";\n  dquoted: "[\'\'\']";\n  squoted: "\'";\n  squoted: "[\']";\n  squoted: "\'";\n  squoted: "\'";\n  squoted: "[\'\'\']";\n}\n',
  },
]
