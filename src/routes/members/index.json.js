import posts from './_posts.js';

const contents = JSON.stringify(posts.map(post => {
    return {
        name: post.name,
        image: post.image,
        id: post.id,
        message: post.message,
        slug: post.slug,
        tag: post.tag,
    };
}));

export function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    res.end(contents);
}