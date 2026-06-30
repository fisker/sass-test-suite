export default [
  {
    name: 'input.scss',
    data: '$input: "["\',foo,   \'"]";\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "[" ",foo,   " "]";\n  output: [ ,foo,    ];\n  output: "[[ ,foo,    ]]";\n  output: "[ ,foo,    ]";\n  output: "[ ,foo,    ]";\n  output: "[\'[ ,foo,    ]\']";\n}\n',
  },
]
