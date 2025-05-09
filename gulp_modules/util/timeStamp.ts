function getTimeStamp(isBar:boolean = false){
    const setMM = (num:number) => ((num<10)?"0":"")+num;
    const bar = (!isBar) ? {date:"",time:""} : {date:"-",time:":"};
    const now = new Date();
    const yyyymmdd = `${now.getFullYear()}${bar.date}${setMM(now.getMonth()+1)}${bar.date}${setMM(now.getDate())}`;
    const hhmmss = `${setMM(now.getHours())}${bar.time}${setMM(now.getMinutes())}${bar.time}${setMM(now.getSeconds())}`;
    return {yyyymmdd,hhmmss}
}
export default getTimeStamp;