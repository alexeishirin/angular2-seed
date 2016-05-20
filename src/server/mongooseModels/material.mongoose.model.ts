import mongoose = require('mongoose');
import {IMaterial} from "./../../models/material.model";

export interface IMaterialModel extends IMaterial, mongoose.Document {

}

export const MaterialSchema = new mongoose.Schema({
    name: {type:String, required: true},
    quantity: Number,
    price: Number
});

export const Material = mongoose.model<IMaterialModel>('Material', MaterialSchema);
