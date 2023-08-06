import fs from 'fs';
import path from 'path';
import xml2js from 'xml2js';

// 定义要处理的根文件夹路径
const sourceRootPath = './src/icon/source';

// 递归遍历文件夹并处理 SVG 文件
const processFolder = (folderPath: string) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }

    // 遍历文件夹中的所有文件
    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      // 检查是否是文件夹
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error('Error reading file stats:', err);
          return;
        }

        if (stats.isDirectory()) {
          // 如果是文件夹，递归处理子文件夹
          processFolder(filePath);
        } else if (file.endsWith('.svg')) {
          // 如果是 SVG 文件，处理宽度和高度
          fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
              console.error(`Error reading SVG file ${file}:`, err);
              return;
            }

            // 解析 SVG 文件为 JavaScript 对象
            xml2js.parseString(data, (err, result) => {
              if (err) {
                console.error(`Error parsing SVG file ${file}:`, err);
                return;
              }

              // 修改 SVG 对象的宽度和高度为 14
              if (result.svg && result.svg.$) {
                result.svg.$.width = '14';
                result.svg.$.height = '14';
              }

              // 将修改后的 SVG 对象转换回 XML 字符串
              const builder = new xml2js.Builder();
              const modifiedData = builder.buildObject(result);

              // 将修改后的 SVG 字符串保存到原文件中
              fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
                if (err) {
                  console.error(`Error writing SVG file ${file}:`, err);
                } else {
                  console.log(`SVG file ${file} has been modified.`);
                }
              });
            });
          });
        }
      });
    });
  });
};

// 开始处理根文件夹
processFolder(sourceRootPath);