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

# ![Sparated Syntax] <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

**Sparated Syntax agar lebih mempersingkat penulisan code**

```jsx
export function HelloWorld(){
    const props = {
        text: 'Coba Sparated syntax'
    }
    return (
        <>
            <HeaderhelloWorld {...props}/>
            <ParagraphHelloWorld />
        </>
    )
}
```

# ![React Nested Component] <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

**hal ini memungkinkan kita membuat component di dalam component**

```jsx
export default function Container({children}){
    return (
        <div>
            <h1>Kurniawan</h1>
            {children}
            <footer>
                <p>2025 kurniawan</p>
            </footer>
        </div>
    )
}
```

```jsx
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <HelloWorld/>
        </Container>
    </StrictMode>
)
```
