class Blog {
    #title;
    #author;
    #posts;


    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#posts = this.fetchPosts();

    }


    fetchPosts() {
        let posts = [];
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                response.json().then(data => {
                    data.forEach(element => {
                        posts.push(element);
                    })

                })
            })
        return posts;
    }

    /*  async fetchPosts(){
          let posts = [];
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          let data = await (await fetch(url)).json()
          console.log(data);
          data.forEach( element =>{
              posts.push(element)
          })
          return posts;
      }


     */

    AddPosts(post) {
        let posts = this.#posts
        posts.push(post)
        this.#posts = posts
    }

    deletePost(postId) {
        for (let i = 0; i < this.#posts.length; i++) {
            console.log(this.#posts)
            if (this.#posts[i].id === postId) {
                this.#posts.splice(i, 1);
                return true
            }
            return false
        }

    }

    getPostById(postId) {
        for (let i = 0; i < this.#posts.length; i++) {
            if (this.#posts[i].id === postId) {
                return this.#posts[i];
            }

        }
    }

}


export {Blog};
