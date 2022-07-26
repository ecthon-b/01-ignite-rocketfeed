export function Post(props: any) {
    return (
        <div>
            <>
                <strong>{props.author}</strong>
                <p>{props.content}</p>
            </>
        </div>
    )
}