/**
 * Icon Generator Script
 * 
 * This script generates PWA icons in the required sizes from a source image.
 * 
 * Prerequisites:
 * npm install sharp
 * 
 * Usage:
 * node scripts/generate-icons.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Configuration
const SOURCE_IMAGE = path.join(__dirname, '../public/assets/images/mini-logo.png');
const OUTPUT_DIR = path.join(__dirname, '../public/assets/icons');

// Required icon sizes for PWA
const ICON_SIZES = [
  { size: 192, name: 'icon-192x192.png' },
  { size: 512, name: 'icon-512x512.png' },
  { size: 180, name: 'icon-180x180.png' }, // iOS
  { size: 152, name: 'icon-152x152.png' }, // iOS iPad
  { size: 144, name: 'icon-144x144.png' }, // Windows
  { size: 128, name: 'icon-128x128.png' },
  { size: 96, name: 'icon-96x96.png' },
  { size: 72, name: 'icon-72x72.png' },
];

async function generateIcons() {
  console.log('🎨 Starting icon generation...\n');

  // Check if source image exists
  if (!fs.existsSync(SOURCE_IMAGE)) {
    console.error(`❌ Source image not found: ${SOURCE_IMAGE}`);
    console.log('Please ensure mini-logo.png exists in public/assets/images/');
    process.exit(1);
  }

  // Create output directory if it doesn't exist
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✅ Created output directory: ${OUTPUT_DIR}\n`);
  }

  // Get source image info
  const metadata = await sharp(SOURCE_IMAGE).metadata();
  console.log(`📏 Source image: ${metadata.width}x${metadata.height} ${metadata.format}\n`);

  // Generate each icon size
  for (const { size, name } of ICON_SIZES) {
    try {
      const outputPath = path.join(OUTPUT_DIR, name);
      
      await sharp(SOURCE_IMAGE)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // Transparent background
        })
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generated: ${name} (${size}x${size})`);
    } catch (error) {
      console.error(`❌ Error generating ${name}:`, error.message);
    }
  }

  console.log('\n🎉 Icon generation complete!');
  console.log('\n📝 Next steps:');
  console.log('1. Check the generated icons in public/assets/icons/');
  console.log('2. Update public/manifest.json with the new icon paths');
  console.log('3. Test PWA installation on mobile devices');
}

// Run the generator
generateIcons().catch(error => {
  console.error('❌ Fatal error:', error);
  process.exit(1);
});

