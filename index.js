const express = require ('express')
const path = require ('path')
const app = express () 
app.use(express.urlencoded({extended:false}))
app.use(express.static(__dirname,"/public/css"))
const mysql = require ('mysql')
var pool = mysql.createPool ({
	connectionLimit : 10, /*diez dispositivos conectados*/
	host: "localhost",
	user: "root",/*root es el nombre del usuario que trae xammp*/
	password: "",
	database: "mangastore", /*llamamos al nombre de la base de datos


	*/
	
})

app.get("/",(req,res) => {
	res.sendFile(path.join(__dirname,"/diseñocop/public/html/inicio.html")) /*linea de ruta absoluta*/

})

/*app.get("/productos",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/productos.html"))
	
})*/

app.get("/shonen",(req,res) => {
	res.sendFile(path.join(__dirname,"/diseñocop/public/html/shonen.html"))
	
})

app.get("/seinen",(req,res) => {
	res.sendFile(path.join(__dirname,"/diseñocop/public/html/seinen.html"))
	
})

/*app.get("/ediesp",(req,res) => {
	res.sendFile(path.join(__dirname,"/public/html/usuarios.html"))
	
})*/

app.get("/usuarios",(req,res) => {
	res.sendFile(path.join(__dirname,"/diseñocop/public/html/usuarios.html"))
	
})

app.post("/reg",(req,res) => {

	console.log(req.body)

	let email = req.body.email;

	let contraseña = req.body.contraseña;

	let nombre = req.body.nombre;

	let sql = "insert into usuarios (email,contraseña,nombre) values ('"+email+"','"+contraseña+"','"+nombre+"')"; /*string concatenado*/

	/*('${email}','${clave}') interpolacion*/ 

	pool.query(sql,(error,result,campo) => {
		res.send(result);


	})
}) /*req=request*/







app.listen (3000,() => { console.log ('Server on')
	})/*esto va al final de todo*/

