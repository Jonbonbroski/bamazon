var mysql = require("mysql");
var inquirer = require('inquirer');

// prompt users with two messages (inquirer)
//ask them the ID of the product they would like to buy
//ask how many units of the product they would like to buy
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  port: 3306,

  user: "root",

  password: "Th3Riddl3r?",

  database: "bamazon_db"
});

connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  bamazon();
});

function bamazon(){
inquirer
  .prompt([

    {
      type:"input",
      name:"ID",
      message:"Please enter the item ID number of the item you would like to purchase.",
      
    },
    
  ])
  .then(answers => {
    choice = answers.ID;
    checkItem();

  });

}

function checkItem(){


    connection.query("SELECT * FROM products WHERE item_id =" +" " + choice+";", function(err, results) {
      if (err) throw err;
      console.log(results[0);
      console.log()
    }
  )}

//check if your store has enough of the product to meet the customer's request.
//If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
//Else, updating the SQL database to reflect the remaining quantity.
//show the customer the total cost of their purchase.
