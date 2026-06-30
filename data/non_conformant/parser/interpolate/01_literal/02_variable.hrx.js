export default [
  {
    name: 'input.scss',
    data: '$input: literal;\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: literal;\n  output: literal;\n  output: "[literal]";\n  output: "literal";\n  output: "literal";\n  output: "[\'literal\']";\n}\n',
  },
]
