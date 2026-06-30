import assert from 'node:assert'
import fs from 'node:fs/promises'
import {outdent} from 'outdent'
import writePrettierFile from 'write-prettier-file'
import {downloadFile, readZipFile} from './utilities.js'

const ZIP_URL = 'https://github.com/sass/sass-spec/archive/refs/heads/main.zip'
const CACHE_FILE = new URL('../.cache/sass-spec.zip', import.meta.url)
const DATA_DIRECTORY = new URL('../data/', import.meta.url)

await Promise.any(
  [ZIP_URL, `https://ghfast.top/${ZIP_URL}`].map((url) =>
    downloadFile({url, cacheFile: CACHE_FILE}),
  ),
)

const HRX_SECTION_SEPARATOR = `
<===>
================================================================================
`
const FILE_NAME_LINE_START = '<===> '

// https://github.com/sass/sass-spec/blob/main/lib/spec-directory/hrx.ts
function* parseHrxFile(hrxFile) {
  const text = hrxFile.data

  let file

  for (const section of text.split(HRX_SECTION_SEPARATOR)) {
    const lines = section.split('\n')

    for (const line of lines) {
      if (line.startsWith(FILE_NAME_LINE_START)) {
        if (file) {
          yield file
        }

        file = {
          name: line.slice(FILE_NAME_LINE_START.length),
          lines: [],
          get data() {
            return file.lines.join('\n')
          },
        }
      } else {
        file.lines.push(line)
      }
    }
  }

  if (file) {
    yield file
  }
}

function* getData() {
  const FIXTURE_FILENAME_PREFIX = 'sass-spec-main/spec/'

  for (const file of readZipFile(CACHE_FILE)) {
    if (!file.name.startsWith(FIXTURE_FILENAME_PREFIX)) {
      continue
    }

    let name = file.name.slice(FIXTURE_FILENAME_PREFIX.length)

    if (!file.name.endsWith('.hrx')) {
      continue
    }

    assert.ok(file.name.endsWith('.hrx'), `Unexpected file '${file.name}'.`)

    const testCase = {
      name,
      files: parseHrxFile(file)
        .map(({name, data}) => ({name, data}))
        .toArray(),
    }

    try {
      assert.ok(testCase.files.length !== 0)
    } catch (error) {
      console.log(file.data)
      throw error
    }

    yield testCase
  }
}

const data = getData().toArray()

await fs.rm(DATA_DIRECTORY, {recursive: true, force: true})
await Promise.all([
  ...data.map(async ({name, files}) => {
    await writePrettierFile(
      new URL(name + '.js', DATA_DIRECTORY),
      outdent`
        // https://github.com/sass/sass-spec/blob/HEAD/spec/${name}

        export default ${JSON.stringify(files, undefined, 2)}
      `,
    )
  }),
  writePrettierFile(
    new URL('./index.js', DATA_DIRECTORY),
    data
      .map(({name}) => `export {default as "${name}"} from "./${name}.js"`)
      .join('\n'),
  ),
])
