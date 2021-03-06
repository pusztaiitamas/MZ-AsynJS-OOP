class Post{


    constructor(title,body,id) {
        this.title = title;
        this.body = body;
        this.id = id;
    }
    getPreview(lenght){
        return this.body.slice(0,lenght);
    }

}
export {Post};