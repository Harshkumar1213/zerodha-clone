import Button from '@mui/material/Button';
export default function OpenAccount() {
    return ( 
        <div className="container mt-5 text-center">
            <h2>Open a Zerodha account</h2>
            <p style={{color:'#666666'}}>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
            <Button variant="contained">
                <a className='bootbtn' 
                style={{textDecoration:"none",padding:"0.8rem"}} 
                href='/signup'>Sign up for free</a>
            </Button>
        </div>
     );
}

