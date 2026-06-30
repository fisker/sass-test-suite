// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/30_base_test/05_variable_quoted_double.hrx

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
