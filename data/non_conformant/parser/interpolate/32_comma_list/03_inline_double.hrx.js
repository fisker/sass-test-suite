export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: #{#{"["\',foo,   \'"]"}};\n  output: #{"[#{"["\',foo,   \'"]"}]"};\n  output: #{"#{"["\',foo,   \'"]"}"};\n  output: #{\'#{"["\',foo,   \'"]"}\'};\n  output: #{"[\'#{"["\',foo,   \'"]"}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: [ ,foo,    ];\n  output: [[ ,foo,    ]];\n  output: [ ,foo,    ];\n  output: [ ,foo,    ];\n  output: ['[ ,foo,    ]'];\n}\n",
  },
]
