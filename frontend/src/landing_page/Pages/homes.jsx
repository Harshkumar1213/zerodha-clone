import { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import HomePage from "../home/HomePage";

export default function Homes () {
    const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
      "http://localhost:3001/verifyToken", // ✅ correct backend route
      {},
      { withCredentials: true }
      );
      const { status, user } = data;
      setUsername(user);
      return status
        ? toast(`Hello ${user}`, { 
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };
  return (
    <div>
          <div className="text-center mt-5">
            <h4 style={{color:"black"}}>Welcome {username}</h4>
          <Button variant="contained" onClick={Logout}>LOGOUT</Button>
          <ToastContainer />
          </div>
          <HomePage/> 
    </div>
  )
}
