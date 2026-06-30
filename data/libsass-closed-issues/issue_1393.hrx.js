export default [
  {
    name: 'input.scss',
    data: 'div {\n  back#{ground}: {\n    imag#{e}: url(foo.png);\n    pos#{it}ion: 50%;\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: 'div {\n  background-image: url(foo.png);\n  background-position: 50%;\n}\n',
  },
]
