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