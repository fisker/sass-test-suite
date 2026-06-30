export default [
  {
    name: 'lightness/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $lightness: 30)}\n',
  },
  {
    name: 'lightness/unitless/output.css',
    data: 'a {\n  b: lab(30% 20 -30);\n}\n',
  },
  {
    name: 'lightness/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $lightness: 30%)}\n',
  },
  {
    name: 'lightness/percent/output.css',
    data: 'a {\n  b: lab(30% 20 -30);\n}\n',
  },
  {
    name: 'lightness/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $lightness: 120%)}\n',
  },
  {
    name: 'lightness/out_of_range/output.css',
    data: 'a {\n  b: color-mix(in lab, color(xyz 1.7255148283 1.6190494947 2.5266428703) 100%, black);\n}\n',
  },
  {
    name: 'lightness/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $lightness: none)}\n',
  },
  {
    name: 'lightness/none/output.css',
    data: 'a {\n  b: lab(none 20 -30);\n}\n',
  },
  {
    name: 'a/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $a: 50)}\n',
  },
  {
    name: 'a/unitless/output.css',
    data: 'a {\n  b: lab(50% 50 -30);\n}\n',
  },
  {
    name: 'a/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $a: -40%)}\n',
  },
  {
    name: 'a/percent/output.css',
    data: 'a {\n  b: lab(50% -50 -30);\n}\n',
  },
  {
    name: 'a/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $a: 200)}\n',
  },
  {
    name: 'a/out_of_range/output.css',
    data: 'a {\n  b: lab(50% 200 -30);\n}\n',
  },
  {
    name: 'a/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $a: none)}\n',
  },
  {
    name: 'a/none/output.css',
    data: 'a {\n  b: lab(50% none -30);\n}\n',
  },
  {
    name: 'b/unitless/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $b: 50)}\n',
  },
  {
    name: 'b/unitless/output.css',
    data: 'a {\n  b: lab(50% 20 50);\n}\n',
  },
  {
    name: 'b/percent/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $b: -40%)}\n',
  },
  {
    name: 'b/percent/output.css',
    data: 'a {\n  b: lab(50% 20 -50);\n}\n',
  },
  {
    name: 'b/out_of_range/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $b: -200)}\n',
  },
  {
    name: 'b/out_of_range/output.css',
    data: 'a {\n  b: lab(50% 20 -200);\n}\n',
  },
  {
    name: 'b/none/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $b: none)}\n',
  },
  {
    name: 'b/none/output.css',
    data: 'a {\n  b: lab(50% 20 none);\n}\n',
  },
  {
    name: 'all/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $lightness: 20%, $a: -30, $b: 40)}\n',
  },
  {
    name: 'all/output.css',
    data: 'a {\n  b: lab(20% -30 40);\n}\n',
  },
  {
    name: 'alpha_input/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30 / 0.9), $lightness: 30%)}\n',
  },
  {
    name: 'alpha_input/output.css',
    data: 'a {\n  b: lab(30% 20 -30 / 0.9);\n}\n',
  },
  {
    name: 'alpha_arg/input.scss',
    data: '@use "sass:color";\na {b: color.change(lab(50% 20 -30), $lightness: 30%, $alpha: 0.9)}\n',
  },
  {
    name: 'alpha_arg/output.css',
    data: 'a {\n  b: lab(30% 20 -30 / 0.9);\n}\n',
  },
]
