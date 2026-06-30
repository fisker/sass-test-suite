export default [
  {
    name: 'hue/positive_saturation/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hsl(0deg 50% 50%), "hue")}\n',
  },
  {
    name: 'hue/positive_saturation/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'hue/zero_saturation/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hsl(0deg 0% 50%), "hue")}\n',
  },
  {
    name: 'hue/zero_saturation/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hue/near_zero_saturation/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hsl(0deg 0.000000000001% 50%), "hue")}\n',
  },
  {
    name: 'hue/near_zero_saturation/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hue/full_lightness/input.scss',
    data: '// These used to be considered powerless by the CSS spec, but are no longer, so\n// Sass shouldn\'t consdier it powerless either.\n@use "sass:color";\na {b: color.is-powerless(hsl(0deg 50% 100%), "hue")}\n',
  },
  {
    name: 'hue/full_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'hue/zero_lightness/input.scss',
    data: '// These used to be considered powerless by the CSS spec, but are no longer, so\n// Sass shouldn\'t consdier it powerless either.\n@use "sass:color";\na {b: color.is-powerless(hsl(0deg 50% 0%), "hue")}\n',
  },
  {
    name: 'hue/zero_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'saturation/README.md',
    data: "These used to be considered powerless by the CSS spec, but are no longer, so\nSass shouldn't consdier them powerless either.\n",
  },
  {
    name: 'saturation/full_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hsl(0deg 0% 100%), "saturation")}\n',
  },
  {
    name: 'saturation/full_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'saturation/zero_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(hsl(0deg 0% 0%), "saturation")}\n',
  },
  {
    name: 'saturation/zero_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
