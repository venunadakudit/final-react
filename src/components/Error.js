import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div>
            <h1>Oops!!!</h1>
            <p>Something went wrong !</p>
            <h3>{error.status} - {error.statusText || error.message}</h3>
        </div>
    )
}
export default Error;