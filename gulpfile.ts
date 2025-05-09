import {src,dest,task} from "gulp";
import concat from "gulp-concat";
import babel from "gulp-babel";

task("test",(done)=>{
    console.log("start");
    src("./src/templates/components/**/*.tsx")
    .pipe(concat("templates.components.tsx"))
    .pipe(babel({
        "presets": [
          "@babel/preset-react",
          "@babel/preset-typescript",
          "@babel/preset-env"
        ]
      }))
      .pipe(dest("./dist/js"))
      .on("end",()=>{
        console.log("end");
        done();
      })
});


task("serve",async (done)=>{
    const server = await import("./gulp_modules/servers/server");
    await server.start();
    done();
});