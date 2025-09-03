import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function MyAccount() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const formatDate = (input) => {
    const date = new Date(input)
    if (isNaN(date)) return "Invalid date";
    return date.toLocaleDateString("en-GB", {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
  }

  useEffect(() => {
    const fetchUserData = async () => {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://gem-business.onrender.com"
      const token = localStorage.getItem("token");

      if (!token) {
        setError("Please login again");
        navigate("/login");
        return
      }

      try {
        const res = await fetch(`${backendUrl}/auth/me`,{
          method: "GET",
          headers:{
            Authorization: `Bearer ${token}`,
            'Content-Type' : 'application/json'
          }
        });
        if(!res.ok) throw new Error("Failed to fetch user data");
        const data = await res.json();
        setUserData(data || {});

      } catch (err) {
setError(err.message);
      }
    }
    fetchUserData();
  }, [navigate])

   useEffect(() => {
    async function fetchOrders(){
      const backendUrl = import.meta.env.VITE_BACKEND_URL || "https://gem-business.onrender.com";
      const token = localStorage.getItem("token");
      if(!token){
        setError("Failed to login");
        navigate("/login");
        return
      }
      try{
         const res = await fetch(`${backendUrl}/my-orders`, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type' : 'application/json'
          }
         });
         const data = await res.json();

         if(!res.ok){
          setOrders(data || []);
         }else{
          setError(data.message || "Unable to fetch Order")
         }
      }catch(err){
            setError(err.message)
      }
    }
    fetchOrders();
   },[navigate])

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/login");
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#122118] to-[#1b3124] text-white overflow-x-hidden"
      style={{ fontFamily: '"Plus Jakarta Sans", "Noto Sans", sans-serif' }}
    >
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-6 md:px-10 flex flex-1 justify-center py-10">
          <div className="layout-content-container flex flex-col max-w-[1000px] w-full flex-1">
            {/* Header Section */}
            <div className="flex flex-wrap justify-between items-center gap-4 p-6 bg-[#1b3124]/80 rounded-xl shadow-lg mb-6">
              <h1 className="text-[#96c5a8] text-4xl font-extrabold leading-tight tracking-wide">
                My Account
              </h1>
              {error && <p className="text-red-300 text-sm italic">{error}</p>}
            </div>

            {/* Personal Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md mb-6">
              <h2 className="text-[#96c5a8] text-xl font-semibold mb-4 border-b border-[#366347]/50 pb-2">
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className="text-white text-lg font-medium">Name: <span className="text-[#c5dceb]">{userData.userName || "N/A"}</span></p>
                <p className="text-white text-lg font-medium">Email: <span className="text-[#c5dceb]">{userData.email || "N/A"}</span></p>
                <p className="text-white text-lg font-medium">Phone: <span className="text-[#c5dceb]">{userData.moNumber || "N/A"}</span></p>
              </div>
            </div>

            {/* Order History */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md mb-6">
              <h2 className="text-[#96c5a8] text-xl font-semibold mb-4 border-b border-[#366347]/50 pb-2">
                Order History
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-[#1b3124]/50 text-white">
                      <th className="px-4 py-3 text-sm font-medium">Order ID</th>
                      <th className="px-4 py-3 text-sm font-medium">Date</th>
                      <th className="px-4 py-3 text-sm font-medium">Status</th>
                      <th className="px-4 py-3 text-sm font-medium">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order, index) => (
                      <tr key={index} className="border-t border-[#366347]/30 hover:bg-[#1b3124]/30 transition-colors">
                        <td className="px-4 py-3 text-white">{order.id}</td>
                        <td className="px-4 py-3 text-white">{formatDate(order.date)}</td>
                        <td className="px-4 py-3">
                          <span className="inline-block px-3 py-1 bg-[#366347]/50 rounded-full text-sm text-white">
                            {order.status}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-white">{order.amount}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-md">
              <h2 className="text-[#96c5a8] text-xl font-semibold mb-4 border-b border-[#366347]/50 pb-2">
                Account Settings
              </h2>
              <div
                className="flex items-center justify-between gap-4 p-4 bg-[#1b3124]/50 rounded-lg hover:bg-[#2a3b32] transition-colors cursor-pointer"
                onClick={handleLogout}
              >
                <p className="text-white text-lg font-medium">Log Out</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="#96c5a8"
                  viewBox="0 0 256 256"
                >
                  <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;