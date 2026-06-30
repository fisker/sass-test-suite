export default [
  {
    name: 'input.scss',
    data: '$input: \'squoted\';\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: squoted;\n  output: [squoted];\n  output: squoted;\n  output: squoted;\n  output: ['squoted'];\n}\n",
  },
]
