export function SayHelloForm(){

    function handleClick(e){
        e.preventDefault();
        const name = document.getElementById("input_name").value
        document.getElementById("text_hello").innerHTML = `Hello ${name}`
    }

    return (
        <div>
            <form action="">
                <input id="input_name"/>
                <button onClick={handleClick}></button>
                <h1 id="text_hello">Hello World</h1>
            </form>
        </div>
    )
}