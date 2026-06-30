export default [
  {
    name: 'input.scss',
    data: '.result {\n  output: "\\0_\\a_\\A";\n  output: #{"\\0_\\a_\\A"};\n  output: "[#{"\\0_\\a_\\A"}]";\n  output: "#{"\\0_\\a_\\A"}";\n  output: \'#{"\\0_\\a_\\A"}\';\n  output: "[\'#{"\\0_\\a_\\A"}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '@charset "UTF-8";\n.result {\n  output: "�_\\a_\\a";\n  output: �_ _ ;\n  output: "[�_\\a_\\a]";\n  output: "�_\\a_\\a";\n  output: "�_\\a_\\a";\n  output: "[\'�_\\a_\\a\']";\n}\n',
  },
]
