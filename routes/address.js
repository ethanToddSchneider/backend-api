

//creat called from order info
router.post('/', async (req, res) => {
    cart.create({
        userID: req.body.userID,
        address_line1: req.body.address_line1,
        address_line2: req.body. address_line2,
        city: req.body.city,
        postal_code: req.body.postal_code,
        territory: req.body.territory,
        country: req.body.country,
    });

});
//read 

//update by user or superuser

//delete, user/super user

module.exports = router;