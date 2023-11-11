import React, { useState} from 'react'

export default function TextForm(props) {


    const synth = window.speechSynthesis;

    const [text, setText] = useState('');
    const [rate, setRate] = useState(1);
    const [isdisabled, setIsDisabled] = useState(false);

    // useEffect(() => {
    //     // Cleanup function when the component unmounts
    //     return () => {
    //         if (synth.speaking) {
    //             synth.cancel();
    //         }
    //     };
    // }, []);

    const handleRate = (e) => {
        setRate(e.target.value);
    }
    const handleChange = (e) => {
        setText(e.target.value);
    }
    const btnucClick = () => {
        setText(text.toUpperCase());
        props.defAlert("Converted to Upper Case", "success");
    }
    const btnlcClick = () => {
        setText(text.toLowerCase());
        props.defAlert("Converted to Lower Case", "success");
    }
    const speakRate = () => {
        if (synth.speaking) {
            synth.cancel();
        }

        const utterThis = new SpeechSynthesisUtterance(text);

        utterThis.rate = rate;

        utterThis.addEventListener('end', () => {
            setIsDisabled(false);
        })
        setIsDisabled(true);

        synth.speak(utterThis);
        // window.location.reload()
        window.addEventListener('load',()=>{
            synth.cancel();
        })
    }

    const handleExtraSpace = () => {
        let txt = text.split(/[ ]+/);
        setText(txt.join(" "));
        props.defAlert("Extra Space has been removed", "success");
    }
    const allClear = () => {
        setText("");
        props.defAlert("All text has been removed", "success");
    }

    return (
        <>
            <style>
                {`.form-control::placeholder {color: ${props.theme === 'light' ? 'black' : 'white'};}`}
            </style>
            <div className="container" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3 my-4" >
                    <textarea className="form-control" placeholder='Enter you Text' value={text} onChange={handleChange} id="exampleFormControlTextarea1" rows="6" disabled={isdisabled} style={{ backgroundColor: props.theme === 'dark' ? '#000' : 'white', color: props.theme === 'light' ? 'black' : 'white' }}></textarea>
                </div>

                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={btnucClick}>Convert to UpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={btnlcClick}>Convert to LowerCase</button>
                <button disabled={text.length === 0} onClick={speakRate} className="btn btn-warning mx-2 my-2">Speak</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpace}>Remove Spaces</button>
                <button disabled={text.length === 0} className="btn btn-primary mx-2 my-2" onClick={allClear}>All Clear</button>
                <div id="rate-control">
                    <label>Rate:</label>
                    <input type="range" min={0.5} max={4} defaultValue={1} step="0.1" value={rate} onChange={handleRate} />
                </div>
            </div>
            <div className="container my-3" style={{ color: props.theme === 'light' ? 'black' : 'white' }}>
                <h1>Your Text Summary</h1>
                <p>Entered text has {text.split(" ").filter((arrWord) => { return arrWord.length !== 0 }).length} words and {text.length} character</p>
                <p>Time required to read the entered content : {0.008 * text.split(" ").filter((arrWord) => { return arrWord.length !== 0 }).length} minutes</p>
                <h2>Preview your Text</h2> {/* filter(function as argument) return true/false creates array filled with the elements that pass a test provided by a function*/}
                <p>{text.length > 0 ? text : "Enter text above to preview"}</p>
            </div>
        </>
    )
}