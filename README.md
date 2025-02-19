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

# ![React Conditional] <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

**Seperti pada bahasa pemrograman pada umumnya ini untuk mengatur jika true melakukan apa dan jika false melakukan apa**

**Todo.jsx**

```jsx
export default function Todo({text, isComplate}){
    if (isComplate) {
       return (
        <li>
            <del>
                {text}
            </del>
        </li>
       )
    }else {
        return (
            <li>{text}</li>
        )
    }
}
```

**TodoList.jsx**

```jsx
export default function TodoList(){
    return (
        <ul>
            <Todo isComplate={false} text="Learn Html"/>
            <Todo isComplate={true} text="Learn css"/>
            <Todo isComplate={true} text="Learn javascript"/>
            <Todo isComplate={false} text="Learn react js"/>
        </ul>
    )
}
```

**main.jsx**

```jsx
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <TodoList/>
        </Container>
    </StrictMode>
)
```

**Null Component**

- Dimana ketika true kita megembalikan component dan jika false kita tidak mengembalikan apa apa

```jsx
export default function Todo({text, isComplate, isDeleted = false}){
    if (isDeleted) {
        return null
    }
    else if (isComplate) {
       return (
        <li>
            <del>
                {text}
            </del>
        </li>
       )
    }else {
        return (
            <li>{text}</li>
        )
    }
}
```

```jsx
import Todo from "./todo";

export default function TodoList(){
    return (
        <ul>
            <Todo isComplate={false} text="Learn Html" isDeleted={true}/>
            <Todo isComplate={true} text="Learn css"/>
            <Todo isComplate={true} text="Learn javascript"/>
            <Todo isComplate={false} text="Learn react js"/>
        </ul>
    )
}
```

**Ternary Operator**

```jsx
export default function Todo({text, isComplate, isDeleted = false}){
    if (isDeleted) {
        return null
    }else{
        return (
            <li>
                {isComplate ? <del>{text}</del> : text}
            </li>
        )
    }
}
```

**Logical And**

```jsx
export default function Todo({text, isComplate, isDeleted = false}){
    if (isDeleted) {
        return null
    }else{
        return (
            <li>
                {text} {isComplate && '(complate)'}
            </li>
        )
    }
}
```

# ![React Collection Component] <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

- Di bandingan kita membuat tag satu satu seperti sebelumnya kita bisa meengginakan collection contoh nya seperti ini

```jsx
import Todo from "./todo";

export default function TodoList(){
    const data = [
        {
            text: "Learn Html",
            isComplate: true
        },
        {
            text: "Learn css",
            isComplate: true
        },
        {
            "text": "Learn js",
            isComplate: false
        },
        {
            "text": "Learn js",
            isComplate: false
        },
    ]

    const todos = data.map((todo, index) => {
        return (
            <Todo key={index} {...todo}/>
        )
    })

    return (
        <ul>
           {todos}
        </ul>
    )
}
```

# ![React Pure Function], <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

- Pure Function adalah function yang tidak berubah, Hampir mirip dengan Pure Component

```jsx

export default function Row({id, text}){
    return (
        <tr>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}
```
```jsx
import Row from "./row";

export default function Table(){
    return (
        <table border= "1">
            <tbody>
                <Row id="1" text= "1"></Row>
                <Row id="2" text= "2"></Row>
                <Row id="3" text= "3"></Row>
                <Row id="4" text= "4"></Row>
            </tbody>
        </table>
    )
}
```

- Pada kode di atas kita menambahkan id, ini di namakan pure function

# ![React Event Handler], <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

- Event handler di React adalah fungsi yang dieksekusi saat suatu event terjadi, seperti klik tombol atau input teks. Event handler biasanya ditulis sebagai fungsi dan diteruskan ke elemen JSX menggunakan sintaks camelCase,


