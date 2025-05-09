interface TaskCallback {
    (error?: Error | null): void;
}
function tsxCompiler(done:TaskCallback){
    console.log("가져온 테스크");
    done();
}
export default tsxCompiler;