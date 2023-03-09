import { connect } from "mongoose";

export const startConnection = async () => {
    try {
        const db = await connect('mongodb://localhost/mevn-database');
        // db.set('strictQuery', false);
        console.log(db.connection.name);
        
    } catch (error) {
        console.log('errro: ', error);
    }
};