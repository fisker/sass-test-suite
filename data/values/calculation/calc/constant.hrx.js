export default [
  {
    name: 'pi/alone/input.scss',
    data: 'a {b: calc(pi)}\n',
  },
  {
    name: 'pi/alone/output.css',
    data: 'a {\n  b: 3.1415926536;\n}\n',
  },
  {
    name: 'pi/equals_max_precision/input.scss',
    data: '// Verify that pi is equal to the maximum precision representable in a double.\na {b: calc(pi) == 3.141592653589793}\n',
  },
  {
    name: 'pi/equals_max_precision/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'pi/math/simplified/input.scss',
    data: 'a {b: calc(pi * 2)}\n',
  },
  {
    name: 'pi/math/simplified/output.css',
    data: 'a {\n  b: 6.2831853072;\n}\n',
  },
  {
    name: 'pi/math/unsimplified/input.scss',
    data: 'a {b: calc(pi * (1% + 1px))}\n',
  },
  {
    name: 'pi/math/unsimplified/output.css',
    data: 'a {\n  b: calc(3.1415926536 * (1% + 1px));\n}\n',
  },
  {
    name: 'pi/case_insensitive/input.scss',
    data: 'a {b: calc(pI)}\n',
  },
  {
    name: 'pi/case_insensitive/output.css',
    data: 'a {\n  b: 3.1415926536;\n}\n',
  },
  {
    name: 'e/alone/input.scss',
    data: 'a {b: calc(e)}\n',
  },
  {
    name: 'e/alone/output.css',
    data: 'a {\n  b: 2.7182818285;\n}\n',
  },
  {
    name: 'e/equals_max_precision/input.scss',
    data: '// Verify that e is equal to the maximum precision representable in a double.\na {b: calc(e) == 2.718281828459045}\n',
  },
  {
    name: 'e/equals_max_precision/output.css',
    data: 'a {\n  b: true;\n}\n',
  },
  {
    name: 'e/math/simplified/input.scss',
    data: 'a {b: calc(e * 2)}\n',
  },
  {
    name: 'e/math/simplified/output.css',
    data: 'a {\n  b: 5.4365636569;\n}\n',
  },
  {
    name: 'e/math/unsimplified/input.scss',
    data: 'a {b: calc(e * (1% + 1px))}\n',
  },
  {
    name: 'e/math/unsimplified/output.css',
    data: 'a {\n  b: calc(2.7182818285 * (1% + 1px));\n}\n',
  },
  {
    name: 'e/case_insensitive/input.scss',
    data: 'a {b: calc(E)}\n',
  },
  {
    name: 'e/case_insensitive/output.css',
    data: 'a {\n  b: 2.7182818285;\n}\n',
  },
  {
    name: 'infinity/alone/input.scss',
    data: 'a {b: calc(infinity)}\n',
  },
  {
    name: 'infinity/alone/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'infinity/type/input.scss',
    data: "@use 'sass:meta';\na {b: meta.type-of(calc(infinity))}\n",
  },
  {
    name: 'infinity/type/output.css',
    data: 'a {\n  b: number;\n}\n',
  },
  {
    name: 'infinity/math/simplified/input.scss',
    data: 'a {b: calc(infinity * 2)}\n',
  },
  {
    name: 'infinity/math/simplified/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'infinity/math/unsimplified/literal/input.scss',
    data: 'a {b: calc(infinity * (1% + 1px))}\n',
  },
  {
    name: 'infinity/math/unsimplified/literal/output.css',
    data: 'a {\n  b: calc(infinity * (1% + 1px));\n}\n',
  },
  {
    name: 'infinity/math/unsimplified/computed/input.scss',
    data: 'a {b: calc((1/0) * (1% + 1px))}\n',
  },
  {
    name: 'infinity/math/unsimplified/computed/output.css',
    data: 'a {\n  b: calc(infinity * (1% + 1px));\n}\n',
  },
  {
    name: 'infinity/math/unsimplified/from_variable/input.scss',
    data: "@use 'sass:math';\n$var: math.div(1, 0);\na {b: calc($var * (1% + 1px))}\n",
  },
  {
    name: 'infinity/math/unsimplified/from_variable/output.css',
    data: 'a {\n  b: calc(infinity * (1% + 1px));\n}\n',
  },
  {
    name: 'infinity/case_insensitive/input.scss',
    data: 'a {b: calc(InFiNiTy)}\n',
  },
  {
    name: 'infinity/case_insensitive/output.css',
    data: 'a {\n  b: calc(infinity);\n}\n',
  },
  {
    name: 'minus_infinity/alone/input.scss',
    data: 'a {b: calc(-infinity)}\n',
  },
  {
    name: 'minus_infinity/alone/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'minus_infinity/type/input.scss',
    data: "@use 'sass:meta';\na {b: meta.type-of(calc(-infinity))}\n",
  },
  {
    name: 'minus_infinity/type/output.css',
    data: 'a {\n  b: number;\n}\n',
  },
  {
    name: 'minus_infinity/math/simplified/input.scss',
    data: 'a {b: calc(-infinity * 2)}\n',
  },
  {
    name: 'minus_infinity/math/simplified/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'minus_infinity/math/unsimplified/literal/input.scss',
    data: 'a {b: calc(-infinity * (1% + 1px))}\n',
  },
  {
    name: 'minus_infinity/math/unsimplified/literal/output.css',
    data: 'a {\n  b: calc(-infinity * (1% + 1px));\n}\n',
  },
  {
    name: 'minus_infinity/math/unsimplified/computed/input.scss',
    data: 'a {b: calc((-1/0) * (1% + 1px))}\n',
  },
  {
    name: 'minus_infinity/math/unsimplified/computed/output.css',
    data: 'a {\n  b: calc(-infinity * (1% + 1px));\n}\n',
  },
  {
    name: 'minus_infinity/math/unsimplified/from_variable/input.scss',
    data: "@use 'sass:math';\n$var: math.div(-1, 0);\na {b: calc($var * (1% + 1px))}\n",
  },
  {
    name: 'minus_infinity/math/unsimplified/from_variable/output.css',
    data: 'a {\n  b: calc(-infinity * (1% + 1px));\n}\n',
  },
  {
    name: 'minus_infinity/case_insensitive/input.scss',
    data: 'a {b: calc(-iNfInItY)}\n',
  },
  {
    name: 'minus_infinity/case_insensitive/output.css',
    data: 'a {\n  b: calc(-infinity);\n}\n',
  },
  {
    name: 'nan/alone/input.scss',
    data: 'a {b: calc(NaN)}\n',
  },
  {
    name: 'nan/alone/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'nan/type/input.scss',
    data: "@use 'sass:meta';\na {b: meta.type-of(calc(NaN))}\n",
  },
  {
    name: 'nan/type/output.css',
    data: 'a {\n  b: number;\n}\n',
  },
  {
    name: 'nan/math/simplified/input.scss',
    data: 'a {b: calc(NaN * 2)}\n',
  },
  {
    name: 'nan/math/simplified/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'nan/math/unsimplified/literal/input.scss',
    data: 'a {b: calc(NaN * (1% + 1px))}\n',
  },
  {
    name: 'nan/math/unsimplified/literal/output.css',
    data: 'a {\n  b: calc(NaN * (1% + 1px));\n}\n',
  },
  {
    name: 'nan/math/unsimplified/computed/input.scss',
    data: 'a {b: calc((0/0) * (1% + 1px))}\n',
  },
  {
    name: 'nan/math/unsimplified/computed/output.css',
    data: 'a {\n  b: calc(NaN * (1% + 1px));\n}\n',
  },
  {
    name: 'nan/math/unsimplified/from_variable/input.scss',
    data: "@use 'sass:math';\n$var: math.div(0, 0);\na {b: calc($var * (1% + 1px))}\n",
  },
  {
    name: 'nan/math/unsimplified/from_variable/output.css',
    data: 'a {\n  b: calc(NaN * (1% + 1px));\n}\n',
  },
  {
    name: 'nan/case_insensitive/input.scss',
    data: 'a {b: calc(nan)}\n',
  },
  {
    name: 'nan/case_insensitive/output.css',
    data: 'a {\n  b: calc(NaN);\n}\n',
  },
  {
    name: 'precedence/after_plus/input.scss',
    data: 'a {b: calc(1% + (infinity * 1px))}\n',
  },
  {
    name: 'precedence/after_plus/output.css',
    data: 'a {\n  b: calc(1% + infinity * 1px);\n}\n',
  },
  {
    name: 'precedence/after_minus/input.scss',
    data: 'a {b: calc(1% - (infinity * 1px))}\n',
  },
  {
    name: 'precedence/after_minus/output.css',
    data: 'a {\n  b: calc(1% - infinity * 1px);\n}\n',
  },
  {
    name: 'precedence/after_times/input.scss',
    data: 'a {b: calc(var(--c) * (infinity * 1px))}\n',
  },
  {
    name: 'precedence/after_times/output.css',
    data: 'a {\n  b: calc(var(--c) * infinity * 1px);\n}\n',
  },
  {
    name: 'precedence/after_divide/unit/input.scss',
    data: 'a {b: calc(var(--c) / (infinity * 1px))}\n',
  },
  {
    name: 'precedence/after_divide/unit/output.css',
    data: 'a {\n  b: calc(var(--c) / (infinity * 1px));\n}\n',
  },
  {
    name: 'precedence/after_divide/no_unit/input.scss',
    data: 'a {b: calc(var(--c) / infinity)}\n',
  },
  {
    name: 'precedence/after_divide/no_unit/output.css',
    data: 'a {\n  b: calc(var(--c) / infinity);\n}\n',
  },
  {
    name: 'undefined/alone/input.scss',
    data: 'a {b: calc(c)}\n',
  },
  {
    name: 'undefined/alone/output.css',
    data: 'a {\n  b: calc(c);\n}\n',
  },
  {
    name: 'undefined/math/input.scss',
    data: 'a {b: calc(c * 2)}\n',
  },
  {
    name: 'undefined/math/output.css',
    data: 'a {\n  b: calc(c * 2);\n}\n',
  },
]
