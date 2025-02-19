export default function ToolBar({onClick}){
    return (
        <div onClick={onClick} style={{backgroundColor: "red"}} >
            <button onClick={onClick} >frist</button>
            <button onClick={onClick} >Seccound</button>
        </div>
    )
}