// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/34_mixed_list/04_variable_double.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "["\',foo   ,   \'"]"    "bar";\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: [ ,foo   ,    ] bar;\n  output: [[ ,foo   ,    ] bar];\n  output: [ ,foo   ,    ] bar;\n  output: [ ,foo   ,    ] bar;\n  output: ['[ ,foo   ,    ] bar'];\n}\n",
  },
]
