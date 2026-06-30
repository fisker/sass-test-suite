export default [
  {
    name: 'input.scss',
    data: "@use \"sass:string\";\n@function str-replace($string, $search, $replace: '') {\n  $index: string.index($string, $search);\n  @if $index {\n    @return string.slice($string, 1, $index - 1) + $replace +\n      str-replace(string.slice($string, $index + string.length($search)), $search, $replace);\n  }\n  @return $string;\n}\n\n$string: 'Foo Bar Baz Qux';\n.foo {\n  content: str-replace($string, ' ', '-');\n}",
  },
  {
    name: 'output.css',
    data: '.foo {\n  content: "Foo-Bar-Baz-Qux";\n}\n',
  },
]
