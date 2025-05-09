import type GulpClient from "gulp";
import {src,watch,dest} from "gulp";
import babel from "gulp-babel";
function tsxWatcher(srcGlobs:GulpClient.Globs,srcOptions={base:"./src/pages"},destPath:string):Promise<void>{
    return new Promise((resolve,reject)=>{
        function compiler(srcPath:GulpClient.Globs){
            src(srcPath,srcOptions)
            .pipe(babel({
                "presets": ["@babel/preset-react","@babel/preset-typescript","@babel/preset-env"]
            }))
            .pipe(dest(destPath));
        };
        compiler(srcGlobs);

        watch(srcGlobs,{usePolling:true}).on("change",(_path)=>{
            console.log(`[watch] ${_path}`);
            compiler(_path);
        })
        .on("ready",resolve)
        .on("error",reject)
    });
};

export default tsxWatcher;