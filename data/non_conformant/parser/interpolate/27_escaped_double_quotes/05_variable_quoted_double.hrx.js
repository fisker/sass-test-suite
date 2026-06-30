// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/27_escaped_double_quotes/05_variable_quoted_double.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "\\"";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  dquoted: '\"';\n  dquoted: '[\"]';\n  dquoted: '\"';\n  dquoted: '\"';\n  dquoted: \"['\\\"']\";\n  squoted: '\"';\n  squoted: '[\"]';\n  squoted: '\"';\n  squoted: '\"';\n  squoted: \"['\\\"']\";\n}\n",
  },
]
