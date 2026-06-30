// https://github.com/sass/sass-spec/blob/HEAD/spec/core_functions/color/is_powerless/lch.hrx

export default [
  {
    name: 'hue/positive_chroma/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(lch(50% 50% 0deg), "hue")}\n',
  },
  {
    name: 'hue/positive_chroma/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'hue/zero_chroma/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(lch(50% 0% 0deg), "hue")}\n',
  },
  {
    name: 'hue/zero_chroma/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hue/near_zero_chroma/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(lch(50% 0.000000000001% 0deg), "hue")}\n',
  },
  {
    name: 'hue/near_zero_chroma/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'hue/full_lightness/input.scss',
    data: '// These used to be considered powerless by the CSS spec, but are no longer, so\n// Sass shouldn\'t consdier it powerless either.\n@use "sass:color";\na {b: color.is-powerless(lch(100% 50% 0deg), "hue")}\n',
  },
  {
    name: 'hue/full_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'hue/zero_lightness/input.scss',
    data: '// These used to be considered powerless by the CSS spec, but are no longer, so\n// Sass shouldn\'t consdier it powerless either.\n@use "sass:color";\na {b: color.is-powerless(lch(0% 50% 0deg), "hue")}\n',
  },
  {
    name: 'hue/zero_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'chroma/README.md',
    data: "These used to be considered powerless by the CSS spec, but are no longer, so\nSass shouldn't consdier them powerless either.\n",
  },
  {
    name: 'chroma/full_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(lch(100% 0% 0deg), "chroma")}\n',
  },
  {
    name: 'chroma/full_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'chroma/zero_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(lch(0% 0% 0deg), "chroma")}\n',
  },
  {
    name: 'chroma/zero_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
