export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: #{#{gamme "\'"delta"\'"}};\n  output: #{"[#{gamme "\'"delta"\'"}]"};\n  output: #{"#{gamme "\'"delta"\'"}"};\n  output: #{\'#{gamme "\'"delta"\'"}\'};\n  output: #{"[\'#{gamme "\'"delta"\'"}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: gamme ' delta ';\n  output: [gamme ' delta '];\n  output: gamme ' delta ';\n  output: gamme ' delta ';\n  output: ['gamme ' delta ''];\n}\n",
  },
]
