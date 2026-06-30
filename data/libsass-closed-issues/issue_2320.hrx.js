// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_2320.hrx

export default [
  {
    name: 'input.scss',
    data: "$char-f: '\\66';\r\n$char-g: '\\67';\r\n\r\n.test-1 {\r\n  content: '#{$char-f}\\feff';\r\n}\r\n\r\n.test-2 {\r\n  content: '#{$char-g}\\feff';\r\n}\r\n\r\n// this is broken\r\n.test-3 {\r\n  content: '\\feff#{$char-f}';\r\n}\r\n\r\n.test-4 {\r\n  content: '\\feff#{$char-g}';\r\n}",
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n.test-1 {\n  content: "f﻿";\n}\n\n.test-2 {\n  content: "g﻿";\n}\n\n.test-3 {\n  content: "﻿f";\n}\n\n.test-4 {\n  content: "﻿g";\n}\n',
  },
]
