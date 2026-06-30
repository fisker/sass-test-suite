import {expectType} from 'tsd'
import testCases from './index.js'

for (const testCase of testCases) {
  expectType<string>(testCase.name)

  for (const file of testCase.files) {
    expectType<string>(file.name)
    expectType<string>(file.data)
  }
}
