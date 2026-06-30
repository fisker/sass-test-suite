// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/parser/interpolate/32_comma_list/04_variable_double.hrx

export default [
  {
    name: 'input.scss',
    data: '$input: "["\',foo,   \'"]";\n.result {\n  output: #{#{$input}};\n  output: #{"[#{$input}]"};\n  output: #{"#{$input}"};\n  output: #{\'#{$input}\'};\n  output: #{"[\'#{$input}\']"};\n}\n',
  },
  {
    name: 'output.css',
    data: ".result {\n  output: [ ,foo,    ];\n  output: [[ ,foo,    ]];\n  output: [ ,foo,    ];\n  output: [ ,foo,    ];\n  output: ['[ ,foo,    ]'];\n}\n",
  },
]
