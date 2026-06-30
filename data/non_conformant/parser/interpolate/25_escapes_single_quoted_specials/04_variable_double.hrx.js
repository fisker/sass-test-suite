export default [
  {
    name: 'input.scss',
    data: '$input: \'\\0_\\a_\\A\';\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n.result {\n  output: �_ _ ;\n  output: [�_ _ ];\n  output: �_ _ ;\n  output: �_ _ ;\n  output: [\'�_ _ \'];\n}\n',
  },
]
