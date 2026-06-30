export default [
  {
    name: 'input.scss',
    data: '$input: gamma, "\'"delta"\'";\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  dquoted: \"gamma, ' delta '\";\n  dquoted: \"[gamma, ' delta ']\";\n  dquoted: \"gamma, ' delta '\";\n  dquoted: \"gamma, ' delta '\";\n  dquoted: \"['gamma, ' delta '']\";\n  squoted: \"gamma, ' delta '\";\n  squoted: \"[gamma, ' delta ']\";\n  squoted: \"gamma, ' delta '\";\n  squoted: \"gamma, ' delta '\";\n  squoted: \"['gamma, ' delta '']\";\n}\n",
  },
]
