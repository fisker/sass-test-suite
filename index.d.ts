type File = {
  readonly name: string,
  readonly data: string,
}

type TestCase = {
  readonly name: string,
  readonly files: readonly File[],
}

declare const Suite: readonly TestCase[]

export default Suite
