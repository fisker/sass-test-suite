export default [
  {
    name: 'input.scss',
    data: '@use "sass:math";\ndiv {\n  blah: "hello #{2+2} world #{math.unit(23px)} #{\'bloo\\n\'} blah";\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  blah: "hello 4 world px bloon blah";\n}\n',
  },
]
