import fs from 'node:fs'
import path from 'node:path'
import { parseArgs } from 'node:util'

const {
  values: { list },
} = parseArgs({
  options: {
    list: {
      type: 'string',
      short: 'l',
      default: undefined,
    },
  },
})

console.info(list ? `Building list: ${list}` : 'Building all lists')

if (!fs.existsSync('out')) {
  console.log('Creating "out" directory')
  fs.mkdirSync('out')
}

const buildList = (listName) => {
  console.info(`Building ${listName}...`)
  const srcPath = path.join('filters', listName, 'filters.txt')
  const headerPath = path.join('filters', listName, 'header.txt')
  const destPath = path.join('out', `${listName}.txt`)

  if (!fs.existsSync(srcPath)) {
    console.warn(`Source file for ${listName} does not exist. Skipping...`)
    return
  }

  let content = ''
  if (fs.existsSync(headerPath)) {
    const headerStat = fs.statSync(headerPath)
    const filterStat = fs.statSync(srcPath)
    const lastModified = new Date(
      Math.max(headerStat.mtimeMs, filterStat.mtimeMs),
    )
    const formattedDate = lastModified.toISOString()

    content +=
      fs
        .readFileSync(headerPath, 'utf8')
        .replace('{{last_modified}}', formattedDate) + '\n'
  }
  content += fs.readFileSync(srcPath, 'utf8')

  fs.writeFileSync(destPath, content)
  console.info(`Built ${listName} successfully.`)
}

const buildAllLists = () => {
  const lists = fs.readdirSync('filters')
  lists.forEach((listName) => {
    if (fs.lstatSync(path.join('filters', listName)).isDirectory()) {
      buildList(listName)
    }
  })
}

if (list) {
  buildList(list)
} else {
  buildAllLists()
}

console.info('Done')
process.exit(0)
