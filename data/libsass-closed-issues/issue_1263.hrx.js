export default [
  {
    name: 'input.scss',
    data: 'foo {\n  @ap#{pl}y;\n  @apply(--bar);\n  @apply  (  --bar  );\n  @ap#{pl}y   (   --bar , --foo  )  ;\n}',
  },
  {
    name: 'output.css',
    data: 'foo {\n  @apply;\n  @apply (--bar);\n  @apply ( --bar );\n  @apply ( --bar , --foo );\n}\n',
  },
]
