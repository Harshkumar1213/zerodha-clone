import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Orders = () => {
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/order", {
          withCredentials: true, 
        }).then((res) => { 
      setAllOrder(res.data);
    });
  }, []);
   console.log(setAllOrder)

  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
      <br />
      <div className="order-table">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Mode</th>
              <th>Date/Time</th>
            </tr>
          </tbody>

          {allOrder.map((stock, index) => {
            return (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price.toFixed(2)}</td> 
                <td>
                  <span className={`${
                    stock.mode === "BUY" ? "badge text-bg-primary" : "badge text-bg-danger"
                  }`}> 
                    {stock.mode} 
                  </span>
                </td>
                <td>
                  <span style={{fontSize:'0.9rem'}}>
                    {new Date(stock.createdAt).toLocaleString("en-IN", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                  </span>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Orders;
