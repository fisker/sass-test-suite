export default [
  {
    name: 'input.scss',
    data: '.indentation {\n  --simple: {\n    foo: bar;\n  };\n\n  --empty-line: {\n    foo: bar;\n\n    baz: bang;\n  };\n\n  --multi-level: {\n   one\n    two\n     three\n      four\n  };\n\n  --all-indented: {\n    foo: bar; };\n\n  --below-base:\n    foo\n bar\n   baz;\n\n         --deep-base: {\n           foo: bar;\n         };\n\n\t--hard-tabs: {\n\t\tfoo: bar;\n\t};\n}\n',
  },
  {
    name: 'output.css',
    data: '.indentation {\n  --simple: {\n    foo: bar;\n  };\n  --empty-line: {\n    foo: bar;\n\n    baz: bang;\n  };\n  --multi-level: {\n   one\n    two\n     three\n      four\n  };\n  --all-indented: {\n    foo: bar; };\n  --below-base:\n     foo\n  bar\n    baz;\n  --deep-base: {\n    foo: bar;\n  };\n  --hard-tabs: {\n  \tfoo: bar;\n  };\n}\n',
  },
]
