// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/oklch.hrx

export default [
  {
    name: 'clip/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(oklch(50% 200% 70deg), $lightness: 150%),\n    $method: clip\n  );\n}\n',
  },
  {
    name: 'clip/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz 5.2395754279 2.9713210325 -1.434870444) 100%, black);\n}\n',
  },
  {
    name: 'local_minde/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(oklch(50% 200% 70deg), $lightness: 150%),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/output.css',
    data: 'a {\n  b: color-mix(in oklch, color(xyz 5.2395754279 2.9713210325 -1.434870444) 100%, black);\n}\n',
  },
]
