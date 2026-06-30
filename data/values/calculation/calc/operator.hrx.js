// https://github.com/sass/sass-spec/blob/HEAD/spec/values/calculation/calc/operator.hrx

export default [
  {
    name: 'plus/simplified/input.scss',
    data: 'a {b: calc(1px + 2px)}\n',
  },
  {
    name: 'plus/simplified/output.css',
    data: 'a {\n  b: 3px;\n}\n',
  },
  {
    name: 'plus/preserved/number/input.scss',
    data: 'a {b: calc(1px + 2%)}\n',
  },
  {
    name: 'plus/preserved/number/output.css',
    data: 'a {\n  b: calc(1px + 2%);\n}\n',
  },
  {
    name: 'plus/preserved/multiplication/input.scss',
    data: 'a {b: calc(1px + (2% * var(--c)))}\n',
  },
  {
    name: 'plus/preserved/multiplication/output.css',
    data: 'a {\n  b: calc(1px + 2% * var(--c));\n}\n',
  },
  {
    name: 'plus/preserved/division/input.scss',
    data: 'a {b: calc(1px + (2% / var(--c)))}\n',
  },
  {
    name: 'plus/preserved/division/output.css',
    data: 'a {\n  b: calc(1px + 2% / var(--c));\n}\n',
  },
  {
    name: 'plus/preserved/plus/input.scss',
    data: 'a {b: calc(1px + (2% + var(--c)))}\n',
  },
  {
    name: 'plus/preserved/plus/output.css',
    data: 'a {\n  b: calc(1px + 2% + var(--c));\n}\n',
  },
  {
    name: 'plus/preserved/minus/input.scss',
    data: 'a {b: calc(1px + 2% - var(--c))}\n',
  },
  {
    name: 'plus/preserved/minus/output.css',
    data: 'a {\n  b: calc(1px + 2% - var(--c));\n}\n',
  },
  {
    name: 'minus/simplified/input.scss',
    data: 'a {b: calc(1px - 2px)}\n',
  },
  {
    name: 'minus/simplified/output.css',
    data: 'a {\n  b: -1px;\n}\n',
  },
  {
    name: 'minus/preserved/number/input.scss',
    data: 'a {b: calc(1px - 2%)}\n',
  },
  {
    name: 'minus/preserved/number/output.css',
    data: 'a {\n  b: calc(1px - 2%);\n}\n',
  },
  {
    name: 'minus/preserved/multiplication/input.scss',
    data: 'a {b: calc(1px - (2% * var(--c)))}\n',
  },
  {
    name: 'minus/preserved/multiplication/output.css',
    data: 'a {\n  b: calc(1px - 2% * var(--c));\n}\n',
  },
  {
    name: 'minus/preserved/division/input.scss',
    data: 'a {b: calc(1px - (2% / var(--c)))}\n',
  },
  {
    name: 'minus/preserved/division/output.css',
    data: 'a {\n  b: calc(1px - 2% / var(--c));\n}\n',
  },
  {
    name: 'minus/preserved/plus/input.scss',
    data: 'a {b: calc(1px - (2% + var(--c)))}\n',
  },
  {
    name: 'minus/preserved/plus/output.css',
    data: 'a {\n  b: calc(1px - (2% + var(--c)));\n}\n',
  },
  {
    name: 'minus/preserved/minus/input.scss',
    data: 'a {b: calc(1px - (2% - var(--c)))}\n',
  },
  {
    name: 'minus/preserved/minus/output.css',
    data: 'a {\n  b: calc(1px - (2% - var(--c)));\n}\n',
  },
  {
    name: 'times/simplified/input.scss',
    data: 'a {b: calc(1px * 2)}\n',
  },
  {
    name: 'times/simplified/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'times/preserved/input.scss',
    data: 'a {b: calc(1px * var(--c))}\n',
  },
  {
    name: 'times/preserved/output.css',
    data: 'a {\n  b: calc(1px * var(--c));\n}\n',
  },
  {
    name: 'times/no_whitespace/input.scss',
    data: 'a {b: calc(1px*2)}\n',
  },
  {
    name: 'times/no_whitespace/output.css',
    data: 'a {\n  b: 2px;\n}\n',
  },
  {
    name: 'divide/simplified/input.scss',
    data: 'a {b: calc(1px / 2)}\n',
  },
  {
    name: 'divide/simplified/output.css',
    data: 'a {\n  b: 0.5px;\n}\n',
  },
  {
    name: 'divide/preserved/input.scss',
    data: 'a {b: calc(1px / var(--c))}\n',
  },
  {
    name: 'divide/preserved/output.css',
    data: 'a {\n  b: calc(1px / var(--c));\n}\n',
  },
  {
    name: 'divide/no_whitespace/input.scss',
    data: 'a {b: calc(1px/2)}\n',
  },
  {
    name: 'divide/no_whitespace/output.css',
    data: 'a {\n  b: 0.5px;\n}\n',
  },
  {
    name: 'precedence/simplified/additive/input.scss',
    data: 'a {b: calc(1px + 20px - 300px + 4000px - 50000px)}\n',
  },
  {
    name: 'precedence/simplified/additive/output.css',
    data: 'a {\n  b: -46279px;\n}\n',
  },
  {
    name: 'precedence/simplified/multiplicative/input.scss',
    data: 'a {b: calc(2 * 3 / 5 * 7 / 11)}\n',
  },
  {
    name: 'precedence/simplified/multiplicative/output.css',
    data: 'a {\n  b: 0.7636363636;\n}\n',
  },
  {
    name: 'precedence/simplified/multiplicative_and_additive/input.scss',
    data: 'a {b: calc(2 * 3 + 4 / 5 - 6)}\n',
  },
  {
    name: 'precedence/simplified/multiplicative_and_additive/output.css',
    data: 'a {\n  b: 0.8;\n}\n',
  },
  {
    name: 'precedence/simplified/parens/multiplicative_and_additive/input.scss',
    data: 'a {b: calc(2 * (3 + 4) / (5 - 6))}\n',
  },
  {
    name: 'precedence/simplified/parens/multiplicative_and_additive/output.css',
    data: 'a {\n  b: -14;\n}\n',
  },
  {
    name: 'precedence/simplified/parens/multiplicative/input.scss',
    data: 'a {b: calc(1 / (2 * 3))}\n',
  },
  {
    name: 'precedence/simplified/parens/multiplicative/output.css',
    data: 'a {\n  b: 0.1666666667;\n}\n',
  },
  {
    name: 'precedence/preserved/additive/parens/input.scss',
    data: 'a {b: calc(1px + (2% - 3em))}\n',
  },
  {
    name: 'precedence/preserved/additive/parens/output.css',
    data: 'a {\n  b: calc(1px + 2% - 3em);\n}\n',
  },
  {
    name: 'precedence/preserved/additive/calculation/input.scss',
    data: 'a {b: calc(1px + calc(2% - 3em))}\n',
  },
  {
    name: 'precedence/preserved/additive/calculation/output.css',
    data: 'a {\n  b: calc(1px + 2% - 3em);\n}\n',
  },
  {
    name: 'precedence/preserved/multiplicative/default/parens/input.scss',
    data: 'a {b: calc(1px * (2 / var(--c)))}\n',
  },
  {
    name: 'precedence/preserved/multiplicative/default/parens/output.css',
    data: 'a {\n  b: calc(1px * 2 / var(--c));\n}\n',
  },
  {
    name: 'precedence/preserved/multiplicative/default/calculation/input.scss',
    data: 'a {b: calc(1px * calc(2 / var(--c)))}\n',
  },
  {
    name: 'precedence/preserved/multiplicative/default/calculation/output.css',
    data: 'a {\n  b: calc(1px * 2 / var(--c));\n}\n',
  },
  {
    name: 'precedence/preserved/multiplicative/needs_parens/parens/input.scss',
    data: 'a {b: calc(1px / (2 * var(--c)))}\n',
  },
  {
    name: 'precedence/preserved/multiplicative/needs_parens/parens/output.css',
    data: 'a {\n  b: calc(1px / (2 * var(--c)));\n}\n',
  },
  {
    name: 'precedence/preserved/multiplicative/needs_parens/calculation/input.scss',
    data: 'a {b: calc(1px / calc(2 * var(--c)))}\n',
  },
  {
    name: 'precedence/preserved/multiplicative/needs_parens/calculation/output.css',
    data: 'a {\n  b: calc(1px / (2 * var(--c)));\n}\n',
  },
  {
    name: 'precedence/preserved/additive_then_multiplicative/parens/input.scss',
    data: 'a {b: calc(1px + (2px * var(--c)))}\n',
  },
  {
    name: 'precedence/preserved/additive_then_multiplicative/parens/output.css',
    data: 'a {\n  b: calc(1px + 2px * var(--c));\n}\n',
  },
  {
    name: 'precedence/preserved/additive_then_multiplicative/calculation/input.scss',
    data: 'a {b: calc(1px + calc(2px * var(--c)))}\n',
  },
  {
    name: 'precedence/preserved/additive_then_multiplicative/calculation/output.css',
    data: 'a {\n  b: calc(1px + 2px * var(--c));\n}\n',
  },
  {
    name: 'precedence/preserved/multiplicative_then_additive/parens/input.scss',
    data: 'a {b: calc(1px * (2 + var(--c)))}\n',
  },
  {
    name: 'precedence/preserved/multiplicative_then_additive/parens/output.css',
    data: 'a {\n  b: calc(1px * (2 + var(--c)));\n}\n',
  },
  {
    name: 'precedence/preserved/multiplicative_then_additive/calculation/input.scss',
    data: 'a {b: calc(1px * calc(2 + var(--c)))}\n',
  },
  {
    name: 'precedence/preserved/multiplicative_then_additive/calculation/output.css',
    data: 'a {\n  b: calc(1px * (2 + var(--c)));\n}\n',
  },
  {
    name: 'precedence/interpolation/parens/input.scss',
    data: 'a {b: calc((#{c}))}\n',
  },
  {
    name: 'precedence/interpolation/parens/output.css',
    data: 'a {\n  b: calc((c));\n}\n',
  },
  {
    name: 'precedence/interpolation/calculation/plain/input.scss',
    data: 'a {b: calc(calc(#{c}))}\n',
  },
  {
    name: 'precedence/interpolation/calculation/plain/output.css',
    data: 'a {\n  b: calc(c);\n}\n',
  },
  {
    name: 'precedence/interpolation/calculation/whitespace/input.scss',
    data: 'a {b: calc(calc(#{"c "}))}\n',
  },
  {
    name: 'precedence/interpolation/calculation/whitespace/output.css',
    data: 'a {\n  b: calc((c ));\n}\n',
  },
  {
    name: 'precedence/interpolation/calculation/slash/input.scss',
    data: 'a {b: calc(calc(#{"c/"}))}\n',
  },
  {
    name: 'precedence/interpolation/calculation/slash/output.css',
    data: 'a {\n  b: calc((c/));\n}\n',
  },
  {
    name: 'precedence/interpolation/calculation/asterisk/input.scss',
    data: 'a {b: calc(calc(#{"c*"}))}\n',
  },
  {
    name: 'precedence/interpolation/calculation/asterisk/output.css',
    data: 'a {\n  b: calc((c*));\n}\n',
  },
  {
    name: 'units/percent/and_known/input.scss',
    data: 'a {b: calc(1% + 1px)}\n',
  },
  {
    name: 'units/percent/and_known/output.css',
    data: 'a {\n  b: calc(1% + 1px);\n}\n',
  },
  {
    name: 'units/percent/and_unknown/input.scss',
    data: 'a {b: calc(1% + 1unknown)}\n',
  },
  {
    name: 'units/percent/and_unknown/output.css',
    data: 'a {\n  b: calc(1% + 1unknown);\n}\n',
  },
  {
    name: 'units/unknown/and_known/input.scss',
    data: 'a {b: calc(1unknown + 1px)}\n',
  },
  {
    name: 'units/unknown/and_known/output.css',
    data: 'a {\n  b: calc(1unknown + 1px);\n}\n',
  },
  {
    name: 'units/unknown/and_unknown/input.scss',
    data: 'a {b: calc(1unknown + 1other)}\n',
  },
  {
    name: 'units/unknown/and_unknown/output.css',
    data: 'a {\n  b: calc(1unknown + 1other);\n}\n',
  },
  {
    name: 'units/denominators/input.scss',
    data: 'a {b: calc(1/2px + 1/4px) * 1px}\n',
  },
  {
    name: 'units/denominators/output.css',
    data: 'a {\n  b: 0.75;\n}\n',
  },
  {
    name: 'units/multiplication/input.scss',
    data: '@use "sass:math";\na {b: math.div(calc(2px * 3px), 4px)}\n',
  },
  {
    name: 'units/multiplication/output.css',
    data: 'a {\n  b: 1.5px;\n}\n',
  },
  {
    name: 'units/division/input.scss',
    data: 'a {b: calc(1px / 2px)}\n',
  },
  {
    name: 'units/division/output.css',
    data: 'a {\n  b: 0.5;\n}\n',
  },
  {
    name: 'var/directly_parenthesized/input.scss',
    data: 'a {b: calc(1 + (var(--c)))}\n',
  },
  {
    name: 'var/directly_parenthesized/output.css',
    data: 'a {\n  b: calc(1 + (var(--c)));\n}\n',
  },
  {
    name: 'var/indirectly_parenthesized/input.scss',
    data: 'a {b: calc((1 + var(--c)))}\n',
  },
  {
    name: 'var/indirectly_parenthesized/output.css',
    data: 'a {\n  b: calc(1 + var(--c));\n}\n',
  },
  {
    name: 'var/calculation/input.scss',
    data: 'a {b: calc(1 + calc(var(--c)))}\n',
  },
  {
    name: 'var/calculation/output.css',
    data: 'a {\n  b: calc(1 + (var(--c)));\n}\n',
  },
  {
    name: 'sass_script/plus_string/lhs/input.scss',
    data: 'a {b: calc(1px + 1%) + ""}\n',
  },
  {
    name: 'sass_script/plus_string/lhs/output.css',
    data: 'a {\n  b: "calc(1px + 1%)";\n}\n',
  },
  {
    name: 'sass_script/plus_string/rhs/input.scss',
    data: 'a {b: "" + calc(1px + 1%)}\n',
  },
  {
    name: 'sass_script/plus_string/rhs/output.css',
    data: 'a {\n  b: "calc(1px + 1%)";\n}\n',
  },
]
