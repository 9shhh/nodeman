module.exports = {
    jwtSecretKey : "sunghwan",
    dataModels : [
        {
            title : "tbl_users",
            query : require('../sin_models/tbl_users').createTable            
        },
        {
            title : "tbl_board",
            query : require('../sin_models/tbl_board').createTable             
        }
    ]
}