// https://github.com/sass/sass-spec/blob/HEAD/spec/non_conformant/scss/for_in_functions.hrx

export default [
  {
    name: 'input.scss',
    data: '@function foo() {\n\t$limit: 10;\n\t$y: 0;\n\t@for $x from 1 through $limit {\n\t  $limit: 4;\n\t  $y: $y + $x;\n\t}\n\t@return $y;\n}\n\ndiv {\n\twidth: foo();\n}',
  },
  {
    name: 'output.css',
    data: 'div {\n  width: 55;\n}\n',
  },
]
