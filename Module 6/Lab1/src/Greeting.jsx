export function Greeting(props, children) {
        if (props.name) {
            return (
                <>
                <h1>Hello {props.name}</h1> <p>{children}</p>
                </>
            )
        } else {
            return (
                <>
                <h1>Hello World</h1> <p>{children}</p>
                </>
            )
        }
}