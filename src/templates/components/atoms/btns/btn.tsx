interface A_Btns_Props {
    name:string
}
const A_Btns = (props:A_Btns_Props) => {
    return (
        <button>{props.name}버튼</button>
    );
}