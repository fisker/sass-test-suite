// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/34_mixed_list/05_variable_quoted_double.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "["\',foo   ,   \'"]"    "bar";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "[ ,foo   ,    ] bar";\n  dquoted: "[[ ,foo   ,    ] bar]";\n  dquoted: "[ ,foo   ,    ] bar";\n  dquoted: "[ ,foo   ,    ] bar";\n  dquoted: "[\'[ ,foo   ,    ] bar\']";\n  squoted: "[ ,foo   ,    ] bar";\n  squoted: "[[ ,foo   ,    ] bar]";\n  squoted: "[ ,foo   ,    ] bar";\n  squoted: "[ ,foo   ,    ] bar";\n  squoted: "[\'[ ,foo   ,    ] bar\']";\n}\n',
  },
]
