// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/hsl.hrx

export default [
  {
    name: 'clip/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hsl(70deg 50% 50%), $method: clip)}\n',
  },
  {
    name: 'clip/in_gamut/output.css',
    data: 'a {\n  b: hsl(70, 50%, 50%);\n}\n',
  },
  {
    name: 'clip/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(hsl(70deg 50% 50%), $saturation: 200%),\n    $method: clip\n  );\n}\n',
  },
  {
    name: 'clip/out_of_gamut/output.css',
    data: 'a {\n  b: hsl(70, 100%, 50%);\n}\n',
  },
  {
    name: 'local_minde/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hsl(70deg 50% 50%), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/in_gamut/output.css',
    data: 'a {\n  b: hsl(70, 50%, 50%);\n}\n',
  },
  {
    name: 'local_minde/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(hsl(70deg 50% 50%), $saturation: 107%),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/out_of_gamut/output.css',
    data: 'a {\n  b: hsl(73.5850769516, 100%, 67.4750278515%);\n}\n',
  },
  {
    name: 'local_minde/to_white/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(hsl(70deg 50% 50%), $saturation: 120%),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/to_white/output.css',
    data: 'a {\n  b: hsl(none 0% 100%);\n}\n',
  },
  {
    name: 'local_minde/to_black/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(hsl(70deg 100% 50%), $lightness: -1%),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/to_black/output.css',
    data: 'a {\n  b: hsl(none 0% 0%);\n}\n',
  },
]
