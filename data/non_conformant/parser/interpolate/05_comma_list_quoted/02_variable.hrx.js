export default [
  {
    name: 'input.scss',
    data: '$input: "alpha", \'beta\';\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: "alpha", "beta";\n  output: alpha, beta;\n  output: "[alpha, beta]";\n  output: "alpha, beta";\n  output: "alpha, beta";\n  output: "[\'alpha, beta\']";\n}\n',
  },
]
