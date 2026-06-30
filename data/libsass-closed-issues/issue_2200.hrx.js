// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2200.hrx

export default [
  {
    name: 'input.scss',
    data: '.media-object-section:last-child:not(:nth-child(2)) {\n  color: blue;\n}\n\n%orbit-control {\n  color: red;\n}\n\n.orbit-previous {\n  @extend %orbit-control;\n}\n',
  },
  {
    name: 'output.css',
    data: '.media-object-section:last-child:not(:nth-child(2)) {\n  color: blue;\n}\n\n.orbit-previous {\n  color: red;\n}\n',
  },
]
