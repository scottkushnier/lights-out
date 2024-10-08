
import './Bulb.css'

function Bulb(props) {
    // console.log(props);
    return (
        <div className = {props.lit ? "bulb bulb-lit" : 'bulb'}
             onClick = {() => { props.flip() }}>
        </div>
    );
}

export default Bulb