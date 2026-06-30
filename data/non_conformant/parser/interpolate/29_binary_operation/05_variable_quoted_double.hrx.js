export default [
  {
    name: 'input.scss',
    data: '$input: "foo#{\'ba\' + \'r\'}baz";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "foobarbaz";\n  dquoted: "[foobarbaz]";\n  dquoted: "foobarbaz";\n  dquoted: "foobarbaz";\n  dquoted: "[\'foobarbaz\']";\n  squoted: "foobarbaz";\n  squoted: "[foobarbaz]";\n  squoted: "foobarbaz";\n  squoted: "foobarbaz";\n  squoted: "[\'foobarbaz\']";\n}\n',
  },
]
