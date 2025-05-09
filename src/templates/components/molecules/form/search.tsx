interface M_Search_Props {
    btnName:string
}
const M_Search = (props:M_Search_Props) => {
    return (
        <div>
            <input type="text" />
            <A_Btns name={props.btnName} ></A_Btns>
        </div>
    );
}