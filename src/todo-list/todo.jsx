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