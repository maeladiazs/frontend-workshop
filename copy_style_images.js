import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function copyStyleImages() {
  const mapping = [
    {
      src: 'C:\\Users\\ASUS VIvoBook\\.gemini\\antigravity-ide\\brain\\15befae5-5ddf-4b01-b0d9-80167873ee0e\\style_japandi_1791699095666.jpg',
      destName: 'style-japandi.jpg'
    },
    {
      src: 'C:\\Users\\ASUS VIvoBook\\.gemini\\antigravity-ide\\brain\\15befae5-5ddf-4b01-b0d9-80167873ee0e\\style_nordic_1791699117343.jpg',
      destName: 'style-nordic.jpg'
    },
    {
      src: 'C:\\Users\\ASUS VIvoBook\\.gemini\\antigravity-ide\\brain\\15befae5-5ddf-4b01-b0d9-80167873ee0e\\style_industrial_1791699140031.jpg',
      destName: 'style-industrial.jpg'
    }
  ];

  for (const item of mapping) {
    const pub = path.join(__dirname, 'public', item.destName);
    const srcAsset = path.join(__dirname, 'src', 'assets', item.destName);

    await sharp(item.src)
      .jpeg({ quality: 90 })
      .toFile(pub);

    await sharp(item.src)
      .jpeg({ quality: 90 })
      .toFile(srcAsset);

    console.log(`Copied ${item.destName} successfully`);
  }
}

copyStyleImages().catch(console.error);
