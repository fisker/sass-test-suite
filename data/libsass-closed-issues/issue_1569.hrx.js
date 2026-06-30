// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1569.hrx

export default [
  {
    name: 'input.scss',
    data: '$common-border: "foo";\n.nihilo & {\n  .dijitMenu {\n    border: $common-border;\n    .dijitMenuItem {\n      color: getColor(\'text-dark-main\');\n    }\n  }\n}\n',
  },
  {
    name: 'output.css',
    data: '.nihilo & .dijitMenu {\n  border: "foo";\n}\n.nihilo & .dijitMenu .dijitMenuItem {\n  color: getColor("text-dark-main");\n}\n',
  },
]
