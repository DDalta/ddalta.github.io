import tinify from "tinify";
import fs, { readFileSync } from "fs";
import path from "path";
import { imageSize } from 'image-size'
import 'dotenv/config'; 

tinify.key = process.env.TINIFY_KEY;

const inputDir = "./raw_assets"

// NOTE: output is "file" since looping though the input directory auto removes the "raw_assets" folder in path. (idk why)
function compressImages() {
    try {
        fs.readdirSync(inputDir, {recursive: true}).forEach(file => {
            if (file.endsWith(".png") && !fs.existsSync(file)) {
                const dir = path.dirname(file);
                fs.mkdirSync(dir, { recursive: true });

                const inputPath = path.join(inputDir, file);
                
                if (file.includes("project-thumbnails")) {
                    const buffer = readFileSync(inputPath);
                    const dimensions = imageSize(buffer);

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