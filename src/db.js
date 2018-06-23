var mysql = require('mysql')

//TODO: get from environment variables
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mysql",
    database: "skipthedishes",
});

const save = (data, callback) => {
    connection.query('INSERT INTO report SET ?', data, (error, results, fields) => {
        if (error) {
            connection.destroy()
            throw error
        } else {
            console.log(results)
            callback(error, results)
            connection.end( err => { callback(err, results)})
        }
    })
}
