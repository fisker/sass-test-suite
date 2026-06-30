// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/02_double_quoted/05_variable_quoted_double.hrx

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
