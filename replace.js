import fs from 'fs';
import path from 'path';

const dir = './src';
const replaceInFile = (filePath) => {
  let content = fs.readFileSync(filePath, 'utf8');
  // Replace blue with red
  content = content.replace(/blue/g, 'red');
  // Replace cyan with rose
  content = content.replace(/cyan/g, 'rose');
  // Replace specific hex and rgba values used in Hero.tsx
  content = content.replace(/rgba\(59,130,246/g, 'rgba(239,68,68');
  content = content.replace(/#3b82f6/g, '#ef4444');
  content = content.replace(/#06b6d4/g, '#f43f5e');
  fs.writeFileSync(filePath, content, 'utf8');
};

const walk = (dir) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      replaceInFile(fullPath);
    }
  }
};

walk(dir);
console.log('Colors replaced successfully!');
