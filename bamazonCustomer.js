var mysql = require("mysql");
var inquirer = require('inquirer');

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

  // prompt users with two messages (inquirer)

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


//check if your store has enough of the product to meet the customer's request.


function checkItem(){


    connection.query("SELECT * FROM products WHERE item_id =" +" " + choice+";", function(err, results) {
      if (err) throw err;
       stock = results[0].stock_quantity;
       item = results[0].product_name;
       price = results[0].price;

      console.log("You have chosen" +" "+ item);
      console.log("There are currently" + " " + stock + " "+ "in stock.");
      console.log("The price is" + " "+ "$"+price+" "+"each.")

      inquirer
  .prompt([

    {
      type:"input",
      name:"quantity",
      message:"How many would you like to purchase?",
      
    },
    
  ])
  .then(answers => {
  var quantity = parseInt(answers.quantity);
  var difference = stock - quantity;
  if(quantity <= stock){
    console.log("You got it!");

    connection.query("UPDATE products SET stock_quantity =" +" "+ difference + " " + "WHERE product_name =\""+item+"\";",function(err, results) {

      console.log(difference+" " + "remain in stock");


      inquirer

      .prompt([
  
        {
          type:"confirm",
          name:"new",
          message:"Would you like to search for a new item?",
          
        }
        
      ])
      .then(answers => {
  
  
          if(answers.new == true){
  
            bamazon();
  
  
  
          }else{
  
            console.log("Thank you for visiting bamazon!")
          }



    })
  })
  }else{

    console.log("Sorry, there is not enough to fill the order.")

    inquirer

    .prompt([

      {
        type:"confirm",
        name:"new",
        message:"Would you like to search for a new item?",
        
      }
      
    ])
    .then(answers => {


        if(answers.new == true){

          bamazon();



        }else{

          console.log("Thank you for visiting bamazon!")
        }
  
  });

}
    
})

    })};

    //If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
//Else, updating the SQL database to reflect the remaining quantity.
//show the customer the total cost of their purchase.


//create  inseert
//read    SELECT
//update  Update
//delete  Delete


