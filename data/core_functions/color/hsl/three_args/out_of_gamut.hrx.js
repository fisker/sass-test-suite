export default [
  {
    name: 'saturation/above/input.scss',
    data: 'a {b: hsl(0, 500%, 50%)}\n',
  },
  {
    name: 'saturation/above/output.css',
    data: 'a {\n  b: hsl(0, 500%, 50%);\n}\n',
  },
  {
    name: 'saturation/above/output-libsass.css',
    data: 'a {\n  b: red;\n}\n',
  },
]
