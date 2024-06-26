import { ObjectId } from "mongodb";
import { getDB } from "../../config/mongodb.js";
import { ApplicationError } from "../../error-handler/applicationError.js";

// is there any mistake in this file of code?
class ProductRepository{

    async add(newProduct){
        try{
            const db=getDB();
            const collection=db.collection("products");
            await collection.insertOne(newProduct);
            return newProduct;
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something went wrong with the dataBase")
        }
    }

    async getAll(){
        try{
            const db=getDB();
            const collection=db.collection("products");
            return await collection.find().toArray();
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something went wrong with the dataBase")
        }
    }

    async get(id){
        try{
            const db=getDB();
            const collection=db.collection("products");
            return await collection.findOne({_id: new ObjectId(id)});
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something went wrong with the dataBase")
        }
    }
    async filter(minPrice,maxPrice,category){
        try{
            const db=getDB();
            const collection=db.collection("products");
            let filterExpression={};
            if(minPrice){
                filterExpression.price={$gte:minPrice};
            }
        }
        catch(err){
            console.log(err);
            throw new ApplicationError("something went wrong with the dataBase")
        }
    }
    async rateProduct(){

    }
}
export default ProductRepository;