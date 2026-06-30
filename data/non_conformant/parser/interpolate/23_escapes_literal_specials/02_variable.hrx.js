export default [
  {
    name: 'input.scss',
    data: '$input: \\0_\\a_\\A;\n.result {\n  output: $input;\n  output: #{$input};\n  output: "[#{$input}]";\n  output: "#{$input}";\n  output: \'#{$input}\';\n  output: "[\'#{$input}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.result {\n  output: \\0 _\\a _\\a ;\n  output: \\0 _\\a _\\a ;\n  output: "[\\\\0 _\\\\a _\\\\a ]";\n  output: "\\\\0 _\\\\a _\\\\a ";\n  output: "\\\\0 _\\\\a _\\\\a ";\n  output: "[\'\\\\0 _\\\\a _\\\\a \']";\n}\n',
  },
]
