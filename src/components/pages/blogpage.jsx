import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';

// TODO abort controller

const BlogPage = () => {
    const params = useParams();

    const [content, setContent] = useState("");
    const [images, setImages] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        import(`@/data/blogs/projects/${params.blogId}/${params.blogId}.md`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setContent(res))
        })
        .catch(err => {
            console.log(err);
            setError(true);
        });

        const images = import.meta.glob(`@/data/blogs/projects/${params.blogId}/*.{png, jpg, jpeg}`, { eager: true, as: 'url' });
        console.log(images);

    }, [params.blogId])

    if (error) {
        return (
                <div className="flex flex-col">
                    <h1>This project does not exist!</h1> 
                    <Link to="/" className="px-2 py-2 text-xl rounded-[16px] bg-gray-200">HOME</Link>
                </div>
            );
    }

    return (
        <div className="mx-auto max-w-7xl flex flex-col gap-3">
            <Link to="/" className="px-2 py-2 text-xl rounded-[16px] bg-gray-200">HOME</Link>

            <ReactMarkdown 
                components={{
                    h1: ({node, ...props}) => <h1 className="font-semibold text-3xl" {...props} />,
                    img: ({node, ...props}) => <img loading="lazy" {...props} />
                }}
                children={content}
            />
        </div>
    );
};

export default BlogPage;