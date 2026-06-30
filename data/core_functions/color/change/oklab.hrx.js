export default [
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $lightness: 0.3)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: oklab(30% 0.2 -0.3);\n}\n',
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $lightness: 30%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: oklab(30% 0.2 -0.3);\n}\n',
  },
  {
    name: 'lightness/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $lightness: 1.2)}\n',
  },
  {
    name: 'lightness/out_of_range/output.css',
    data: 'a {\n  b: color-mix(in oklab, color(xyz 2.3267922825 1.5626810145 5.2743251916) 100%, black);\n}\n',
  },
  {
    name: 'lightness/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $lightness: none)}\n',
  },
  {
    name: 'lightness/none/output.css',
    data: 'a {\n  b: oklab(none 0.2 -0.3);\n}\n',
  },
  {
    name: 'a/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $a: 0.1)}\n',
  },
  {
    name: 'a/unitless/output.css',
    data: 'a {\n  b: oklab(50% 0.1 -0.3);\n}\n',
  },
  {
    name: 'a/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $a: -40%)}\n',
  },
  {
    name: 'a/percent/output.css',
    data: 'a {\n  b: oklab(50% -0.16 -0.3);\n}\n',
  },
  {
    name: 'a/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $a: 1)}\n',
  },
  {
    name: 'a/out_of_range/output.css',
    data: 'a {\n  b: oklab(50% 1 -0.3);\n}\n',
  },
  {
    name: 'a/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $a: none)}\n',
  },
  {
    name: 'a/none/output.css',
    data: 'a {\n  b: oklab(50% none -0.3);\n}\n',
  },
  {
    name: 'b/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $b: 0.4)}\n',
  },
  {
    name: 'b/unitless/output.css',
    data: 'a {\n  b: oklab(50% 0.2 0.4);\n}\n',
  },
  {
    name: 'b/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $b: -40%)}\n',
  },
  {
    name: 'b/percent/output.css',
    data: 'a {\n  b: oklab(50% 0.2 -0.16);\n}\n',
  },
  {
    name: 'b/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $b: -1)}\n',
  },
  {
    name: 'b/out_of_range/output.css',
    data: 'a {\n  b: oklab(50% 0.2 -1);\n}\n',
  },
  {
    name: 'b/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $b: none)}\n',
  },
  {
    name: 'b/none/output.css',
    data: 'a {\n  b: oklab(50% 0.2 none);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $lightness: 20%, $a: -0.3, $b: 0.4)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: oklab(20% -0.3 0.4);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3 / 0.9), $lightness: 30%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: oklab(30% 0.2 -0.3 / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(oklab(50% 0.2 -0.3), $lightness: 30%, $alpha: 0.9)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: oklab(30% 0.2 -0.3 / 0.9);\n}\n',
  },
]
