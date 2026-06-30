export default [
  {
    name: 'clip/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb 0.2 0.5 0.8), $method: clip)}\n',
  },
  {
    name: 'clip/in_gamut/output.css',
    data: 'a {\n  b: color(srgb 0.2 0.5 0.8);\n}\n',
  },
  {
    name: 'clip/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb 1.5 0.5 0.8), $method: clip)}\n',
  },
  {
    name: 'clip/out_of_gamut/output.css',
    data: 'a {\n  b: color(srgb 1 0.5 0.8);\n}\n',
  },
  {
    name: 'local_minde/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb 0.2 0.5 0.8), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/in_gamut/output.css',
    data: 'a {\n  b: color(srgb 0.2 0.5 0.8);\n}\n',
  },
  {
    name: 'local_minde/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb 1.5 0.5 0.8), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/out_of_gamut/output.css',
    data: 'a {\n  b: color(srgb 1 0.8660162083 0.8987033424);\n}\n',
  },
  {
    name: 'local_minde/to_white/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb 0.9 1.1 -0.1), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_white/output.css',
    data: 'a {\n  b: color(srgb 1 1 1);\n}\n',
  },
  {
    name: 'local_minde/to_black/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb 0 -0.05 -0.05), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_black/output.css',
    data: 'a {\n  b: color(srgb 0 0 0);\n}\n',
  },
]
