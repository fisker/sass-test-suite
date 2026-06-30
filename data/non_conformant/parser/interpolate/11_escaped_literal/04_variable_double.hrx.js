export default [
  {
    name: 'input.scss',
    data: '$input: l\\\\ite\\ral;\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: l\\\\iteral;\n  output: [l\\\\iteral];\n  output: l\\\\iteral;\n  output: l\\\\iteral;\n  output: ['l\\\\iteral'];\n}\n",
  },
]
