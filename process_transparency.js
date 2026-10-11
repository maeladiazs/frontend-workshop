import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function removeBlackBackground() {
  const inputPath = path.join(__dirname, 'src', 'assets', 'logo-m.jpg');
  const outputPathPublic = path.join(__dirname, 'public', 'logo-m.png');
  const outputPathSrc = path.join(__dirname, 'src', 'assets', 'logo-m.png');

  console.log('Reading image from:', inputPath);

  // Load raw pixels
  const { data, info } = await sharp(inputPath)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  const { width, height, channels } = info;
  console.log(`Image size: ${width}x${height}, channels: ${channels}`);

  // Alpha keying: background is pure black (values near 0)
  for (let i = 0; i < data.length; i += channels) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];

    const maxVal = Math.max(r, g, b);

    if (maxVal <= 18) {
      data[i + 3] = 0;
    } else if (maxVal <= 65) {
      const factor = (maxVal - 18) / (65 - 18);
      data[i + 3] = Math.round(factor * 255);
    } else {
      data[i + 3] = 255;
    }
  }

  // Save back as high quality PNG
  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPathPublic);

  await sharp(data, {
    raw: {
      width,
      height,
      channels
    }
  })
    .png({ quality: 100, compressionLevel: 9 })
    .toFile(outputPathSrc);

  console.log('Transparent PNG successfully created at:');
  console.log('->', outputPathPublic);
  console.log('->', outputPathSrc);
}

removeBlackBackground().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
