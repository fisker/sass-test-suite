export default [
  {
    name: 'hue/not_greyscale/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hwb(0deg 30% 40%), "hue")}\n',
  },
  {
    name: 'hue/not_greyscale/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'hue/full_whiteness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hwb(0deg 100% 0%), "hue")}\n',
  },
  {
    name: 'hue/full_whiteness/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hue/full_blackness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hwb(0deg 0% 100%), "hue")}\n',
  },
  {
    name: 'hue/full_blackness/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hue/grey/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hwb(0deg 40% 60%), "hue")}\n',
  },
  {
    name: 'hue/grey/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hue/normalized_grey/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hwb(0deg 60% 80%), "hue")}\n',
  },
  {
    name: 'hue/normalized_grey/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hue/out_of_gamut/colorful/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hwb(0deg -30% 50%), "hue")}\n',
  },
  {
    name: 'hue/out_of_gamut/colorful/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'hue/out_of_gamut/grey/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hwb(0deg -30% 130%), "hue")}\n',
  },
  {
    name: 'hue/out_of_gamut/grey/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
]
