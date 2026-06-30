export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: #{#{\\0_\\a_\\A}};\n  output: #{"[#{\\0_\\a_\\A}]"};\n  output: #{"#{\\0_\\a_\\A}"};\n  output: #{\'#{\\0_\\a_\\A}\'};\n  output: #{"[\'#{\\0_\\a_\\A}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: \\0 _\\a _\\a ;\n  output: [\\0 _\\a _\\a ];\n  output: \\0 _\\a _\\a ;\n  output: \\0 _\\a _\\a ;\n  output: ['\\0 _\\a _\\a '];\n}\n",
  },
]
