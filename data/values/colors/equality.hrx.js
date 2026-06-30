// https://github.com/sass/sass-spec/blob/HEAD/spec/values/colors/equality.hrx

export default [
  {
    name: 'true/legacy/same_space/rgb/no_none/input.scss',
    data: 'a {b: #abcdef == #abcdef}\n',
  },
  {
    name: 'true/legacy/same_space/rgb/no_none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/legacy/same_space/rgb/none/input.scss',
    data: 'a {b: rgb(50 none 120) == rgb(50 none 120)}\n',
  },
  {
    name: 'true/legacy/same_space/rgb/none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/legacy/same_space/hsl/no_none/input.scss',
    data: 'a {b: hsl(250, 80%, 20%) == hsl(250deg, 80%, 20%)}\n',
  },
  {
    name: 'true/legacy/same_space/hsl/no_none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/legacy/same_space/hsl/none/input.scss',
    data: 'a {b: hsl(none 80% 20%) == hsl(none 80% 20%)}\n',
  },
  {
    name: 'true/legacy/same_space/hsl/none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/legacy/same_space/hsl/wrapped_hue/input.scss',
    data: 'a {b: hsl(180, 80%, 20%) == hsl(540, 80%, 20%)}\n',
  },
  {
    name: 'true/legacy/same_space/hsl/wrapped_hue/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/legacy/same_space/hwb/no_none/input.scss',
    data: 'a {b: hwb(250 30% 20%) == hwb(250deg 30% 20%)}\n',
  },
  {
    name: 'true/legacy/same_space/hwb/no_none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/legacy/same_space/hwb/none/input.scss',
    data: 'a {b: hwb(none 30% 20%) == hwb(none 30% 20%)}\n',
  },
  {
    name: 'true/legacy/same_space/hwb/none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/legacy/different_space/no_none/input.scss',
    data: 'a {b: purple == hsl(300, 100%, 25.098039215686%)}\n',
  },
  {
    name: 'true/legacy/different_space/no_none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/legacy/different_space/none/input.scss',
    data: 'a {b: gray == hsl(none 0% 50.196078431373%)}\n',
  },
  {
    name: 'true/legacy/different_space/none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/no_alpha_or_none/input.scss',
    data: 'a {b: lab(66% 50 -100) == lab(66% 50 -100)}\n',
  },
  {
    name: 'true/no_alpha_or_none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/alpha/input.scss',
    data: 'a {b: color(prophoto-rgb 0.3 0.4 0.5 / 0.6) == color(prophoto-rgb 0.3 0.4 0.5 / 0.6)}\n',
  },
  {
    name: 'true/alpha/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/none/input.scss',
    data: 'a {b: lch(100% 0% none) == lch(100% 0% none)}\n',
  },
  {
    name: 'true/none/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'true/within_epsilon/input.scss',
    data: 'a {\n  b: oklab(\n    50.0000000000001 29.9999999999999 -20.0000000000001 / 0.999999999999\n  ) == oklab(50 30 -20);\n}\n',
  },
  {
    name: 'true/within_epsilon/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'false/different_type/input.scss',
    data: '@use "sass:string";\n\na {b: red == string.unquote("red")}\n',
  },
  {
    name: 'false/different_type/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/legacy/same_space/rgb/no_none/input.scss',
    data: 'a {b: red == blue}\n',
  },
  {
    name: 'false/legacy/same_space/rgb/no_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/legacy/same_space/rgb/one_none/input.scss',
    data: 'a {b: rgb(0 100 200) == rgb(none 100 200)}\n',
  },
  {
    name: 'false/legacy/same_space/rgb/one_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/legacy/same_space/hsl/no_none/input.scss',
    data: 'a {b: hsl(50deg 50% 80%) == hsl(51deg 50% 80%)}\n',
  },
  {
    name: 'false/legacy/same_space/hsl/no_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/legacy/same_space/hsl/one_none/input.scss',
    data: 'a {b: hsl(0 0% 80%) == hsl(none 0% 80%)}\n',
  },
  {
    name: 'false/legacy/same_space/hsl/one_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/legacy/same_space/hwb/no_none/input.scss',
    data: 'a {b: hwb(50deg 20% 30%) == hwb(51deg 20% 30%)}\n',
  },
  {
    name: 'false/legacy/same_space/hwb/no_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/legacy/same_space/hwb/one_none/input.scss',
    data: 'a {b: hwb(0 0% 0%) == hwb(none 0% 0%)}\n',
  },
  {
    name: 'false/legacy/same_space/hwb/one_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/legacy/different_space/input.scss',
    data: 'a {b: red == hsl(0, 0%, 50%)}\n',
  },
  {
    name: 'false/legacy/different_space/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/same_space/no_none/input.scss',
    data: 'a {b: color(prophoto-rgb 0.1 0.2 0.3) == color(prophoto-rgb 0.1 0.2 0.4)}\n',
  },
  {
    name: 'false/same_space/no_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/same_space/one_none/input.scss',
    data: 'a {b: oklch(50% 0% none) == oklch(50% 0% 0)}\n',
  },
  {
    name: 'false/same_space/one_none/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/same_space/different_alpha/input.scss',
    data: 'a {b: lab(50% 100 -100) == lab(50% 100 -100 / 0.9)}\n',
  },
  {
    name: 'false/same_space/different_alpha/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
  {
    name: 'false/different_space/input.scss',
    data: 'a {b: color(srgb 0 0 0) == color(srgb-linear 0 0 0)}\n',
  },
  {
    name: 'false/different_space/output.css',
    data: 'a {\n  b: false;\n}\n',
  },
]
