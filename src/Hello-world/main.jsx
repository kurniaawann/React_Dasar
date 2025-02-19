import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
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
        </Container>
    </StrictMode>
)``