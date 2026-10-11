import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyTourImage() {
  const inputPath = 'C:\\Users\\ASUS VIvoBook\\.gemini\\antigravity-ide\\brain\\15befae5-5ddf-4b01-b0d9-80167873ee0e\\galeri_senopati_360_1791699873978.jpg';
  const pub = path.join(__dirname, 'public', 'galeri-senopati-360.jpg');
  const srcAsset = path.join(__dirname, 'src', 'assets', 'galeri-senopati-360.jpg');

  await sharp(inputPath)
    .jpeg({ quality: 90 })
    .toFile(pub);

  await sharp(inputPath)
    .jpeg({ quality: 90 })
    .toFile(srcAsset);

  console.log('Galeri Senopati 360 photo copied successfully!');
}

copyTourImage().catch(console.error);
