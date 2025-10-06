const userModels = require('../models/usermodels')

const getPage = async (req,res)=>{
    const message=''
    try {
        res.render('index',{
            message: message || '',
            todos:''

        });
    } catch (error) {
        console.error('get page error',error);
        res.json({
            'error':error,
        })
    }
}


module.exports = {getPage}