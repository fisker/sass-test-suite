export default [
  {
    name: 'pseudoselectors/is/solo/input.scss',
    data: "// Since `%b` doesn't exist, no selectors can match it, so this rule should be\n// removed.\na:is(%b) {x: y}\n",
  },
  {
    name: 'pseudoselectors/is/solo/output.css',
    data: '',
  },
  {
    name: 'pseudoselectors/is/with_real/input.scss',
    data: "// Since `%b` doesn't exist, an element matches `%b` or `c` iff it matches `c`.\na:is(%b, c) {x: y}\n",
  },
  {
    name: 'pseudoselectors/is/with_real/output.css',
    data: 'a:is(c) {\n  x: y;\n}\n',
  },
  {
    name: 'pseudoselectors/where/solo/input.scss',
    data: "// Since `%b` doesn't exist, no selectors can match it, so this rule should be\n// removed.\na:where(%b) {x: y}\n",
  },
  {
    name: 'pseudoselectors/where/solo/output.css',
    data: '',
  },
  {
    name: 'pseudoselectors/where/with_real/input.scss',
    data: "// Since `%b` doesn't exist, an element matches `%b` or `c` iff it matches `c`.\na:where(%b, c) {x: y}\n",
  },
  {
    name: 'pseudoselectors/where/with_real/output.css',
    data: 'a:where(c) {\n  x: y;\n}\n',
  },
  {
    name: 'pseudoselectors/where/nesting/input.scss',
    data: 'a {\n  :where(&) {\n    b: c;\n  }\n}\n',
  },
  {
    name: 'pseudoselectors/where/nesting/output.css',
    data: ':where(a) {\n  b: c;\n}\n',
  },
  {
    name: 'pseudoselectors/matches/solo/input.scss',
    data: "// Since `%b` doesn't exist, no selectors can match it, so this rule should be\n// removed.\na:matches(%b) {x: y}\n",
  },
  {
    name: 'pseudoselectors/matches/solo/output.css',
    data: '',
  },
  {
    name: 'pseudoselectors/matches/with_real/input.scss',
    data: "// Since `%b` doesn't exist, an element matches `%b` or `c` iff it matches `c`.\na:matches(%b, c) {x: y}\n",
  },
  {
    name: 'pseudoselectors/matches/with_real/output.css',
    data: 'a:matches(c) {\n  x: y;\n}\n',
  },
  {
    name: 'pseudoselectors/not/solo/input.scss',
    data: "// Since `%b` doesn't exist, all `a` elements match `a:not(%b)`.\na:not(%b) {x: y}\n",
  },
  {
    name: 'pseudoselectors/not/solo/output.css',
    data: 'a {\n  x: y;\n}\n',
  },
  {
    name: 'pseudoselectors/not/with_real/input.scss',
    data: "// Since `%b` doesn't exist, it can be removed from the `:not` pseudoselector.\na:not(%b, c) {x: y}\n",
  },
  {
    name: 'pseudoselectors/not/with_real/output.css',
    data: 'a:not(c) {\n  x: y;\n}\n',
  },
  {
    name: 'pseudoselectors/not/universal/input.scss',
    data: "// Since `%b` doesn't exist, all elements match `:not(%b)`.\n:not(%b) {x: y}\n",
  },
  {
    name: 'pseudoselectors/not/universal/output.css',
    data: '* {\n  x: y;\n}\n',
  },
]
