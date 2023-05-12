import { useState } from "react"

export function InsuranceForm(props) {

    const [insuranceName, setInsuranceName] = useState('')
    const [insurancePrice, setInsurancePrice] = useState('')
    const [paymentOption, setPaymentOption] = useState('Monatlich')

    function makelist(e){
        e.preventDefault()
        

        
        props.onSubmit(insuranceName, insurancePrice, paymentOption)

    }

    return(
        <div className="formOfInsurance">
            <h1>Versicherungsrechner</h1>
                <form onSubmit={makelist}>
                    <h2>Versicherungsname</h2>
                    <input 
                    value={insuranceName} 
                    onChange={e => setInsuranceName(e.target.value)} 
                    type="text" 
                    placeholder="Name der Firma"/>
                    <h2>Preis</h2>
                    <input 
                    value={insurancePrice}
                    onChange={e => setInsurancePrice(e.target.value)}
                    type="number" 
                    placeholder="Beträge die sie bezahlen" 
                    />
                    <h2>Monatlich/Jährlich</h2>
                    <label>
                        <select value={paymentOption} onChange={e =>setPaymentOption(e.target.value)}>
                            <option>Monatlich</option>
                            <option>Jährlich</option>
                        </select>
                    </label>

                    <button>hinzufügen</button>
                </form>
            </div>
    )
}