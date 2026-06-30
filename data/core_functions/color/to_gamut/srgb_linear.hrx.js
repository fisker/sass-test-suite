// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/srgb_linear.hrx

export default [
  {
    name: 'clip/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb-linear 0.2 0.5 0.8), $method: clip)}\n',
  },
  {
    name: 'clip/in_gamut/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.5 0.8);\n}\n',
  },
  {
    name: 'clip/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb-linear 1.5 0.5 0.8), $method: clip)}\n',
  },
  {
    name: 'clip/out_of_gamut/output.css',
    data: 'a {\n  b: color(srgb-linear 1 0.5 0.8);\n}\n',
  },
  {
    name: 'local_minde/in_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb-linear 0.2 0.5 0.8), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/in_gamut/output.css',
    data: 'a {\n  b: color(srgb-linear 0.2 0.5 0.8);\n}\n',
  },
  {
    name: 'local_minde/out_of_gamut/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb-linear 1.5 0.5 0.8), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/out_of_gamut/output.css',
    data: 'a {\n  b: color(srgb-linear 1 0.6455185573 0.7900912017);\n}\n',
  },
  {
    name: 'local_minde/to_white/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb-linear 0.9 1.2 1.6), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_white/output.css',
    data: 'a {\n  b: color(srgb-linear 1 1 1);\n}\n',
  },
  {
    name: 'local_minde/to_black/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(srgb-linear 0 -0.05 -0.05), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/to_black/output.css',
    data: 'a {\n  b: color(srgb-linear 0 0 0);\n}\n',
  },
]
