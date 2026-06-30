export default [
  {
    name: 'not/input.scss',
    data: '@supports not (a: b) {@c}\n',
  },
  {
    name: 'not/output.css',
    data: '@supports not (a: b) {\n  @c;\n}\n',
  },
  {
    name: 'and/input.scss',
    data: '@supports (a: b) and (c: d) and (e: f) {@g}\n',
  },
  {
    name: 'and/output.css',
    data: '@supports (a: b) and (c: d) and (e: f) {\n  @g;\n}\n',
  },
  {
    name: 'or/input.scss',
    data: '@supports (a: b) or (c: d) or (e: f) {@g}\n',
  },
  {
    name: 'or/output.css',
    data: '@supports (a: b) or (c: d) or (e: f) {\n  @g;\n}\n',
  },
  {
    name: 'mixed/and_in_not/input.scss',
    data: '@supports not ((a: b) and (c: d)) {@e}\n',
  },
  {
    name: 'mixed/and_in_not/output.css',
    data: '@supports not ((a: b) and (c: d)) {\n  @e;\n}\n',
  },
  {
    name: 'mixed/or_in_and/input.scss',
    data: '@supports (a: b) and ((c: d) or (e: f)) {@g}\n',
  },
  {
    name: 'mixed/or_in_and/output.css',
    data: '@supports (a: b) and ((c: d) or (e: f)) {\n  @g;\n}\n',
  },
  {
    name: 'mixed/and_in_or/input.scss',
    data: '@supports ((a: b) and (c: d)) or (e: f) {@g}\n',
  },
  {
    name: 'mixed/and_in_or/output.css',
    data: '@supports ((a: b) and (c: d)) or (e: f) {\n  @g;\n}\n',
  },
]
