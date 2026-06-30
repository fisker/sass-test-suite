export default [
  {
    name: 'unitless/README.md',
    data: 'Channels may be specified as unitless numbers between 0 and 255.\n',
  },
  {
    name: 'unitless/numbers/input.scss',
    data: 'a {b: rgb(18 52 86)}\n',
  },
  {
    name: 'unitless/numbers/output.css',
    data: 'a {\n  b: rgb(18, 52, 86);\n}\n',
  },
  {
    name: 'unitless/beaded/input.scss',
    data: 'a {b: rgb(190 173 237)}\n',
  },
  {
    name: 'unitless/beaded/output.css',
    data: 'a {\n  b: rgb(190, 173, 237);\n}\n',
  },
  {
    name: 'unitless/springgreen/input.scss',
    data: 'a {b: rgb(0 255 127)}\n',
  },
  {
    name: 'unitless/springgreen/output.css',
    data: 'a {\n  b: rgb(0, 255, 127);\n}\n',
  },
  {
    name: 'unitless/named/input.scss',
    data: 'a {b: rgb($channels: 0 255 127)}\n',
  },
  {
    name: 'unitless/named/output.css',
    data: 'a {\n  b: rgb(0, 255, 127);\n}\n',
  },
  {
    name: 'unitless/clamped/README.md',
    data: 'Channels that are out of bounds are clamped within bounds.\n',
  },
  {
    name: 'unitless/clamped/red/input.scss',
    data: 'a {b: rgb(256 0 0)}\n',
  },
  {
    name: 'unitless/clamped/red/output.css',
    data: 'a {\n  b: rgb(255, 0, 0);\n}\n',
  },
  {
    name: 'unitless/clamped/green/input.scss',
    data: 'a {b: rgb(0 -1 0)}\n',
  },
  {
    name: 'unitless/clamped/green/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'unitless/clamped/blue/input.scss',
    data: 'a {b: rgb(0 0 9999)}\n',
  },
  {
    name: 'unitless/clamped/blue/output.css',
    data: 'a {\n  b: rgb(0, 0, 255);\n}\n',
  },
  {
    name: 'percents/README.md',
    data: 'Channels may also be specified as percents between 0% and 100%, which may be\n// mixed with unitless numbers.\n',
  },
  {
    name: 'percents/all/percent/input.scss',
    data: 'a {b: rgb(7.1% 20.4% 33.9%)}\n',
  },
  {
    name: 'percents/all/percent/output.css',
    data: 'a {\n  b: rgb(18.105, 52.02, 86.445);\n}\n',
  },
  {
    name: 'percents/unitless/green/input.scss',
    data: 'a {b: rgb(74.7% 173 93%)}\n',
  },
  {
    name: 'percents/unitless/green/output.css',
    data: 'a {\n  b: rgb(190.485, 173, 237.15);\n}\n',
  },
  {
    name: 'percents/percent/green/input.scss',
    data: 'a {b: rgb(190 68% 237)}\n',
  },
  {
    name: 'percents/percent/green/output.css',
    data: 'a {\n  b: rgb(190, 173.4, 237);\n}\n',
  },
  {
    name: 'percents/boundaries/input.scss',
    data: 'a {b: rgb(0% 100% 50%)}\n',
  },
  {
    name: 'percents/boundaries/output.css',
    data: 'a {\n  b: rgb(0, 255, 127.5);\n}\n',
  },
  {
    name: 'percents/clamped/README.md',
    data: 'Channels that are out of bounds are clamped within bounds.\n',
  },
  {
    name: 'percents/clamped/red/input.scss',
    data: 'a {b: rgb(100.1% 0 0)}\n',
  },
  {
    name: 'percents/clamped/red/output.css',
    data: 'a {\n  b: rgb(255, 0, 0);\n}\n',
  },
  {
    name: 'percents/clamped/green/input.scss',
    data: 'a {b: rgb(0 -0.1% 0)}\n',
  },
  {
    name: 'percents/clamped/green/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'percents/clamped/blue/input.scss',
    data: 'a {b: rgb(0 0 200%)}\n',
  },
  {
    name: 'percents/clamped/blue/output.css',
    data: 'a {\n  b: rgb(0, 0, 255);\n}\n',
  },
  {
    name: 'missing/red/input.scss',
    data: 'a {b: rgb(none 52 66)}\n',
  },
  {
    name: 'missing/red/output.css',
    data: 'a {\n  b: rgb(none 52 66);\n}\n',
  },
  {
    name: 'missing/green/input.scss',
    data: 'a {b: rgb(18 none 66)}\n',
  },
  {
    name: 'missing/green/output.css',
    data: 'a {\n  b: rgb(18 none 66);\n}\n',
  },
  {
    name: 'missing/blue/input.scss',
    data: 'a {b: rgb(18 52 none)}\n',
  },
  {
    name: 'missing/blue/output.css',
    data: 'a {\n  b: rgb(18 52 none);\n}\n',
  },
]
