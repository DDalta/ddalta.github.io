import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

import ThemeToggle from "@/components/layout/theme-toggle.jsx";
import useTheme from "@/hooks/use-theme.jsx"

// TODO: abort controller

const BlogPage = () => {
    const params = useParams();

    const [content, setContent] = useState("");
    const [error, setError] = useState(false);
    const {theme, toggleTheme} = useTheme();

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
        return (
                <div className="flex flex-col">
                    <h1>This project does not exist!</h1> 
                    <Link to="/" className="px-2 py-2 text-xl rounded-[16px] bg-gray-200">HOME</Link>
                </div>
            );
    }

    return (
        <section className="pb-10 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="mx-auto max-w-5xl flex flex-col gap-3">
                <div className="flex gap-5 text-center">
                    <Link to="/" className="w-28 px-2 py-2 text-xl bg-white hover:bg-gray-200 dark:hover:bg-gray-950 dark:bg-gray-900
                                                rounded-xl transition-colors duration-300">← HOME</Link>
                    <ThemeToggle className="flex items-center justify-center w-11 h-auto bg-white hover:bg-gray-200 dark:hover:bg-gray-950 dark:bg-gray-900
                                                rounded-xl transition-colors duration-300" theme={theme} toggleTheme={toggleTheme} />
                </div>
                <ReactMarkdown
                    rehypePlugins={[rehypeRaw]}
                    components={{
                        h1: ({node, ...props}) => <h1 className="font-semibold text-3xl" {...props} />,
                        h2: ({node, ...props}) => <h2 className="font-semibold text-2xl" {...props} />,
                        h3: ({node, ...props}) => <h3 className="font-semibold text-xl" {...props} />,
                        img: ({node, ...props}) => <img loading="lazy" className="w-full md:w-2/3" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc ml-6" {...props}/>,
                        a: ({node, ...props}) => <a className="font-semibold" {...props}/>,
                        p: ({node, ...props}) => <p className="text-base/6" {...props}/>,
                    }}
                    children={content}
                />
            </div>
        </section>
    );
};

export default BlogPage;