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