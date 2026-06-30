// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/numbers.hrx

export default [
  {
    name: 'input.scss',
    data: 'div {\n  width: 10px;\n  height: 20%;\n  blah: 12;\n  color: #abc;\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  width: 10px;\n  height: 20%;\n  blah: 12;\n  color: #abc;\n}\n',
  },
]
