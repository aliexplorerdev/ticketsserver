import mongoose from "mongoose";
import uuid from 'uuid'

const commentsSchema = mongoose.Schema({

    
        _id: {
            type:String,
            default:uuid.v4()
        },
        author:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'users'
        },

        text: {
            type:String
        },
        
      
},{timestamps:true})


export const Comments = new mongoose.model('comments',commentsSchema)