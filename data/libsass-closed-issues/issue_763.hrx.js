export default [
  {
    name: 'input.scss',
    data: '@use "sass:string";\nfoo {\n  a: string.slice("abcd", 1, 1);\n  b: string.slice(\'abcd\', 1, 1);\n  c: string.slice(abcd, 1, 1);\n\n  d: string.insert("abcd", "X", 1);\n  e: string.insert("abcd", \'X\', 1);\n  f: string.insert(\'abcd\', "X", 1);\n  g: string.insert(\'abcd\', \'X\', 1);\n}\n',
  },
  {
    name: 'output.css',
    data: 'foo {\n  a: "a";\n  b: "a";\n  c: a;\n  d: "Xabcd";\n  e: "Xabcd";\n  f: "Xabcd";\n  g: "Xabcd";\n}\n',
  },
]
