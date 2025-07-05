export default function LeftImg({imgURL,prodName,prodDesr,tryDemo,learnMore,googlePlay,appStore,arrow}) {
    return ( 
        <div className="container">
            <div className="row kite">
                <div className="col-7 kite-img">
                    <img style={{width:'100%'}} src={imgURL} alt="img" />
                </div>
                <div className="col-5 mt-5">
                    <div className="row row-col-2 mt-4">
                        <h2>{prodName}</h2>
                        <p>{prodDesr}</p>
                        <div className="col">
                            <p><a className='text-decoration-none' href="http://localhost:5173/">{tryDemo}{arrow}</a></p>
                            <img src={googlePlay} alt="" />
                        </div>
                        <div className="col">
                            <p><a className='text-decoration-none' href="">{learnMore}{arrow}</a></p>
                            <img src={appStore} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
};