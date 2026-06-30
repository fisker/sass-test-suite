// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/lab.hrx

export default [
  {
    name: 'clip/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(lab(50% 500 -999999), $lightness: 150%),\n    $method: clip\n  );\n}\n',
  },
  {
    name: 'clip/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 6530020637.921538 2172031124.122868 137328815479.04425) 100%, black);\n}\n',
  },
  {
    name: 'local_minde/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(lab(50% 500 -999999), $lightness: 150%),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 6530020637.921538 2172031124.122868 137328815479.04425) 100%, black);\n}\n',
  },
]
