import cpy from 'cpy'
import { resolve } from 'path'
 
const sourceDir = resolve(__dirname, '../src/icon/source')
//lib文件
const targetLib = resolve(__dirname, '../lib/icon/source')
//es文件
const targetEs = resolve(__dirname, '../es/icon/source')
console.log(sourceDir);
const buildImage = async () => {
    await cpy([`${sourceDir}/**/*`], targetLib);
    await cpy([`${sourceDir}/**/*`], targetEs);
}
buildImage()