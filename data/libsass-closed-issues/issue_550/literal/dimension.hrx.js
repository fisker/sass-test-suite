// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_550/literal/dimension.hrx

export default [
  {
    name: 'input.scss',
    data: '#foo {\n  i: 10.0001px;\n  j: 10.01px;\n  k: -10.0001px;\n  l: -10.01px; }\n\n#foo {\n  i: 0.0001px;\n  j: 0.01px;\n  k: -0.0001px;\n  l: -0.01px; }\n\n#foo {\n  i: .0001px;\n  j: .01px;\n  k: -.0001px;\n  l: -.01px; }\n',
  },
  {
    name: 'output.css',
    data: '#foo {\n  i: 10.0001px;\n  j: 10.01px;\n  k: -10.0001px;\n  l: -10.01px;\n}\n\n#foo {\n  i: 0.0001px;\n  j: 0.01px;\n  k: -0.0001px;\n  l: -0.01px;\n}\n\n#foo {\n  i: 0.0001px;\n  j: 0.01px;\n  k: -0.0001px;\n  l: -0.01px;\n}\n',
  },
]
