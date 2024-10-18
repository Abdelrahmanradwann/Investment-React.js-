import { useState } from "react"
import Results from "./Results"
import { calculateInvestmentResults } from "../util/investment"
export default function InputBoard() {

    const [attributes, setAttributes] = useState([1, 1, 1, 1])
    let result = [];
    function HandleAttributes(event, idx) {
        setAttributes(prev => {
            const newStates = [...prev];
            newStates[idx] = +event.target.value;
            return newStates;
        })
    }
    if (attributes[3]) {
       result = calculateInvestmentResults({
            initialInvestment: attributes[0],
            annualInvestment: attributes[1],
            expectedReturn: attributes[2],
            duration: attributes[3],
          });
    }
    return (
        <>
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>INITIAL INVESTMENT</label>
                    <input type="number" required onChange={(event) => { HandleAttributes(event, 0)}}/>
                </p>
                <p>
                    <label>ANNUAL INVESTMENT</label>
                    <input type="number" required onChange={(event) => { HandleAttributes(event, 1)}}/>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>EXPECTED RETURN</label>
                    <input type="number" required onChange={(event) => { HandleAttributes(event, 2)}}/>
                </p>
                <p>
                    <label>DURATION</label>
                    <input type="number" required onChange={(event) => { HandleAttributes(event, 3)}}/>
                </p>
            </div>
            </section>
            <Results returnData = {result} />
        </>
    )
}