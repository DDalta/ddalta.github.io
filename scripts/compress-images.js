import tinify from "tinify";
import fs from "fs";
import path from "path";
import 'dotenv/config'; 

tinify.key = process.env.TINIFY_KEY;

const inputDir = "./raw_assets"

fs.readdirSync(inputDir, {recursive: true}).forEach(file => {
    if (file.endsWith(".png") && !fs.existsSync(file)){
        const source = tinify.fromFile(path.join(inputDir, file));
        source.toFile(file);
        console.log(`Compressed: ${file}`);
    }
});
