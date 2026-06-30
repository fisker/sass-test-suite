// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1233.hrx

export default [
  {
    name: 'input.scss',
    data: '@-moz-keyframes animatetoptop /* Firefox */ line 429\n{\nfrom {width:0%}\nto {width:100%}\n}',
  },
  {
    name: 'output.css',
    data: '@-moz-keyframes animatetoptop /* Firefox */ line 429 {\n  from {\n    width: 0%;\n  }\n  to {\n    width: 100%;\n  }\n}\n',
  },
]
