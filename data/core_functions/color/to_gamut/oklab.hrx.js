export default [
  {
    name: 'clip/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(oklab(50% 500 -999999), $lightness: 150%),\n    $method: clip\n  );\n}\n',
  },
  {
    name: 'clip/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz 593644542057412224 -153762246556647904 3418717351297831936) 100%, black);\n}\n',
  },
  {
    name: 'local_minde/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(oklab(50% 500 -999999), $lightness: 150%),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz 593644542057412224 -153762246556647904 3418717351297831936) 100%, black);\n}\n',
  },
]
