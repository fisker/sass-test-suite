// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_828.hrx

export default [
  {
    name: 'input.scss',
    data: 'foo {\n  box-shadow: inset -1.5em 0 1.5em -0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 1.5em - 0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 1.5em- 0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 1.5em-0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 1.5em -.75em rgba(0, 0, 0, .25);\n  box-shadow: inset -1.5em 0 1.5em - .75em rgba(0, 0, 0, .25);\n  box-shadow: inset -1.5em 0 1.5em- .75em rgba(0, 0, 0, .25);\n  box-shadow: inset -1.5em 0 1.5em-.75em rgba(0, 0, 0, .25);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  box-shadow: inset -1.5em 0 1.5em -0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 1.5em- 0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 1.5em -0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 1.5em- 0.75em rgba(0, 0, 0, 0.25);\n  box-shadow: inset -1.5em 0 0.75em rgba(0, 0, 0, 0.25);\n}\n',
  },
]
