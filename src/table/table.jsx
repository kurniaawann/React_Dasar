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