export default [
  {
    name: 'input.scss',
    data: "$breakpoint: 'tablet';\n\n.-#{$breakpoint} {\n  color: #FFF;\n}",
  },
  {
    name: 'output.css',
    data: '.-tablet {\n  color: #FFF;\n}\n',
  },
]
