// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/01_literal/05_variable_quoted_double.hrx

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
