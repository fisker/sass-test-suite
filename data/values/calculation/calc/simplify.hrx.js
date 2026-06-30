export default [
  {
    name: 'README.md',
    data: 'The initial release of calculation support only simplifies operations that parse\nas "number + number" where both numbers are compatible, so for example\n`calc(1% + 1px + 2px)` isn\'t simplified because it parses as `(1% + 1px) + 2px`.\n',
  },
  {
    name: 'nested/input.scss',
    data: 'a {b: calc(1% + calc(1px))}\n',
  },
  {
    name: 'nested/output.css',
    data: 'a {\n  b: calc(1% + 1px);\n}\n',
  },
  {
    name: 'plus/left/input.scss',
    data: 'a {b: calc(1px + 2px + 1%)}\n',
  },
  {
    name: 'plus/left/output.css',
    data: 'a {\n  b: calc(3px + 1%);\n}\n',
  },
  {
    name: 'plus/right/input.scss',
    data: 'a {b: calc(1% + 1px + 2px)}\n',
  },
  {
    name: 'plus/right/output.css',
    data: 'a {\n  b: calc(1% + 1px + 2px);\n}\n',
  },
  {
    name: 'minus/left/input.scss',
    data: 'a {b: calc(3px - 2px + 1%)}\n',
  },
  {
    name: 'minus/left/output.css',
    data: 'a {\n  b: calc(1px + 1%);\n}\n',
  },
  {
    name: 'minus/right/input.scss',
    data: 'a {b: calc(1% + 3px - 2px)}\n',
  },
  {
    name: 'minus/right/output.css',
    data: 'a {\n  b: calc(1% + 3px - 2px);\n}\n',
  },
  {
    name: 'times/left/input.scss',
    data: 'a {b: calc(3px * 2 + 1%)}\n',
  },
  {
    name: 'times/left/output.css',
    data: 'a {\n  b: calc(6px + 1%);\n}\n',
  },
  {
    name: 'times/right/input.scss',
    data: 'a {b: calc(1% + 3px * 2)}\n',
  },
  {
    name: 'times/right/output.css',
    data: 'a {\n  b: calc(1% + 6px);\n}\n',
  },
  {
    name: 'divide/left/input.scss',
    data: 'a {b: calc(3px / 2 + 1%)}\n',
  },
  {
    name: 'divide/left/output.css',
    data: 'a {\n  b: calc(1.5px + 1%);\n}\n',
  },
  {
    name: 'divide/right/input.scss',
    data: 'a {b: calc(1% + 3px / 2)}\n',
  },
  {
    name: 'divide/right/output.css',
    data: 'a {\n  b: calc(1% + 1.5px);\n}\n',
  },
  {
    name: 'invert/plus/input.scss',
    data: 'a {b: calc(1% + -1px)}\n',
  },
  {
    name: 'invert/plus/output.css',
    data: 'a {\n  b: calc(1% - 1px);\n}\n',
  },
  {
    name: 'invert/minus/input.scss',
    data: 'a {b: calc(1% - -1px)}\n',
  },
  {
    name: 'invert/minus/output.css',
    data: 'a {\n  b: calc(1% + 1px);\n}\n',
  },
]
