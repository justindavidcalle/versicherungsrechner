import { useState } from "react"


export default function Calculator(){

    const [insuranceName, setInsuranceName] = useState('')
    const [costlist, setCostlist] = useState([])

    function makelist(e){
        e.preventDefault()
        
        setCostlist(currentcost => {
            return[
                ...currentcost, 
                    {id: crypto.randomUUID(), 
                    name: insuranceName} 
            ]
        })
    }

    console.log(costlist)

    return(
        <div id="calculator">
            <h1>Versicherungsrechner</h1>
            <form onSubmit={makelist}>
                <h2>Versicherungsname</h2>
                <input 
                value={insuranceName} 
                onChange={e => setInsuranceName(e.target.value)} 
                type="text" 
                placeholder="Name der Firma"/>
                <h2>Preis</h2>
                <input type="number" placeholder="Beträge die sie bezahlen" min="0"/>
                <h2>Monatlich/Jährlich</h2>
                <label>
                    <select>
                        <option>Monatlich</option>
                        <option>Jährlich</option>
                    </select>
                </label>

                <button>hinzufügen</button>
            </form>
            <ul>
                <li>
                    <label>TEST</label>
                </li>
                {costlist.map(cost => {
                    return(
                    <li key={cost.id}>
                        <label>
                            {cost.name}
                        </label>
                        <button>Löschen</button>
                    </li>
                    )
                })}
            </ul>
            
        </div>
    )
}