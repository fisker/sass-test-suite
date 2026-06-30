export default [
  {
    name: 'README.md',
    data: "These used to be considered powerless by the CSS spec, but are no longer, so\nSass shouldn't consdier them powerless either.\n",
  },
  {
    name: 'a/full_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(oklab(100% 0 0), "a")}\n',
  },
  {
    name: 'a/full_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'a/zero_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(oklab(0% 0 0), "a")}\n',
  },
  {
    name: 'a/zero_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'b/full_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(oklab(100% 0 0), "b")}\n',
  },
  {
    name: 'b/full_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'b/zero_lightness/input.scss',
    data: '@use "sass:color";\na {b: color.is-powerless(oklab(0% 0 0), "b")}\n',
  },
  {
    name: 'b/zero_lightness/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
