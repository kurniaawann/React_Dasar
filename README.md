# ![React Props] <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

- React Props (Properties) adalah cara untuk mengirim data dari satu komponen ke komponen lain, biasanya dari parent ke child

```jsx
function HeaderhelloWorld({text = "ups lupa"}){
    // const text = "Hello World";
    const style = {
        color: "red",
        backgroundColor: "yellow"
    }
    return (
        <h1 style={style} >{text.toUpperCase()}</h1>
    )
}
```

**Kita bisa menambahkannya disini jika tidak kita tambahkan maka dia akan Menampilkan "ups Lupa"**

```jsx
export function HelloWorld(){
    return (
        <>
            <HeaderhelloWorld text="Gak Lupa"/>
            <ParagraphHelloWorld />
        </>
    )
}
```