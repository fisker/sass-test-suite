// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/xyz_d50.hrx

export default [
  {
    name: 'clip/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(xyz-d50 123 -456 999999), $method: clip)}\n',
  },
  {
    name: 'clip/output.css',
    data: 'a {\n  b: color(xyz-d50 123 -456 999999);\n}\n',
  },
  {
    name: 'local_minde/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(xyz-d50 123 -456 999999), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/output.css',
    data: 'a {\n  b: color(xyz-d50 123 -456 999999);\n}\n',
  },
]
