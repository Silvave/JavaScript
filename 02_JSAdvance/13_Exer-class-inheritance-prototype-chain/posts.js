
function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = []
        }

        addComment(comment) {
            this.comments.push(comment);
            return this
        }

        toString() {
            let output = [`Rating: ${this.likes - this.dislikes}`,
                          `Comments:\n * ${this.comments.join(`\n * `)}`];
            if (this.comments.length === 0) {
                output = output.slice(0, -1)
            }
            return super.toString() + "\n" + output.join(`\n`)
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this
        }

        toString() {
            return super.toString() + `\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

let Post = solve().Post
let SocialMediaPost = solve().SocialMediaPost
let BlogPost = solve().BlogPost

let post = new Post(`The Big Bang`, `When the universe was created!`)
let smp = new SocialMediaPost(`Elementary`, `The story of Sherlock Holmes!`,100, 5)
smp.addComment(`This has the best story ever!`).addComment(`I realy like that film.`);

console.log(post.toString())
console.log(`-----------------------`)
console.log(smp.toString())

let blogPost = new BlogPost(`The Big Bang`, `When the universe was created!`, 0);
blogPost.view().view().view().view().view()

console.log(blogPost.toString())

