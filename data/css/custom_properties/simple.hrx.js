// https://github.com/sass/sass-spec/blob/HEAD/spec/css/custom_properties/simple.hrx

export default [
  {
    name: 'input.scss',
    data: ".simple {\n  --single: value;\n  --multiple: value1 value2;\n  --function: foo(bar);\n  --url: url(http://foo.com/bar);\n  --color: #foo;\n  --exponent: 12.6e7;\n  --close-comment: */;\n\n  // The whitespace here DOES count as a token and needs to be preserved.\n  --empty: ;\n\n  // Single-line comments are not supported in variables.\n  --single-line: // (\n    );\n\n  // Extra whitespace isn't added.\n  --no-extra-whitespace:value;\n}\n",
  },
  {
    name: 'output.css',
    data: '.simple {\n  --single: value;\n  --multiple: value1 value2;\n  --function: foo(bar);\n  --url: url(http://foo.com/bar);\n  --color: #foo;\n  --exponent: 12.6e7;\n  --close-comment: */;\n  --empty: ;\n  --single-line: // (\n    );\n  --no-extra-whitespace:value;\n}\n',
  },
]
