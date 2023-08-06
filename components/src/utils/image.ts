import fs from 'fs';
import path from 'path';

export function findImagePaths(imageName: string, sourceDir: string): string[] {
  const imagePaths: string[] = [];

  function findImageRecursively(dir: string) {
    const files = fs.readdirSync(dir);
    files.forEach((file) => {
      const filePath = path.join(dir, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        findImageRecursively(filePath); // 递归查找子文件夹
      } else {
        if (path.basename(file, path.extname(file)) === imageName) {
          imagePaths.push(filePath);
        }
      }
    });
  }

  findImageRecursively(sourceDir);

  return imagePaths;
}

export function saveImagePathsToJSON(sourceDir: string, outputJSON: string): void {
  const imagePaths: string[] = [];

  function traverseDirectory(directory: string): void {
    const files: string[] = fs.readdirSync(directory);

    for (const file of files) {
      const filePath = path.join(directory, file);
      const stats = fs.statSync(filePath);

      if (stats.isDirectory()) {
        traverseDirectory(filePath); // 递归遍历子文件夹
      } else if (stats.isFile() && /\.(png|jpe?g|gif|svg)$/i.test(file)) {
        const relativePath = path.relative(sourceDir, filePath);
        imagePaths.push(relativePath);
      }
    }
  }

  traverseDirectory(sourceDir);

  fs.writeFileSync(outputJSON, JSON.stringify(imagePaths, null, 2));
  console.log('Image paths saved to JSON file:', outputJSON);
}

// 调用示例
// saveImagePathsToJSON('./source', 'image_paths.json');

export function getImagePathFromJSON(jsonFile: string, fileName: string): string {
    // const imagePaths: string[] = require(jsonFile);
    const response = fetch(jsonFile);
    const imagePaths: string[] = response.json();
  
    for (const imagePath of imagePaths) {
      if (path.basename(imagePath, path.extname(imagePath)) === fileName) {
        return imagePath;
      }
    }
  
    return ''; // 如果没有找到对应的图片路径，返回null或者其他合适的值
  }
  
  // 调用示例
//   const imagePath: string = getImagePathFromJSON('./image_paths.json', 'cat');
//   console.log('Image path for "cat":', imagePath);