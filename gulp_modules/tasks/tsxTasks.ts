interface TaskCallback {
    (error?: Error | null): void;
}
function tsxCompile(done:TaskCallback){
    console.log("가져온 테스크1");
    done();
}
function tsxWatch(done:TaskCallback){
    console.log("가져온 테스크2");
    done();
}
export default {
    compile:tsxCompile,
    watch:tsxWatch
};