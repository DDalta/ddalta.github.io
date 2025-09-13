const getProjectById = async (projectId) => {
    import(`@/data/blogs/projects/${projectId}.md`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => console.log(res))
        })
        .catch(err => console.log(err));
}

export default getProjectById;