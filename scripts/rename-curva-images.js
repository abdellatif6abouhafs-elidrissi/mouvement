const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/ULTRA PC/mouvement/public/images/ultras/curva-sud-milano';
const files = fs.readdirSync(dir);

let tifoCount = 1;
files.forEach(file => {
  const oldPath = path.join(dir, file);
  let newName = file;
  
  if (file.includes('Curva Sud Milano')) {
    newName = 'logo.jpg';
  } else if (file.includes('AC Milan')) {
    newName = 'cover.jpg';
  } else if (file.includes('chargement') || file.includes('téléchargement')) {
    newName = `tifo-${tifoCount}.jpg`;
    tifoCount++;
  } else if (file.includes('milano') || file.includes('rossonera')) {
    newName = 'fans-1.jpg';
  } else if (file.includes('Instagram') || file.includes('banditi')) {
    newName = 'fans-2.jpg';
  } else if (file.includes('Milano') && !file.includes('logo')) {
    newName = 'fans-3.jpg';
  }
  
  if (newName !== file) {
    const newPath = path.join(dir, newName);
    try {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed: ${file} -> ${newName}`);
    } catch (e) {
      console.log(`Could not rename: ${file}`);
    }
  }
});

console.log('\nFinal files:');
fs.readdirSync(dir).forEach(f => console.log(f));
