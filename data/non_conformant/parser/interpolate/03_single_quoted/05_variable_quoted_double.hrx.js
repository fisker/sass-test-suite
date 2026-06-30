// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/03_single_quoted/05_variable_quoted_double.hrx

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
