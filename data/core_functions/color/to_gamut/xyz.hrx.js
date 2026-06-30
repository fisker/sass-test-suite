export default [
  {
    name: 'clip/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(xyz 123 -456 999999), $method: clip)}\n',
  },
  {
    name: 'clip/output.css',
    data: 'a {\n  b: color(xyz 123 -456 999999);\n}\n',
  },
  {
    name: 'local_minde/input.scss',
    data: '@use "sass:color";\na {b: color.to-gamut(color(xyz 123 -456 999999), $method: local-minde)}\n',
  },
  {
    name: 'local_minde/output.css',
    data: 'a {\n  b: color(xyz 123 -456 999999);\n}\n',
  },
]
