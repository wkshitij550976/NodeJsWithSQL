var Config = "./dbconfig.js";

const sql = require("mssql");

async function getorders(){
try{
      let pool = await sql.connect(Config);
      let result = await pool.request().query("select * from tbl_Paging");
      return result.recordset;
}
catch(err){
                    console.log(err);

}
}

module.exports = {
                    getorders : getorders
}