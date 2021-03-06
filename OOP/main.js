import {Blog} from "./blog.js";
import {Post} from "./post.js";
import{User} from "./user.js";

let blog1 = new Blog("dasdsad","Dwdsds");
console.log(blog1)
let user1 = new User("Tamás","Pusztai","asdsadsa@gmail.com")
console.log(user1)
let post2 = new Post("Best ruin pubs in Bp","asd",12);
let post4= new Post("dsdsd","dsdsdsds",11);
blog1.AddPosts(post2);
blog1.AddPosts(post4);
console.log(blog1);
console.log(blog1.deletePost(11));
console.log(blog1.getPostById(12));
console.log(blog1.deletePost())









