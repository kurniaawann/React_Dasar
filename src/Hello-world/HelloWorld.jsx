export function HelloWorld(){
    return (
        <>
            <HeaderhelloWorld />
            <ParagraphHelloWorld />
        </>
    )
}


function HeaderhelloWorld(){
    const text = "Hello World";
    const style = {
        color: "red",
        backgroundColor: "yellow"
    }
    return (
        <h1 style={style} >{text.toUpperCase()}</h1>
    )
}

 function ParagraphHelloWorld(){
    const text = "Hello World";
    return (
        <p>{text.toLowerCase()}</p>
    )
}


