// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2467.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  a: [footer-right] / 120px;\n  b: [footer-right]/ 120px;\n  c: [footer-right] /120px;\n  d: [footer-right]/120px;\n  e: [footer-right] / 120px 1fr;\n  f: [footer-right]/ 120px 1fr;\n  g: [footer-right] /120px 1fr;\n  h: [footer-right]/120px 1fr;\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: [footer-right]/120px;\n  b: [footer-right]/120px;\n  c: [footer-right]/120px;\n  d: [footer-right]/120px;\n  e: [footer-right]/120px 1fr;\n  f: [footer-right]/120px 1fr;\n  g: [footer-right]/120px 1fr;\n  h: [footer-right]/120px 1fr;\n}\n',
  },
]
