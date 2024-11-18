import mongoose, { Types, Schema, Model }  from "mongoose";


const tagsSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    }
})
// restriction of content type to a specific string by using type
const contentTypesArray = ['image','video' ,'tweet' , 'article' ] as const // with as const the its only readOnly (ts wont change the type)
type contentType = (typeof contentTypesArray)[number] // the typeof is from ts operator and it makes the values contentTypesArray as types or idk and the [number] at last makes content type only available for image video etc and take all values from array and make type of each

interface contentI {
    title : string,
    link : string,
    type : contentType,
    tags : Types.ObjectId,
    userId : Types.ObjectId
}


const contentSchema = new Schema<contentI>({
    title : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required : true
    },
    type : {
        type : String,
        enum : contentTypesArray
    },
    tags : {
        type : Schema.Types.ObjectId,
        ref : 'Tag'
    },
    userId : {
        type : Schema.Types.ObjectId,
        ref : "User",
        required : true
    }
})

const TagsModel = mongoose.model('Tag', tagsSchema)
const ContentModel : Model<contentI> = mongoose.model<contentI>('Content', contentSchema)


const linkSchema = new Schema({
    hash : { type : String, required : true},
    userId : { type : Types.ObjectId, ref : 'User', required : true}
})


const LinkModel = mongoose.model('Link', linkSchema)

export {
    TagsModel,
    ContentModel,
    LinkModel
}