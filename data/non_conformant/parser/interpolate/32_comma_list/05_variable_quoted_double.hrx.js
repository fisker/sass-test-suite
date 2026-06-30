// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/32_comma_list/05_variable_quoted_double.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "["\',foo,   \'"]";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "[ ,foo,    ]";\n  dquoted: "[[ ,foo,    ]]";\n  dquoted: "[ ,foo,    ]";\n  dquoted: "[ ,foo,    ]";\n  dquoted: "[\'[ ,foo,    ]\']";\n  squoted: "[ ,foo,    ]";\n  squoted: "[[ ,foo,    ]]";\n  squoted: "[ ,foo,    ]";\n  squoted: "[ ,foo,    ]";\n  squoted: "[\'[ ,foo,    ]\']";\n}\n',
  },
]
