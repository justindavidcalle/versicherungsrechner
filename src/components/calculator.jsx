import { useState } from "react"
import { InsuranceForm } from "./InsuranceForm"



export default function Calculator(){

    const [costlist, setCostlist] = useState([])


    function addCost(name, price, option) {
        setCostlist(currentcost => {
            return[
                ...currentcost, 
                    {id: crypto.randomUUID(), 
                    name,
                    price,
                    option} 
            ]
        })
    }
    

    function deleteCost(id) {
        setCostlist(currentcost => {
            return currentcost.filter(cost => cost.id !== id)
        })
    }

    console.log(costlist)

    function sumPricesMonthly() {
        return costlist
      .filter(cost => cost.option === "Monatlich")
      .reduce((total, cost) => total + Number(cost.price), 0);
      }
    
      function sumPricesYearly() {
        return costlist
      .filter(cost => cost.option === "Jährlich")
      .reduce((total, cost) => total + Number(cost.price), 0);
      }

    return(
        
        <div id="calculator">
            <InsuranceForm onSubmit={addCost}/>
            <div className="listOfInsurances">
                <h1>Liste</h1>
                <ul id="list">
                    {costlist.length === 0 && "Keine Kosten"}
                    {costlist.map(cost => {
                        return(
                        <li key={cost.id}>
                            <label>
                                <h3>Versicherungsname:</h3>
                                {cost.name}
                            </label>
                            <label >
                                <h3>Kosten:</h3>
                                {cost.price}
                            </label>
                            <label>
                                <h3 id="zahlungswiederholung">Zahlungswiederholung:</h3>
                                {cost.option}
                            </label>
                            <button onClick={() => deleteCost(cost.id)}>Löschen</button>
                        </li>
                        )
                    })}
                </ul>
            </div>
            <h1>Total</h1>
            <ul>
                <li>Monatliche Kosten: {sumPricesMonthly()}</li>
                <li>Jährliche Kosten: {sumPricesYearly()}</li>
            </ul>

        </div>
    )
}