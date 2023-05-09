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

    return(
        
        <div id="calculator">
            <InsuranceForm onSubmit={addCost}/>
            <h1>Liste</h1>
            <ul>
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
                            <h3>Zahlungswiederholung:</h3>
                            {cost.option}
                        </label>
                        <button onClick={() => deleteCost(cost.id)}>Löschen</button>
                    </li>
                    )
                })}
            </ul>
            
        </div>
    )
}