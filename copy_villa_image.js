import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyVillaImage() {
  const inputPath = 'C:\\Users\\ASUS VIvoBook\\.gemini\\antigravity-ide\\brain\\15befae5-5ddf-4b01-b0d9-80167873ee0e\\rumah_langit_kayu_1791698656538.jpg';
  const outputPathPublic = path.join(__dirname, 'public', 'rumah-langit-kayu.jpg');
  const outputPathSrc = path.join(__dirname, 'src', 'assets', 'rumah-langit-kayu.jpg');

  await sharp(inputPath)
    .jpeg({ quality: 90 })
    .toFile(outputPathPublic);

  await sharp(inputPath)
    .jpeg({ quality: 90 })
    .toFile(outputPathSrc);

  console.log('Villa image successfully copied to public and assets!');
}

copyVillaImage().catch(console.error);
