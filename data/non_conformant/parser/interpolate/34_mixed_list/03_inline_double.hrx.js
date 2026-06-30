export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: #{#{"["\',foo   ,   \'"]"    "bar"}};\n  output: #{"[#{"["\',foo   ,   \'"]"    "bar"}]"};\n  output: #{"#{"["\',foo   ,   \'"]"    "bar"}"};\n  output: #{\'#{"["\',foo   ,   \'"]"    "bar"}\'};\n  output: #{"[\'#{"["\',foo   ,   \'"]"    "bar"}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: [ ,foo   ,    ] bar;\n  output: [[ ,foo   ,    ] bar];\n  output: [ ,foo   ,    ] bar;\n  output: [ ,foo   ,    ] bar;\n  output: ['[ ,foo   ,    ] bar'];\n}\n",
  },
]
