/**
 * ItemController Class
 */
class ItemController {

    constructor() {
        this.itemService = require('../services/item-service');
    }

    /**
    * Save Item
    * @param {*} req 
    * @param {*} res 
    */
    async saveItem(req, res) {
        console.log("Entered in service");
        try {
            let item = req.body.data;
            let data = {
                "response": await this.itemService.saveItem(item)
            };
            res.send(data);
        }
        catch (e) {
            res.status(404).send({ "error": e });
        }
    }
    /**
     * Get all items
     * @param {*} req 
     * @param {*} res 
     */
    async getAllItems(req, res) {

        try {
            let data = {
                "response": await this.itemService.getAllItems()
            };
            res.send(data);
        }
        catch (e) {
            res.status(404).send({ "error": e });
        }

    }
    /**
     * Update the vote
     * @param {*} req 
     * @param {*} res 
     */
    async updateVote(req, res) {
        try {
            let id = req.params.id;
            let votes = req.body.vote;
            console.log("input:", id, "<>", votes);
            let data = {
                "response": await this.itemService.updateVote(id, votes)
            };
            console.log("out:-", data);
            res.send(data);
        }
        catch (e) {
            res.status(404).send({ "error": e });
        }

    }

}
module.exports = new ItemController();