// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/round/three_arguments.hrx

export default [
  {
    name: 'README.md',
    data: "Most of the same behavior tested for `calc()` applies to `round()`, but for\nterseness' sake isn't tested explicitly.\n",
  },
  {
    name: 'strategy/unknown_variable/input.scss',
    data: 'a {\n  e: round(var(--c), 8px, 9px);\n}',
  },
  {
    name: 'strategy/unknown_variable/output.css',
    data: 'a {\n  e: round(var(--c), 8px, 9px);\n}\n',
  },
  {
    name: 'strategy/interpolation/input.scss',
    data: 'a {\n  e: round(#{"up"}, 3px, 9px);\n}\n',
  },
  {
    name: 'strategy/interpolation/output.css',
    data: 'a {\n  e: 9px;\n}\n',
  },
  {
    name: 'step/unknown_variable/input.scss',
    data: 'a {\n  d: round(up, 8px, var(--c));\n}',
  },
  {
    name: 'step/unknown_variable/output.css',
    data: 'a {\n  d: round(up, 8px, var(--c));\n}\n',
  },
  {
    name: 'units/real_and_unknown/input.scss',
    data: 'a {b: round(nearest, 1px, 10%)}\n',
  },
  {
    name: 'units/real_and_unknown/output.css',
    data: 'a {\n  b: round(nearest, 1px, 10%);\n}\n',
  },
  {
    name: 'units/unknown/input.scss',
    data: 'a {\n  b: round(nearest, 1%, 2%);\n}\n',
  },
  {
    name: 'units/unknown/output.css',
    data: 'a {\n  b: 2%;\n}\n',
  },
]
