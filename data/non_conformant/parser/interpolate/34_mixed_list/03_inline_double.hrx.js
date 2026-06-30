// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/34_mixed_list/03_inline_double.hrx

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
