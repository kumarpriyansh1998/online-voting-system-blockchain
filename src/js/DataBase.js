cont {
	createPool
} = require('mysql');

cont pool = createPool({
	host:"localhost",
	user:"root",
	password:"Aezakmi@123",
	database:"sql_hr"
	connectionLimit:10
})

pool.query('select * from sql_hr.employees',(err,result,field)=>){
	if(err){
		return console.log(err);
	}
	return console.log(result);
}