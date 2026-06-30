export default [
  {
    name: 'into_pseudo/extends_after/input.scss',
    data: '// Regression test for sass/dart-sass#1297, where the root cause was that\n// extending an existing extension accidentally ignored simple selectors in\n// selector pseudos\n:is(midstream) {@extend upstream}\n\ndownstream {@extend midstream}\n\nupstream {a: b}\n',
  },
  {
    name: 'into_pseudo/extends_after/output.css',
    data: 'upstream, :is(midstream), :is(midstream, downstream) {\n  a: b;\n}\n',
  },
]
