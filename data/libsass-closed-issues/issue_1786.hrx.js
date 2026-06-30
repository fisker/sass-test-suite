export default [
  {
    name: 'input.scss',
    data: '$input: "\\0_\\a_\\A";\n\ntest {\n    bug1: "#{"_\\a" + b}";\n    bug2: "#{a $input}";\n}\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\ntest {\n  bug1: "_\\a b";\n  bug2: "a �_ _ ";\n}\n',
  },
]
