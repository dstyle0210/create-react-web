import {src,dest,watch,task, series} from "gulp";
import concat from "gulp-concat";
import babel from "gulp-babel";

// 



// task("test",async (done)=>{
//     console.log("start");
//     await tsxCompiler("./src/templates/components/**/*.tsx","templates.components.tsx","./dist/js");
//     await tsxCompiler("./src/templates/partials/**/*.tsx","templates.partials.tsx","./dist/js");
//     await tsxWatcher("./src/pages/**/*.tsx",{base:"./src/pages"},"./dist/pages");
//     done();
// });

import tsxTasks from "./gulp_modules/tasks/tsxTasks";
task("tsx:compile",tsxTasks.compile);
task("tsx:watch",tsxTasks.watch);
task("tsx",series("tsx:compile","tsx:watch"));
/*

task("ts:compile")
task("ts:watch")
task("ts",series("ts:compile","ts:watch"));

task("html:compile");
task("html:watch");
task("html",series("html:compile","html:watch"));

task("scss:compile");
task("scss:watch");
task("scss",series("scss:compile","scss:watch"));

task("dev")


task("serve",async (done)=>{
    const server = await import("./gulp_modules/servers/server");
    await server.start();
    done();
});
*/