export class Post {
    id?: number;
    statement?:string;
    title?:string;
    postCategorie?:string;
    imageLink!:string;
    user_id?:number;
    cardContent!:string;
    ceationDate!:Date;
    deleted!:boolean;
    valid!:boolean;
    commentStatus!:boolean;
    Post(){
        this.imageLink=""; 
        this.deleted=false;
    }
}

export class CardPost {
    id?: number;
    title?:string;
    postCategorie?:string;
    imageLink!:string;
    cardContent!:string;
    valid!:boolean;
    ceationDate!:Date;
    Post(){
        this.imageLink=""; 
    }
}