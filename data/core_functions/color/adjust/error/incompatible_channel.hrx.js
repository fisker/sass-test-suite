export default [
  {
    name: 'legacy_space/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(red, $chroma: 50%)}\n',
  },
  {
    name: 'legacy_space/error',
    data: "Error: $chroma: Color space rgb doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(red, $chroma: 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'legacy_channel/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(srgb 0.2 0.5 0.7), $whiteness: 50%)}\n',
  },
  {
    name: 'legacy_channel/error',
    data: "Error: $whiteness: Color space srgb doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(color(srgb 0.2 0.5 0.7), $whiteness: 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
  {
    name: 'modern_both/input.scss',
    data: '@use "sass:color";\na {b: color.adjust(color(srgb 0.2 0.5 0.7), $chroma: 50%)}\n',
  },
  {
    name: 'modern_both/error',
    data: "Error: $chroma: Color space srgb doesn't have a channel with this name.\n  ,\n2 | a {b: color.adjust(color(srgb 0.2 0.5 0.7), $chroma: 50%)}\n  |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^\n  '\n  input.scss 2:7  root stylesheet\n",
  },
]
