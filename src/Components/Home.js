import './home.css';

const Home = () => {
    let features = [
        "Post a job and hire a talent",
        "Find customizable templates",
        "Request the specific talents"
    ]

    return (
        <div class="homewrapper">
            <div className='row row1'>
                <div className='col1'>
                    <h1>Outsourcing the best tech talents</h1>
                    <p>We provide the best technology talents to build solutions that best suit your needs.</p>
                </div>
                <div className='col2'></div>
            </div>
            <div className='row row2Background'>
                <div className='row row2'>
                    <h2 className='white dBlock' style={{marginBottom: "3rem"}}>For clients</h2>
                    <div style={{height: "auto", width: "40%" }}>
                        <h1 className='dBlock white'>Hire excellent talents</h1>
                        <p className='dBlock white' style={{height: "auto", width: "80%", marginBottom: "3.5rem" }}>
                            Work with talents that have been trained by Octave to provide excellent solutions with a professional
                        </p>
                    </div>
                    <div className='dBlock' style={{display:"flex", justifyContent:"space-between"}}>
                        <div className='feature'>
                            <p>Post a job<br/> and hire a talent</p>
                        </div>
                        <div className='feature'>
                            <p>Find customizable<br/> templates</p>
                        </div>
                        <div className='feature'>
                            <p>Request the<br/> specific talents</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row row2Background'>

            </div>


        </div>
    )
}

export default Home;