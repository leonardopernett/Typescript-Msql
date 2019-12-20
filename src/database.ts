import {createPool} from'mysql2/promise'

export async function connect(){
     
 const conexion =  await createPool({
        host:'localhost',
        user:'root',
        password:'Admin09',
        database:'node_mysql_ts',
        connectionLimit:10
    })

    return conexion
}