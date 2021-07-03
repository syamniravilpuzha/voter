const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/voter_db';
const Items = require("../models/item");
/**
 * Item Service Class
 */
class ItemService {

    /**
     * Constructor
     */
    constructor() {
        this.connectToDB();
    }
    /**
     * Connect to DB
     * @returns {void}
     * @param {void}
     */
    connectToDB() {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        const connection = mongoose.connection;

        connection.once("open", function () {
            console.log("MongoDB database connection established successfully");
        });
    }
    /**
     * Save an item to DB
     * @param {*} data Data to be saved
     * @returns {Promise}
     */
    saveItem(data) {
        let item = new Items(data);
        return new Promise((resolve, reject) => {
            item.save().then((res) => {
                console.log(res);
                resolve(res);
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }
    /**
     * Get All Items from DB
     * @returns Promise
     * @param {*} void
     */
    getAllItems() {
        return new Promise((resolve, reject) => {
            Items.find({}).then((res) => {
                resolve(res);
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }
    /**
     * Update votes to DB
     * @param {*} id 
     * @param {*} vote 
     * @returns Promise
     */
    updateVote(id, vote) {
        return new Promise((resolve, reject) => {
            Items.findByIdAndUpdate(id, { 'votes': vote }).then((res) => {
                resolve(res);
            }).catch((err) => {
                console.error(err);
                reject(err);
            });
        });
    }

}
module.exports = new ItemService();