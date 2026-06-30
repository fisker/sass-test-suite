export default [
  {
    name: 'clip/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(#abcdef, $method: clip)}\n',
  },
  {
    name: 'clip/in_gamut/output.css',
    data: 'a {\n  b: #abcdef;\n}\n',
  },
  {
    name: 'clip/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color.change(#abcdef, $red: 300), $method: clip)}\n',
  },
  {
    name: 'clip/out_of_gamut/output.css',
    data: 'a {\n  b: #ffcdef;\n}\n',
  },
  {
    name: 'local_minde/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(#abcdef, $method: local-minde)}\n',
  },
  {
    name: 'local_minde/in_gamut/output.css',
    data: 'a {\n  b: #abcdef;\n}\n',
  },
  {
    name: 'local_minde/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color.change(#abcdef, $red: 300), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/out_of_gamut/output.css',
    data: 'a {\n  b: rgb(255, 222.6637650714, 237.9231048356);\n}\n',
  },
  {
    name: 'local_minde/to_white/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(#e6ff00, $green: 280, $blue: -25),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/to_white/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'local_minde/to_black/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(black, $red: -5, $green: -5),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/to_black/output.css',
    data: 'a {\n  b: black;\n}\n',
  },
]
