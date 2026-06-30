export default [
  {
    name: 'input.scss',
    data: '$input: \\\\;\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: \\\\;\n  output: [\\\\];\n  output: \\\\;\n  output: \\\\;\n  output: ['\\\\'];\n}\n",
  },
]
