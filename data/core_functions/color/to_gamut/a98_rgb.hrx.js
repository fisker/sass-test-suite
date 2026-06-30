// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/a98_rgb.hrx

export default [
  {
    name: 'clip/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(a98-rgb 0.2 0.5 0.8), $method: clip)}\n',
  },
  {
    name: 'clip/in_gamut/output.css',
    data: 'a {\n  b: color(a98-rgb 0.2 0.5 0.8);\n}\n',
  },
  {
    name: 'clip/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(a98-rgb 1.5 0.5 0.8), $method: clip)}\n',
  },
  {
    name: 'clip/out_of_gamut/output.css',
    data: 'a {\n  b: color(a98-rgb 1 0.5 0.8);\n}\n',
  },
  {
    name: 'local_minde/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(a98-rgb 0.2 0.5 0.8), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/in_gamut/output.css',
    data: 'a {\n  b: color(a98-rgb 0.2 0.5 0.8);\n}\n',
  },
  {
    name: 'local_minde/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(a98-rgb 1.1 0.5 0.8), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/out_of_gamut/output.css',
    data: 'a {\n  b: color(a98-rgb 1 0.5850609644 0.8001989651);\n}\n',
  },
  {
    name: 'local_minde/to_white/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(a98-rgb 0.8 1.1 1.4), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_white/output.css',
    data: 'a {\n  b: color(a98-rgb 1 1 1);\n}\n',
  },
  {
    name: 'local_minde/to_black/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(a98-rgb 0 -0.05 -0.05), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_black/output.css',
    data: 'a {\n  b: color(a98-rgb 0 0 0);\n}\n',
  },
]
