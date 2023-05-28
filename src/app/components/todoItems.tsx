type TodoItemsProps = {
    id: string,
    title: string,
    complete: boolean
}

export default function TodoItems({ id, title, complete }: TodoItemsProps) {
    return (
        <li className="flex gap-1 items-center">
            <input id={id} type="checkbox" className="curser-pointer peer" />
            <label htmlFor={id} className="curser-pointer peer-checked:line-through peer-checked:text-slate-500">{title}</label>
        </li>
    )
}