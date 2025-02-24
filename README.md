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

```jsx
export default function AlertButton({text}){
    function handleClick(){
        alert("tombol di klik")
    }

    return (
        <button onClick={handleClick}> {text} </button>
    )
}
```

# ![React Event Propagation], <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

- Penjelasan yang saya tangkap disini kadang di beberapa area kita mau agar bisa di klik, nah saat kita tidak menggunakan e.stopPropagation ketika kita melakukan klik nah nantinya alret sebelumnya ikut ke panggil jadi seperti 2 kali pemanggilan padahal kita hanya melakukan klik 1 kali

```jsx
export default function ToolBar({onClick}){
    return (
        <div onClick={onClick} style={{backgroundColor: "red"}} >
            <button onClick={onClick} >frist</button>
            <button onClick={onClick} >Seccound</button>
        </div>
    )
}
```

```jsx
<ToolBar onClick={(e)=> {
                e.stopPropagation();
                alert('test click toolbar')
            }}/>
```

**Prevent Default**

- event.preventDefault() adalah metode untuk mencegah perilaku default dari suatu event di browser.

```jsx
export default function SearchForm(){
    return (
        <form>
            <input type="text"/>
            <button onClick={(e) => {
                e.preventDefault();
                alert("mencari")
            }}>Search</button>
        </form>
    )
}
```

# ![React Side Effect], <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

```jsx
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
```

```jsx
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Container>
            <HelloWorld/>
            <TodoList/>
            <Table/>
            <AlertButton text="testing"/>
            <ToolBar onClick={(e)=> {
                e.stopPropagation();
                alert('test click toolbar')
            }}/>
            <SearchForm/>
        </Container>
        
        <SayHelloForm/>
    </StrictMode>
)
```

# ![React useState], <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

**useState**

- Untuk membuat State, kita bisa menggunakan function useState(initial)

- https://react.dev/reference/react/useState

- Function useState akan mengembalikan array dengan dua nilai, pertama adalah      State-nya, dan kedua ada function untuk mengubah value di State tersebut

- Component yang menggunakan State tersebut, secara otomatis akan

```jsx
import { useState } from "react";

export default function Counter(){
    let [counter, setCounter]= useState(0);

    return (
        <div>
            <button onClick={
                () => {
                    setCounter(counter + 1);
                }
            }>Increment

            </button>
            
            <h1>
                {counter}
            </h1>
        </div>
    )
}
```

# ![React Render], <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

**Render**

- Sebelum Component yang kita buat ditampilkan di layar, Component harus di-render oleh React

- Oleh karena itu, kita perlu tahu bagaimana cara kerja proses React ini ketika menampilkan Component yang kita buat

- Terdapat 3 tahapan proses menampilkan Component di React

- Pertama, trigger (memicu) proses render

- Kedua, melakukan proses render Component

- Ketiga, menempatkan hasil render Component ke DOM (Document Object Model)

# ![React Snapshot], <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" width="50">

**Snapshot**

- Variable State sekilas mungkin terlihat seperti variable JavaScript biasa

- Tapi sebenarnya, State itu mirip seperti snapshot (kondisi saat itu). Mengubah nilai variable State tidak akan mengubah Snapshot, melainkan akan memicu render ulang untuk membuat Snapshot baru

- Kita mungkin berpikir bahwa tampilan web berubah secara langsung karena response dari event yang dilakukan oleh pengguna, seperti klik tombol

- Namun sebenarnya tidak seperti itu, kita sudah tahu di materi sebelumnya, ketika terjadi perubahan State, itu akan memicu render ulang, sehingga akan membuat Snapshot baru yang ditampilkan di layar

**Ini adalah penggunaan yang salah**

```jsx
import { useState } from "react";

export default function Counter(){
    let [counter, setCounter]= useState(0);

    return (
        <div>
            <button onClick={
                () => {
                    setCounter(counter + 1);
                    setCounter(counter + 1);
                    setCounter(counter + 1);
                }
            }>Increment

            </button>
            
            <h1>
                {counter}
            </h1>
        </div>
    )
}
```

**Ini adalah penggunaan yang benar**
```jsx
import { useState } from "react";

export default function Counter(){
    let [counter, setCounter]= useState(0);

    return (
        <div>
            <button onClick={
                () => {
                    setCounter(counter + 3);
                }
            }>Increment

            </button>
            
            <h1>
                {counter}
            </h1>
        </div>
    )
}
```

