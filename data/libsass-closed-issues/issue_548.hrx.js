export default [
  {
    name: 'input.scss',
    data: '.parent-sel-value {\n  font-family: &;\n  .parent-sel-interpolation {\n    font-family: #{&};\n     .parent-sel-value-concat {\n        font-family: "Current parent: " + &;\n     }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.parent-sel-value {\n  font-family: .parent-sel-value;\n}\n.parent-sel-value .parent-sel-interpolation {\n  font-family: .parent-sel-value .parent-sel-interpolation;\n}\n.parent-sel-value .parent-sel-interpolation .parent-sel-value-concat {\n  font-family: "Current parent: .parent-sel-value .parent-sel-interpolation .parent-sel-value-concat";\n}\n',
  },
]
