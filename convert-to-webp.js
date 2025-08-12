const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, 'src', 'assets'); // adjust path if needed
const outputDir = inputDir; // save in the same folder

const supportedExtensions = ['.jpg', '.jpeg', '.png'];

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const base = path.basename(file, ext);

  if (supportedExtensions.includes(ext)) {
    const inputFilePath = path.join(inputDir, file);
    const outputFilePath = path.join(outputDir, `${base}.webp`);

    sharp(inputFilePath)
      .webp({ quality: 80 })
      .toFile(outputFilePath)
      .then(() => console.log(`✅ Converted: ${file} → ${base}.webp`))
      .catch((err) => console.error(`❌ Error converting ${file}:`, err));
  }
});
