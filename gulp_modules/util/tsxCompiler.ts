import type GulpClient from "gulp";
import {src,dest} from "gulp";
import concat from "gulp-concat";
import babel from "gulp-babel";
import timeStamp from "./timeStamp";
function tsxCompiler(srcGlobs:GulpClient.Globs,concatName:string,destPath:string):Promise<void>{
    return new Promise((resolve,reject)=>{
        src(srcGlobs)
        .pipe(concat(concatName))
        .pipe(babel({
            "presets": ["@babel/preset-react","@babel/preset-typescript","@babel/preset-env"]
        }))
        .pipe(dest(destPath))
        .on("end",()=>{
            console.log(`[${timeStamp(true).hhmmss}] [tsxCompiler] ${srcGlobs}`);
            resolve();
        })
        .on("error",reject)
    });
};

export default tsxCompiler;