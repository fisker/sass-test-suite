// https://github.com/sass/sass-spec/blob/HEAD/spec/libsass-closed-issues/issue_1207.hrx

export default [
  {
    name: 'input.scss',
    data: "@use \"sass:string\";\n@function test($pos) {\n  @return test-#{$pos};\n}\n\n.foo {\n  content: test(string.slice('scale-0', 7));   // Nope\n  content: test-#{string.slice('scale-0', 7)}; // Yep\n}",
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: test-0;\n  content: test-0;\n}\n',
  },
]
