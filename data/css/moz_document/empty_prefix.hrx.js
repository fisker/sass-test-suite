export default [
  {
    name: 'input.scss',
    data: "// An empty url-prefix() should not be deprecated yet, as it's still supported\n// in Firefox's release channel at time of writing.\n\n@-moz-document url-prefix() {\n  a {b: c}\n}\n\n@-moz-document url-prefix(\"\") {\n  a {b: c}\n}\n\n@-moz-document url-prefix('') {\n  a {b: c}\n}\n",
  },
  {
    name: 'output.css',
    data: '@-moz-document url-prefix() {\n  a {\n    b: c;\n  }\n}\n@-moz-document url-prefix("") {\n  a {\n    b: c;\n  }\n}\n@-moz-document url-prefix(\'\') {\n  a {\n    b: c;\n  }\n}\n',
  },
]
