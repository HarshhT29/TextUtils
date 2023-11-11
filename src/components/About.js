import React from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })
    let myStyle ={
        color: props.theme==='dark'?'white':'black',
        backgroundColor: props.theme==='dark'?'black':'white'
    }

   

    return (
        <div className='container my-4' style={myStyle}>
            <h1>About</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header" >
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            Accordion 1
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" >
                        <div className="accordion-body">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias corrupti nemo quos dignissimos at natus suscipit quas, perspiciatis ipsam laborum similique, quaerat vero itaque molestias adipisci quam consequuntur repellat libero ratione. Esse iusto recusandae unde perferendis amet similique in soluta maiores modi! Animi eius, officiis numquam magnam incidunt vel harum cum corrupti natus dignissimos pariatur eum facere quo consectetur voluptatem.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            Accordion 2
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto eum tenetur, molestias vitae quaerat aut hic sunt quasi. Quos sapiente esse voluptatem cum numquam. Excepturi sit nostrum atque perspiciatis tempore.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            Accordion 3
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                           Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui et officiis ut, sequi delectus iste neque adipisci quam eos maxime rem, excepturi quasi ratione beatae. Ducimus fuga quaerat, repudiandae illum sapiente ab quibusdam minus ipsum facilis! Et ipsum natus perferendis repellat eos, consequuntur enim provident.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button className="btn btn-primary my-3" onClick={darkMode}>{btnText}</button>
            </div> */}
            

        </div>
    )
}
