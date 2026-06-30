export default [
  {
    name: 'with_sass/adjacent/before/direct/input.scss',
    data: 'a {b: if(sass(true) var(--and-clause): c)}\n',
  },
  {
    name: 'with_sass/adjacent/before/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(sass(true) var(--and-clause): c)}\n  |                     ^^^^^^^^^^^^^^^^^ arbitrary substitution\n  |          ========== sass() expression\n  '\n  input.scss 1:21  root stylesheet\n",
  },
  {
    name: 'with_sass/adjacent/before/nested/input.scss',
    data: 'a {b: if((sass(true)) var(--and-clause): c)}\n',
  },
  {
    name: 'with_sass/adjacent/before/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if((sass(true)) var(--and-clause): c)}\n  |                       ^^^^^^^^^^^^^^^^^ arbitrary substitution\n  |           ========== sass() expression\n  '\n  input.scss 1:23  root stylesheet\n",
  },
  {
    name: 'with_sass/adjacent/after/1/direct/input.scss',
    data: 'a {b: if(var(--not) sass(true): c)}\n',
  },
  {
    name: 'with_sass/adjacent/after/1/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(var(--not) sass(true): c)}\n  |          ^^^^^^^^^^ arbitrary substitution\n  |                     ========== sass() expression\n  '\n  input.scss 1:10  root stylesheet\n",
  },
  {
    name: 'with_sass/adjacent/after/1/nested/input.scss',
    data: 'a {b: if(var(--not) (sass(true)): c)}\n',
  },
  {
    name: 'with_sass/adjacent/after/1/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(var(--not) (sass(true)): c)}\n  |          ^^^^^^^^^^ arbitrary substitution\n  |                      ========== sass() expression\n  '\n  input.scss 1:10  root stylesheet\n",
  },
  {
    name: 'with_sass/adjacent/after/2/direct/input.scss',
    data: 'a {b: if(var(--clause) var(--and) sass(true): c)}\n',
  },
  {
    name: 'with_sass/adjacent/after/2/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(var(--clause) var(--and) sass(true): c)}\n  |          ^^^^^^^^^^^^^ arbitrary substitution\n  |                                   ========== sass() expression\n  '\n  input.scss 1:10  root stylesheet\n",
  },
  {
    name: 'with_sass/adjacent/after/2/nested/input.scss',
    data: 'a {b: if(var(--clause) var(--and) (sass(true)): c)}\n',
  },
  {
    name: 'with_sass/adjacent/after/2/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(var(--clause) var(--and) (sass(true)): c)}\n  |          ^^^^^^^^^^^^^ arbitrary substitution\n  |                                    ========== sass() expression\n  '\n  input.scss 1:10  root stylesheet\n",
  },
  {
    name: 'with_sass/and/before/operator/direct/input.scss',
    data: 'a {b: if(sass(true) and css(1) var(--and) css(2): c)}\n',
  },
  {
    name: 'with_sass/and/before/operator/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(sass(true) and css(1) var(--and) css(2): c)}\n  |                                ^^^^^^^^^^ arbitrary substitution\n  |          ========== sass() expression\n  '\n  input.scss 1:32  root stylesheet\n",
  },
  {
    name: 'with_sass/and/before/operator/nested/input.scss',
    data: 'a {b: if((sass(true)) and css(1) var(--and) css(2): c)}\n',
  },
  {
    name: 'with_sass/and/before/operator/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if((sass(true)) and css(1) var(--and) css(2): c)}\n  |                                  ^^^^^^^^^^ arbitrary substitution\n  |           ========== sass() expression\n  '\n  input.scss 1:34  root stylesheet\n",
  },
  {
    name: 'with_sass/and/before/clause/direct/input.scss',
    data: 'a {b: if(sass(true) and css(1) var(--and-clause): c)}\n',
  },
  {
    name: 'with_sass/and/before/clause/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(sass(true) and css(1) var(--and-clause): c)}\n  |                                ^^^^^^^^^^^^^^^^^ arbitrary substitution\n  |          ========== sass() expression\n  '\n  input.scss 1:32  root stylesheet\n",
  },
  {
    name: 'with_sass/and/before/clause/nested/input.scss',
    data: 'a {b: if((sass(true)) and css(1) var(--and-clause): c)}\n',
  },
  {
    name: 'with_sass/and/before/clause/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if((sass(true)) and css(1) var(--and-clause): c)}\n  |                                  ^^^^^^^^^^^^^^^^^ arbitrary substitution\n  |           ========== sass() expression\n  '\n  input.scss 1:34  root stylesheet\n",
  },
  {
    name: 'with_sass/and/after/operator/direct/input.scss',
    data: 'a {b: if(css(1) and css(2) var(--and) sass(true): c)}\n',
  },
  {
    name: 'with_sass/and/after/operator/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(css(1) and css(2) var(--and) sass(true): c)}\n  |                            ^^^^^^^^^^ arbitrary substitution\n  |                                       ========== sass() expression\n  '\n  input.scss 1:28  root stylesheet\n",
  },
  {
    name: 'with_sass/and/after/operator/nested/input.scss',
    data: 'a {b: if(css(1) and css(2) var(--and) (sass(true)): c)}\n',
  },
  {
    name: 'with_sass/and/after/operator/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(css(1) and css(2) var(--and) (sass(true)): c)}\n  |                            ^^^^^^^^^^ arbitrary substitution\n  |                                        ========== sass() expression\n  '\n  input.scss 1:28  root stylesheet\n",
  },
  {
    name: 'with_sass/and/after/clause/direct/input.scss',
    data: 'a {b: if(css(1) and var(--clause-and) sass(true): c)}\n',
  },
  {
    name: 'with_sass/and/after/clause/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(css(1) and var(--clause-and) sass(true): c)}\n  |                     ^^^^^^^^^^^^^^^^^ arbitrary substitution\n  |                                       ========== sass() expression\n  '\n  input.scss 1:21  root stylesheet\n",
  },
  {
    name: 'with_sass/and/after/clause/nested/input.scss',
    data: 'a {b: if(css(1) and var(--clause-and) (sass(true)): c)}\n',
  },
  {
    name: 'with_sass/and/after/clause/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(css(1) and var(--clause-and) (sass(true)): c)}\n  |                     ^^^^^^^^^^^^^^^^^ arbitrary substitution\n  |                                        ========== sass() expression\n  '\n  input.scss 1:21  root stylesheet\n",
  },
  {
    name: 'with_sass/or/before/operator/direct/input.scss',
    data: 'a {b: if(sass(true) or css(1) var(--or) css(2): c)}\n',
  },
  {
    name: 'with_sass/or/before/operator/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(sass(true) or css(1) var(--or) css(2): c)}\n  |                               ^^^^^^^^^ arbitrary substitution\n  |          ========== sass() expression\n  '\n  input.scss 1:31  root stylesheet\n",
  },
  {
    name: 'with_sass/or/before/operator/nested/input.scss',
    data: 'a {b: if((sass(true)) or css(1) var(--or) css(2): c)}\n',
  },
  {
    name: 'with_sass/or/before/operator/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if((sass(true)) or css(1) var(--or) css(2): c)}\n  |                                 ^^^^^^^^^ arbitrary substitution\n  |           ========== sass() expression\n  '\n  input.scss 1:33  root stylesheet\n",
  },
  {
    name: 'with_sass/or/before/clause/direct/input.scss',
    data: 'a {b: if(sass(true) or css(1) var(--or-clause): c)}\n',
  },
  {
    name: 'with_sass/or/before/clause/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(sass(true) or css(1) var(--or-clause): c)}\n  |                               ^^^^^^^^^^^^^^^^ arbitrary substitution\n  |          ========== sass() expression\n  '\n  input.scss 1:31  root stylesheet\n",
  },
  {
    name: 'with_sass/or/before/clause/nested/input.scss',
    data: 'a {b: if((sass(true)) or css(1) var(--or-clause): c)}\n',
  },
  {
    name: 'with_sass/or/before/clause/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if((sass(true)) or css(1) var(--or-clause): c)}\n  |                                 ^^^^^^^^^^^^^^^^ arbitrary substitution\n  |           ========== sass() expression\n  '\n  input.scss 1:33  root stylesheet\n",
  },
  {
    name: 'with_sass/or/after/operator/direct/input.scss',
    data: 'a {b: if(css(1) or css(2) var(--or) sass(true): c)}\n',
  },
  {
    name: 'with_sass/or/after/operator/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(css(1) or css(2) var(--or) sass(true): c)}\n  |                           ^^^^^^^^^ arbitrary substitution\n  |                                     ========== sass() expression\n  '\n  input.scss 1:27  root stylesheet\n",
  },
  {
    name: 'with_sass/or/after/operator/nested/input.scss',
    data: 'a {b: if(css(1) or css(2) var(--or) (sass(true)): c)}\n',
  },
  {
    name: 'with_sass/or/after/operator/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(css(1) or css(2) var(--or) (sass(true)): c)}\n  |                           ^^^^^^^^^ arbitrary substitution\n  |                                      ========== sass() expression\n  '\n  input.scss 1:27  root stylesheet\n",
  },
  {
    name: 'with_sass/or/after/clause/direct/input.scss',
    data: 'a {b: if(css(1) or var(--clause-or) sass(true): c)}\n',
  },
  {
    name: 'with_sass/or/after/clause/direct/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(css(1) or var(--clause-or) sass(true): c)}\n  |                    ^^^^^^^^^^^^^^^^ arbitrary substitution\n  |                                     ========== sass() expression\n  '\n  input.scss 1:20  root stylesheet\n",
  },
  {
    name: 'with_sass/or/after/clause/nested/input.scss',
    data: 'a {b: if(css(1) or var(--clause-or) (sass(true)): c)}\n',
  },
  {
    name: 'with_sass/or/after/clause/nested/error',
    data: "Error: if() conditions with arbitrary substitutions may not contain sass() expressions.\n  ,\n1 | a {b: if(css(1) or var(--clause-or) (sass(true)): c)}\n  |                    ^^^^^^^^^^^^^^^^ arbitrary substitution\n  |                                      ========== sass() expression\n  '\n  input.scss 1:20  root stylesheet\n",
  },
  {
    name: 'not/not/input.scss',
    data: 'a {b: if(not var(--not) css(): c)}\n',
  },
  {
    name: 'not/not/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(not var(--not) css(): c)}\n  |                         ^\n  \'\n  input.scss 1:25  root stylesheet\n',
  },
  {
    name: 'not/operator/input.scss',
    data: 'a {b: if(not css(1) var(--and) css(2): c)}\n',
  },
  {
    name: 'not/operator/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(not css(1) var(--and) css(2): c)}\n  |                     ^\n  \'\n  input.scss 1:21  root stylesheet\n',
  },
  {
    name: 'not/else/input.scss',
    data: 'a {b: if(var(--not) else: c)}\n',
  },
  {
    name: 'not/else/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(var(--not) else: c)}\n  |                         ^\n  \'\n  input.scss 1:25  root stylesheet\n',
  },
  {
    name: 'and/or/input.scss',
    data: 'a {b: if(css(1) and css(2) var(--and) vss(3) or css(4): c)}\n',
  },
  {
    name: 'and/or/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(css(1) and css(2) var(--and) vss(3) or css(4): c)}\n  |                                              ^\n  \'\n  input.scss 1:46  root stylesheet\n',
  },
  {
    name: 'and/not/input.scss',
    data: 'a {b: if(css(1) var(--and) not css(2): c)}\n',
  },
  {
    name: 'and/not/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(css(1) var(--and) not css(2): c)}\n  |                               ^\n  \'\n  input.scss 1:31  root stylesheet\n',
  },
  {
    name: 'and/else/input.scss',
    data: 'a {b: if(css() var(--and) else: c)}\n',
  },
  {
    name: 'and/else/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(css() var(--and) else: c)}\n  |                               ^\n  \'\n  input.scss 1:31  root stylesheet\n',
  },
  {
    name: 'or/and/input.scss',
    data: 'a {b: if(css(1) or css(2) var(--or) vss(3) and css(4): c)}\n',
  },
  {
    name: 'or/and/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(css(1) or css(2) var(--or) vss(3) and css(4): c)}\n  |                                            ^\n  \'\n  input.scss 1:44  root stylesheet\n',
  },
  {
    name: 'or/not/input.scss',
    data: 'a {b: if(css(1) var(--or) not css(2): c)}\n',
  },
  {
    name: 'or/not/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(css(1) var(--or) not css(2): c)}\n  |                              ^\n  \'\n  input.scss 1:30  root stylesheet\n',
  },
  {
    name: 'or/else/input.scss',
    data: 'a {b: if(css() var(--or) else: c)}\n',
  },
  {
    name: 'or/else/error',
    data: 'Error: expected "(".\n  ,\n1 | a {b: if(css() var(--or) else: c)}\n  |                              ^\n  \'\n  input.scss 1:30  root stylesheet\n',
  },
  {
    name: 'paren/not/input.scss',
    data: 'a {b: if((var(--not)) css(): c)}\n',
  },
  {
    name: 'paren/not/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if((var(--not)) css(): c)}\n  |                       ^\n  \'\n  input.scss 1:23  root stylesheet\n',
  },
  {
    name: 'paren/operator/input.scss',
    data: 'a {b: if(css(1) (var(--and)) css(2): c)}\n',
  },
  {
    name: 'paren/operator/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(css(1) (var(--and)) css(2): c)}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
  {
    name: 'paren/clause/input.scss',
    data: 'a {b: if(css(1) (var(--and-clause)): c)}\n',
  },
  {
    name: 'paren/clause/error',
    data: 'Error: expected ":".\n  ,\n1 | a {b: if(css(1) (var(--and-clause)): c)}\n  |                 ^\n  \'\n  input.scss 1:17  root stylesheet\n',
  },
]
