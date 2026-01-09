import tinify from "tinify";
import fs, { readFileSync } from "fs";
import path from "path";
import { imageSize } from 'image-size'
import 'dotenv/config'; 

tinify.key = process.env.TINIFY_KEY;

const inputDir = "./raw_assets"

function compressImages() {
    try {
        fs.readdirSync(inputDir, {recursive: true}).forEach(file => {
            if (file.endsWith(".png") && !fs.existsSync(file)) {
                const inputPath = path.join(inputDir, file);
                const buffer = readFileSync(inputPath);
                const dimensions = imageSize(buffer);
                
                if (file.includes("project-thumbnails")) {
                    const source = tinify.fromFile(inputPath);
                    console.log(`Compressing ${file}...`);

                    const targetWidth = Math.round(dimensions.width * 0.5);
                    console.log(`Scaling ${file} to ${targetWidth}px wide...`);

                    const resized = source.resize({
                        method: "scale",
                        width: targetWidth
                    });

                    resized.toFile(file);
                } else {
                    tinify.fromFile(inputPath).toFile(file);
                }
            }
        });
    } catch (err) {
        console.error("Error compressing images", err);
    }
}

compressImages();