const posts = [
    { user: "u1", post: "p1" },
    { user: "u2", post: "p2" },
    { user: "u3", post: "p3" },
]

const displayPosts = () => {
    posts.map(post => {
        console.log(post)
    })
}

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {

        console.log("Receiving data...")
        posts.push(newPost)

        if (newPost) {
            resolve()
        } else {
            reject("Could not receive data!")
        }
    })
}


addPost({ user: "u4", post: "p4" })
    .then(() => {
        console.log("Post Added!")
        displayPosts()
    })
    .catch(err => {
        console.log(err)
    })