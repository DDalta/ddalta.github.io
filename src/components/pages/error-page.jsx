import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col gap-3">
            <h1 className="text-2xl">404 NOT FOUND</h1>
            <div>
                <Link to="/" className="px-2 py-2 text-xl rounded-[16px] bg-gray-200">HOME</Link>
            </div>
        </div>
    );
};

export default ErrorPage;