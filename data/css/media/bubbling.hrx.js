// https://github.com/sass/sass-spec/blob/HEAD/spec/css/media/bubbling.hrx

export default [
  {
    name: 'unmergeable_and_merged/input.scss',
    data: '// Regression test for sass/sass#3384. In Dart Sass, this caused a bug because\n// we were asking "has this media query been merged?" to determine whether to\n// bubble it up through parent queries, disregarding whether it had been merged\n// with *that particular query*.\n@media not a {\n  @media (b) {\n    @media (c) {\n      d {e: f}\n    }\n  }\n}\n',
  },
  {
    name: 'unmergeable_and_merged/output.css',
    data: '@media not a {\n  @media (b) and (c) {\n    d {\n      e: f;\n    }\n  }\n}\n',
  },
  {
    name: 'preserve_merge_after_bubble/input.scss',
    data: '// Regression test for sass/dart-sass#777\n@media (a: b) {\n  @media (c: d) {\n    e {f: g}\n  }\n\n  h {i: j}\n  k {l: m}\n}\n',
  },
  {
    name: 'preserve_merge_after_bubble/output.css',
    data: '@media (a: b) and (c: d) {\n  e {\n    f: g;\n  }\n}\n@media (a: b) {\n  h {\n    i: j;\n  }\n  k {\n    l: m;\n  }\n}\n',
  },
]
