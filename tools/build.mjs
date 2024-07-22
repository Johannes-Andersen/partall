import { execSync } from 'node:child_process'
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

  let content = ''
  let headerFd
  let srcFd

  try {
    if (fs.existsSync(headerPath)) {
      headerFd = fs.openSync(headerPath, 'r')
      const headerStat = fs.fstatSync(headerFd)
      const filterStat = fs.statSync(srcPath)
      const lastModified = new Date(
        Math.max(headerStat.mtimeMs, filterStat.mtimeMs),
      )
      const formattedDate = lastModified.toISOString()
      const gitCommitHash = execSync('git rev-parse --short HEAD')
        .toString()
        .trim()

      content += `${fs
        .readFileSync(headerFd, 'utf8')
        .replaceAll('{{last_modified}}', formattedDate)
        .replaceAll('{{version}}', gitCommitHash)}\n`

      fs.closeSync(headerFd)
    }

    if (fs.existsSync(srcPath)) {
      srcFd = fs.openSync(srcPath, 'r')
      content += fs.readFileSync(srcFd, 'utf8')
      fs.closeSync(srcFd)
    }

    fs.writeFileSync(destPath, content)
    console.info(`Built ${listName} successfully.`)
  } catch (e) {
    console.error(`Error building ${listName}: ${e.message}`)
    if (headerFd) fs.closeSync(headerFd)
    if (srcFd) fs.closeSync(srcFd)
  }
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
