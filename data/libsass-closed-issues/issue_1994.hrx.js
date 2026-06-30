// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1994.hrx

export default [
  {
    name: 'input.scss',
    data: '%hoverbrighter {\n    &:hover,\n    &:focus {\n        opacity: .8;\n\n        @supports (filter: brightness(120%)) {\n            filter: brightness(120%);\n        }\n    }\n}\n\n.productportal-link {\n    @extend %hoverbrighter;\n}',
  },
  {
    name: 'output.css',
    data: '.productportal-link:hover, .productportal-link:focus {\n  opacity: 0.8;\n}\n@supports (filter: brightness(120%)) {\n  .productportal-link:hover, .productportal-link:focus {\n    filter: brightness(120%);\n  }\n}\n',
  },
]
