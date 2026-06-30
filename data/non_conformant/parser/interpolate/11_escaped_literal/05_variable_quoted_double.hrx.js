export default [
  {
    name: 'input.scss',
    data: '$input: l\\\\ite\\ral;\n.result {\n  dquoted: "#{#{$input}}";\n  dquoted: "#{"[#{$input}]"}";\n  dquoted: "#{"#{$input}"}";\n  dquoted: "#{\'#{$input}\'}";\n  dquoted: "#{"[\'#{$input}\']"}";\n  squoted: \'#{#{$input}}\';\n  squoted: \'#{"[#{$input}]"}\';\n  squoted: \'#{"#{$input}"}\';\n  squoted: \'#{\'#{$input}\'}\';\n  squoted: \'#{"[\'#{$input}\']"}\';\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  dquoted: "l\\\\\\\\iteral";\n  dquoted: "[l\\\\\\\\iteral]";\n  dquoted: "l\\\\\\\\iteral";\n  dquoted: "l\\\\\\\\iteral";\n  dquoted: "[\'l\\\\\\\\iteral\']";\n  squoted: "l\\\\\\\\iteral";\n  squoted: "[l\\\\\\\\iteral]";\n  squoted: "l\\\\\\\\iteral";\n  squoted: "l\\\\\\\\iteral";\n  squoted: "[\'l\\\\\\\\iteral\']";\n}\n',
  },
]
