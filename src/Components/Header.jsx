import image from '../assets/investment-calculator-logo.png'

export default function Header() {


    return (
        <div id='header'>
            <img src={image} alt="image"/>
            <h1>Investment calculator</h1>
        </div>
    )
}