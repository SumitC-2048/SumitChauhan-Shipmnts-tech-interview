const express = require('express');
const WareHouse = require('../models/wareHouse');

const app = express();
app.use(express.json());


const create_location = async (req,res) => {
    const {location_code, parent_location_code} = req.body;
    let type = 'warehouse';
    if(!parent_location_code){
        type = 'warehouse'
    }else{
        type = 'storage'
    }
    const data = {
        location_code,
        parent_location_code,
        type
    }
    try{
        const wareHouse = await WareHouse.create(data);
        return res.status(201).json({
            success: true,
            message: "Location created successfully",
            data: {
                "location_code": wareHouse.location_code,
                "parent_location_code": wareHouse.parent_location_code,
                "type": wareHouse.type
            }
        });
    }catch(e){
        return res.status(400).json({
            success: false,
            message: e.message,
            data: null
        });
    }
}

const getWareHouses = async (req,res) => {
    const root = req.query.warehouse_code;

    const findChilds = async (location_code) =>{ 
        // should return an object
        //     "location_code": "W-01",
        // "type": "warehouse",
        // "childs": [
        const wareHouse = await WareHouse.findOne({location_code: location_code});
        let res = {
            location_code: location_code,
            type: wareHouse.type,
            childs: []
        }
        try{
            const childs = await WareHouse.find({parent_location_code: location_code});
            for(const child of childs){
                const recursiveChilds = await findChilds(child.location_code);
                console.log('recursive childs', recursiveChilds);
                res.childs.push(recursiveChilds);
            }
        }catch(e){
            console.log('Error while fetching the childs');
            console.log(e.message);
        }
        return res;
    }

    const response = await findChilds(root);
    console.log(response);
    return res.status(200).json(response);
}

module.exports = {
    create_location,
    getWareHouses
}