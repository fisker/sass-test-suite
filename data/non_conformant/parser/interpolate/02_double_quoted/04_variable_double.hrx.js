export default [
  {
    name: 'input.scss',
    data: '$input: "dquoted";\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: dquoted;\n  output: [dquoted];\n  output: dquoted;\n  output: dquoted;\n  output: ['dquoted'];\n}\n",
  },
]
