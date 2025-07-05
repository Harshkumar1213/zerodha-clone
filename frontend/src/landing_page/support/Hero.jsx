import './Support.css';

export default function Hero() {
    return (
        <div className="container-fluid p-5" > 
        <div className="container mt-2">
            <div className="row">
                <div className="col">
                    <h4 className='white'>Support Portal</h4>
                </div>
                <div className="col text-end mt-2">
                    <a className='white' href="">Track tickets</a>
                </div>
            </div>
            <div className="row mt-5"> 
                <div className="col-6">
                    <h4 className='white'>Search for an answer or browse help topics to create a ticket</h4>
                    <div className="supportForm mt-4">
                        <form>
                        <input type="text" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
                        <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                    <div className="supportLinks mt-3">
                        <p> <a className='white' href="">Track account opening</a></p>
                        <p> <a className='white' href="">Track segment activation</a> </p>
                        <p> <a className='white' href="">Intraday margins</a> </p><br />
                        <p> <a className='white' href="">Kite user manual</a></p>
                    </div>
                </div>
                <div className="col-6">
                    <h4 className='white'>Featured</h4>
                    <ol>
                        <li className='mt-4 '>
                            <a className='white' href="">MCX Crude option contract expiry - June 2025</a></li>
                        <li className='mt-4'>
                            <a className='white'href="">Latest Intraday leverages and Square-off timings</a></li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
     );
};