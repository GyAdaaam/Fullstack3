var mysql = require('mysql2');

const config = {
    connectionLimit: 10, 
    user: 'root', 
    password: 'root',
    host: 'localhost', 
    database: 'webshop', 
    port: 3306, 
    dateStrings: true,
};


let pool = mysql.createPool(config);


pool.getConnection((error) => {
    if (error) {
        console.error('Nem sikerült kapcsolatot létrehozni az adatbázissal!\nA hiba a következő:\n', error);
    } 
    else 
    {
        console.log('Sikeres kapcsolat az adatbázissal!');
    }
});


module.exports=pool;