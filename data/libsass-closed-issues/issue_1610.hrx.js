export default [
  {
    name: 'input.scss',
    data: '@function foo() {\n  @return "bar";\n}\n\n@function bar() {\n    @return "foo" + "," + bar;\n}\n\na {\n  b: foo(), "bar";\n  b: foo(), "bar"\n}\n\nb {\n  b: #{foo(), "bar"};\n  b: #{foo(), "bar"}\n}\n\nc {\n  b: "foo", bar;\n}\n\nd {\n  b: #{"foo", bar};\n  b: #{"foo", bar}\n}\n\ne {\n  b: #{bar()};\n  b: #{bar()}\n}\n\nf {\n  b: "foo" + "," + bar;\n  b: "foo" + "," + bar\n}\n',
  },
  {
    name: 'output.css',
    data: 'a {\n  b: "bar", "bar";\n  b: "bar", "bar";\n}\n\nb {\n  b: bar, bar;\n  b: bar, bar;\n}\n\nc {\n  b: "foo", bar;\n}\n\nd {\n  b: foo, bar;\n  b: foo, bar;\n}\n\ne {\n  b: foo,bar;\n  b: foo,bar;\n}\n\nf {\n  b: "foo,bar";\n  b: "foo,bar";\n}\n',
  },
]
