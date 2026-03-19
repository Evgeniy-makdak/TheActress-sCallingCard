const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const IMAGES_DIR = path.join(__dirname, "../src/assets/images");
const MAX_DIMENSION = 1280;
const JPG_QUALITY = 85;
const PNG_QUALITY = 90;

const images = [
  { file: "mainphoto.png", output: "mainphoto.png", maxDim: 1280 }, // keep PNG for transparency
  { file: "Prayer.png", output: "Prayer.jpg", maxDim: 960 },
  { file: "TheLittleWitch.png", output: "TheLittleWitch.jpg", maxDim: 720 },
  { file: "placesInSoty.png", output: "placesInSoty.jpg", maxDim: 1280 },
  { file: "byography.jpg", output: "byography.jpg", maxDim: 1280 },
  { file: "contacts.jpg", output: "contacts.jpg", maxDim: 1280 },
  { file: "portfolio.jpg", output: "portfolio.jpg", maxDim: 1280 },
  { file: "resume.jpg", output: "resume.jpg", maxDim: 1280 },
  { file: "videoPage.jpg", output: "videoPage.jpg", maxDim: 1280 },
  { file: "TheQueenOfSpades.jpg", output: "TheQueenOfSpades.jpg", maxDim: 1280 },
];

async function compressImage({ file, output, maxDim }) {
  const inputPath = path.join(IMAGES_DIR, file);
  const outputPath = path.join(IMAGES_DIR, output);

  if (!fs.existsSync(inputPath)) {
    console.log(`Skip ${file}: not found`);
    return;
  }

  const inputStats = fs.statSync(inputPath);
  const isJpg = output.endsWith(".jpg");
  const sameFile = inputPath === outputPath;
  const writePath = sameFile ? outputPath + ".tmp" : outputPath;

  let pipeline = sharp(inputPath).resize(maxDim, maxDim, {
    fit: "inside",
    withoutEnlargement: true,
  });

  if (isJpg) {
    pipeline = pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true });
  } else {
    pipeline = pipeline.png({ quality: PNG_QUALITY, compressionLevel: 9 });
  }

  await pipeline.toFile(writePath);
  if (sameFile) {
    fs.renameSync(writePath, outputPath);
  }
  const outputStats = fs.statSync(outputPath);

  const saved = ((1 - outputStats.size / inputStats.size) * 100).toFixed(1);
  console.log(
    `${file}: ${(inputStats.size / 1024).toFixed(0)}KB → ${(outputStats.size / 1024).toFixed(0)}KB (${saved}% saved)`
  );

  if (file !== output) {
    fs.unlinkSync(inputPath);
    console.log(`  Removed original ${file}`);
  }
}

async function main() {
  console.log("Compressing images...\n");
  for (const img of images) {
    try {
      await compressImage(img);
    } catch (err) {
      console.error(`Error processing ${img.file}:`, err.message);
    }
  }
  console.log("\nDone.");
}

main();
