
import TrafficLights from "./TrafficLights";


export default function TransactionDetails(){

     const transactions = [
       {
         id: 1,
         timestamp: 1656076800000,
         price: 10,
         category: "Food",
         itemName: "Pizza"
       },
       {
         id: 2,
         timestamp: 1656076800000,
         price: 20,
         category: "Food",
         itemName: "Burger"
       },
       {
         id: 3,
         timestamp: 1656076800000,
         price: 15,
         category: "Clothes",
         itemName: "T-shirt"
       },
       {
         id: 4,
         timestamp: 1656076800000,
         price: 30,
         category: "Food",
         itemName: "Sushi"
       },
       {
         id: 5,
         timestamp: 1656076800000,
         price: 25,
         category: "Clothes",
         itemName: "Jeans"
       }
     ];

    const categoryTransactions = {}

    const allCategoryTransactions = () => {
      transactions.forEach((transaction) => {
        if (categoryTransactions[transaction.category]) {
          categoryTransactions[transaction.category].price +=
            transaction.price;
        }
        else{
          categoryTransactions[transaction.category] = {
            category: transaction.category,
            price: transaction.price
          };
        }
      }  
    )
    }

    //console.log("allCategoryTransactions:", allCategoryTransactions);

    return (
      <>
        <div>
          <TrafficLights />
        </div>
      </>
    );
}