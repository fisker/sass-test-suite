// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/to_gamut/lch.hrx

export default [
  {
    name: 'clip/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(lch(50% 200% 70deg), $lightness: 150%),\n    $method: clip\n  );\n}\n',
  },
  {
    name: 'clip/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 3.9677504831 2.839747694 -0.024493753) 100%, black);\n}\n',
  },
  {
    name: 'local_minde/input.scss',
    data: '@use "sass:color";\na {\n  b: color.to-gamut(\n    color.change(lch(50% 200% 70deg), $lightness: 150%),\n    $method: local-minde\n  );\n}\n',
  },
  {
    name: 'local_minde/output.css',
    data: 'a {\n  b: color-mix(in lch, color(xyz 3.9677504831 2.839747694 -0.024493753) 100%, black);\n}\n',
  },
]
