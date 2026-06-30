export default [
  {
    name: 'input.scss',
    data: '$media1: screen;\n$media2: print;\n$var: -webkit-min-device-pixel-ratio;\n$val: 20;\n@media #{$media1} and ($var: $val), only #{$media2} {a {b: c}}\n',
  },
  {
    name: 'output.css',
    data: '@media screen and (-webkit-min-device-pixel-ratio: 20), only print {\n  a {\n    b: c;\n  }\n}\n',
  },
]
