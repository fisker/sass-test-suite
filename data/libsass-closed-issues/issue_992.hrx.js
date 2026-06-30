export default [
  {
    name: 'input.scss',
    data: "$color: 'red';\n\n.-text-#{$color}- {\n  color: $color;\n}",
  },
  {
    name: 'output.css',
    data: '.-text-red- {\n  color: "red";\n}\n',
  },
]
