interface A_Btns_Props {
    name:string
}
const A_Btns = (props:A_Btns_Props) => {
    return (
        <header>{props.name}헤더내용</header>
    );
}