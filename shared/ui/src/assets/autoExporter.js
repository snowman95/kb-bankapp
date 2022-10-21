const fs = require('fs')
const targetPath = 'src/assets/svgr'
const exportPath = `${targetPath}/index.ts`
const folders = []
const halfwayDir = {}

// 첫글자만 대문자로 변환
const capitalize = str => {
    return str.replace(/\b[a-z]/, letter => letter.toUpperCase())
}

// 폴더 목록 불러오기
const getFolderList = path => {
    fs.readdirSync(path, { withFileTypes: true }).forEach(folder => {
        if (folder.isDirectory()) {
            const fullDirPath = path + '/' + folder.name // 하위 폴더 경로 반환
            folders.push(fullDirPath.replace(targetPath, ''))
            getFolderList(fullDirPath)
        }
    })
}

// 거쳐가는 중간 디렉토리 골라내기
const getHalfwayDir = folders => {
    folders.forEach(path => {
        const part = path.split('/')
        if (part.length === 3) {
            halfwayDir[part[1]] = true
        }
    })
}

// 출력 포맷으로 변환
const convertPrintFormat = folders => {
    return folders.map(path => {
        const part = path.split('/')
        if (!(part.length === 2 && part[1] in halfwayDir)) {
            const process = part.map(item => capitalize(item)).join('')
            return `export * as ${process} from '.${path}'`
        }
    })
}
getFolderList(targetPath)
getHalfwayDir(folders)
const result = convertPrintFormat(folders).join('\n')

fs.writeFileSync(exportPath, result)
console.log(result)
