export default [
  {
    name: 'input.scss',
    data: '$input: gamme "\'"delta"\'";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  dquoted: \"gamme ' delta '\";\n  dquoted: \"[gamme ' delta ']\";\n  dquoted: \"gamme ' delta '\";\n  dquoted: \"gamme ' delta '\";\n  dquoted: \"['gamme ' delta '']\";\n  squoted: \"gamme ' delta '\";\n  squoted: \"[gamme ' delta ']\";\n  squoted: \"gamme ' delta '\";\n  squoted: \"gamme ' delta '\";\n  squoted: \"['gamme ' delta '']\";\n}\n",
  },
]
