export default function RightImg({
  imgURL,
  prodName,
  prodDesr,
  tryDemo,
  arrow,
}) {
  return (
    <div className="container mt-5">
      <div className="row kite">
        <div className="col-5">
          <h2>{prodName}</h2>
          <p>{prodDesr}</p>
          <p>
            <a className="text-decoration-none" href="">
              {tryDemo}
              {arrow}
            </a>
          </p>
        </div>
        <div className="col-7 kite-img">
          <img style={{width:'100%'}}  src={imgURL} alt="img" />
        </div>
      </div>
    </div>
  );
}
