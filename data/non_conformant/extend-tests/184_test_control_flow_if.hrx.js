export default [
  {
    name: 'input.scss',
    data: '.true  { color: green; }\n.false { color: red;   }\n.also-true {\n@if true { @extend .true;  }\n@else    { @extend .false; }\n}\n.also-false {\n@if false { @extend .true;  }\n@else     { @extend .false; }\n}\n',
  },
  {
    name: 'output.css',
    data: '.true, .also-true {\n  color: green;\n}\n\n.false, .also-false {\n  color: red;\n}\n',
  },
]
