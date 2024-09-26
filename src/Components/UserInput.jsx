export default function UserInput ({ onChange, userInput }){


    return(
        <div id='user-input'>
            <div className='input-group'>

                <div>
                    <label>
                        initial investment
                    </label>
                    <input
                        type="text"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => onChange('initialInvestment', event.target.value)}
                    />
                </div>

                <div>
                    <label>
                        annual interest rate
                    </label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => onChange('annualInvestment', event.target.value)}
                    />
                </div>
            </div>
            <div className='input-group'>
                <div>
                    <label>
                        expected return
                    </label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => onChange('expectedReturn', event.target.value)}
                    />
                </div>

                <div>
                    <label>
                        duration
                    </label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => onChange('duration', event.target.value)}
                    />
                </div>
            </div>
        </div>
    )
}