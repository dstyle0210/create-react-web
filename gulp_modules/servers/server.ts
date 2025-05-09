import express from "express";

const start = ():Promise<void> => {
    return new Promise((res,rej)=>{
        const app = express();
        const PORT = 3000;
        app.use("/",express.static("./dist"));
        app.listen(PORT,()=>{
            console.log(`[express:dist] listen start , port : ${PORT}`);
            res();
        });
    });
};

export {start};