// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/basic/21_one_builtin_function.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  color: rgb(255, $blue: 0, $green: 255);\n  background: rgb(123, 45, 6);\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  color: rgb(255, 255, 0);\n  background: rgb(123, 45, 6);\n}\n',
  },
]
