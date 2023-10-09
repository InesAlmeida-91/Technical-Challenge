const router = require('express').Router();
const phonesJson = require('../data/phones.json');

//get route for all phones
router.get("/phones", (req, res, next) => {
    return res.json(phonesJson);
  });
  
//get route for a phone id
router.get("/phones/:id", (req, res, next) => {
    const phoneId = req.params.id
    console.log("Requested phone ID:", phoneId);
    const phoneDetail = phonesJson.filter(phone => phone.id == phoneId)
    console.log("Phone detail:", phoneDetail);
    return res.json(phoneDetail)
  });

module.exports = router;
  
