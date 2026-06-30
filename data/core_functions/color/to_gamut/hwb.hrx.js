export default [
  {
    name: 'clip/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hwb(70deg 30% 30%), $method: clip)}\n',
  },
  {
    name: 'clip/in_gamut/output.css',
    data: 'a {\n  b: hsl(70, 40%, 50%);\n}\n',
  },
  {
    name: 'clip/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hwb(70deg 200% -50%), $method: clip)}\n',
  },
  {
    name: 'clip/out_of_gamut/output.css',
    data: 'a {\n  b: white;\n}\n',
  },
  {
    name: 'local_minde/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hwb(70deg 30% 30%), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/in_gamut/output.css',
    data: 'a {\n  b: hsl(70, 40%, 50%);\n}\n',
  },
  {
    name: 'local_minde/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hwb(70deg -5% -5%), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/out_of_gamut/output.css',
    data: 'a {\n  b: hsl(75.715745279, 100%, 75.8982967878%);\n}\n',
  },
  {
    name: 'local_minde/to_white/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hwb(70deg -10% -10%), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_white/output.css',
    data: 'a {\n  b: hwb(none 100% 0%);\n}\n',
  },
  {
    name: 'local_minde/to_black/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(hwb(70deg -2% 100%), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_black/output.css',
    data: 'a {\n  b: hwb(none 0% 100%);\n}\n',
  },
]
