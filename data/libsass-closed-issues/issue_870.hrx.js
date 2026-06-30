export default [
  {
    name: 'input.scss',
    data: '$quoted-strings-csv: "alpha", "beta", \'gamma\', \'delta\';\n$quoted-strings-ssv: "alpha" "beta" \'gamma\' \'delta\';\n\n.csv {\n  output: $quoted-strings-csv;\n  output: #{$quoted-strings-csv};\n  output: "[#{$quoted-strings-csv}]";\n  output: "#{$quoted-strings-csv}";\n  output: "["#{$quoted-strings-csv}"]";\n  output: \'#{$quoted-strings-csv}\';\n  output: "[\'#{$quoted-strings-csv}\']";\n}\n\n.ssv {\n  output: $quoted-strings-ssv;\n  output: #{$quoted-strings-ssv};\n  output: "[#{$quoted-strings-ssv}]";\n  output: "#{$quoted-strings-ssv}";\n  output: "["#{$quoted-strings-ssv}"]";\n  output: \'#{$quoted-strings-ssv}\';\n  output: "[\'#{$quoted-strings-ssv}\']";\n}\n',
  },
  {
    name: 'output.css',
    data: '.csv {\n  output: "alpha", "beta", "gamma", "delta";\n  output: alpha, beta, gamma, delta;\n  output: "[alpha, beta, gamma, delta]";\n  output: "alpha, beta, gamma, delta";\n  output: "[" alpha, beta, gamma, delta "]";\n  output: "alpha, beta, gamma, delta";\n  output: "[\'alpha, beta, gamma, delta\']";\n}\n\n.ssv {\n  output: "alpha" "beta" "gamma" "delta";\n  output: alpha beta gamma delta;\n  output: "[alpha beta gamma delta]";\n  output: "alpha beta gamma delta";\n  output: "[" alpha beta gamma delta "]";\n  output: "alpha beta gamma delta";\n  output: "[\'alpha beta gamma delta\']";\n}\n',
  },
]
