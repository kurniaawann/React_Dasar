export default function AlertButton({text}){
    function handleClick(){
        alert("tombol di klik")
    }

    return (
        <button onClick={handleClick}> {text} </button>
    )
}