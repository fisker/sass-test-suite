export default [
  {
    name: 'input.scss',
    data: '$input: "alpha", \'beta\';\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "alpha, beta";\n  dquoted: "[alpha, beta]";\n  dquoted: "alpha, beta";\n  dquoted: "alpha, beta";\n  dquoted: "[\'alpha, beta\']";\n  squoted: "alpha, beta";\n  squoted: "[alpha, beta]";\n  squoted: "alpha, beta";\n  squoted: "alpha, beta";\n  squoted: "[\'alpha, beta\']";\n}\n',
  },
]
