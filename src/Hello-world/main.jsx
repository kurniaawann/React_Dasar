import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AlertButton from "../button/AllertButton";
import ToolBar from "../button/ToolBar";
import { SayHelloForm } from "../form/SayHelloForm";
import SearchForm from "../form/SearchForm";
import Table from "../table/table";
import TodoList from "../todo-list/TodoList";
import Container from "./Container";
import { HelloWorld } from "./HelloWorld";
// import HelloWorld from "./HelloWorld";

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