// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/errors/import/miss/simple.hrx

export default [
  {
    name: 'input.scss',
    data: '@import "hey1.css", "cookie.css", url("hey2.css"), "fudge.css";\n\n$foo:"goodbye";\ndiv[name="hello"] {\n  color: blue;\n}\n\n@import "bludge.css";',
  },
  {
    name: 'output.css',
    data: '@import "hey1.css";\n@import "cookie.css";\n@import url("hey2.css");\n@import "fudge.css";\n@import "bludge.css";\ndiv[name=hello] {\n  color: blue;\n}\n',
  },
]
