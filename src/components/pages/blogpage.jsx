import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

// TODO abort controller

const BlogPage = () => {
    const params = useParams();

    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        import(`@/data/blogs/projects/${params.blogId}.md`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setContent(res))
        })
        .catch(err => {
            console.log(err);
            setError(true);
        });
    }, [params.blogId])

    if (error) {
        return (<div> This project does not exist! </div>);
    }

    return (
        <div className="flex flex-col gap-3">
            PROJECT PAGE FOR {params.blogId}
            <Link to="/" className="px-2 py-2 text-xl rounded-[16px] bg-gray-200">HOME</Link>

            <ReactMarkdown> {content} </ReactMarkdown>

        </div>
    );
};

export default BlogPage;