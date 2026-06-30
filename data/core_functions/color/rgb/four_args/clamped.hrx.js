export default [
  {
    name: 'README.md',
    data: 'Channels that are out of bounds are clamped within bounds.\n',
  },
  {
    name: 'red/finite/input.scss',
    data: 'a {b: rgb(256, 0, 0, 0.5)}\n',
  },
  {
    name: 'red/finite/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'red/degenerate/positive_infinity/input.scss',
    data: 'a {b: rgb(calc(infinity), 0, 0, 0.5)}\n',
  },
  {
    name: 'red/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: rgba(255, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'red/degenerate/negative_infinity/input.scss',
    data: 'a {b: rgb(calc(-infinity), 0, 0, 0.5)}\n',
  },
  {
    name: 'red/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'red/degenerate/nan/input.scss',
    data: 'a {b: rgb(calc(NaN), 0, 0, 0.5)}\n',
  },
  {
    name: 'red/degenerate/nan/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'green/finite/input.scss',
    data: 'a {b: rgb(0, -1, 0, 0.5)}\n',
  },
  {
    name: 'green/finite/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'green/degenerate/positive_infinity/input.scss',
    data: 'a {b: rgb(0, calc(infinity), 0, 0.5)}\n',
  },
  {
    name: 'green/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: rgba(0, 255, 0, 0.5);\n}\n',
  },
  {
    name: 'green/degenerate/negative_infinity/input.scss',
    data: 'a {b: rgb(0, calc(-infinity), 0, 0.5)}\n',
  },
  {
    name: 'green/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'green/degenerate/nan/input.scss',
    data: 'a {b: rgb(0, calc(NaN), 0, 0.5)}\n',
  },
  {
    name: 'green/degenerate/nan/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'blue/finite/input.scss',
    data: 'a {b: rgb(0, 0, 9999, 0.5)}\n',
  },
  {
    name: 'blue/finite/output.css',
    data: 'a {\n  b: rgba(0, 0, 255, 0.5);\n}\n',
  },
  {
    name: 'blue/degenerate/positive_infinity/input.scss',
    data: 'a {b: rgb(0, 0, calc(infinity), 0.5)}\n',
  },
  {
    name: 'blue/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: rgba(0, 0, 255, 0.5);\n}\n',
  },
  {
    name: 'blue/degenerate/negative_infinity/input.scss',
    data: 'a {b: rgb(0, 0, calc(-infinity), 0.5)}\n',
  },
  {
    name: 'blue/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'blue/degenerate/nan/input.scss',
    data: 'a {b: rgb(0, 0, calc(NaN), 0.5)}\n',
  },
  {
    name: 'blue/degenerate/nan/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0.5);\n}\n',
  },
  {
    name: 'alpha/above/input.scss',
    data: 'a {b: rgb(0, 0, 0, 1.1)}\n',
  },
  {
    name: 'alpha/above/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/below/input.scss',
    data: 'a {b: rgb(0, 0, 0, -0.1)}\n',
  },
  {
    name: 'alpha/below/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/degenerate/positive_infinity/input.scss',
    data: 'a {b: rgb(0, 0, 0, calc(infinity))}\n',
  },
  {
    name: 'alpha/degenerate/positive_infinity/output.css',
    data: 'a {\n  b: rgb(0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/degenerate/negative_infinity/input.scss',
    data: 'a {b: rgb(0, 0, 0, calc(-infinity))}\n',
  },
  {
    name: 'alpha/degenerate/negative_infinity/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
  {
    name: 'alpha/degenerate/nan/input.scss',
    data: 'a {b: rgb(0, 0, 0, calc(NaN))}\n',
  },
  {
    name: 'alpha/degenerate/nan/output.css',
    data: 'a {\n  b: rgba(0, 0, 0, 0);\n}\n',
  },
]
