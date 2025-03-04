import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {ErrorAlert, SuccessAlert} from "../../components/Alert";

function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    password: "",
  });
  const [data,setData] = useState([])
// get method
const API = import.meta.env.VITE_API_URL2;
const url = API
useEffect(() => {
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Məlumat alınmadı!");
      }
      return res.json();
    })
    .then((data) => setData(data))
    .catch((error) => console.error("Xəta:", error));
}, []);


 function handleChange(e) {

    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }
function handleSubmit(e){
  e.preventDefault()
  const admins = data.find((admin)=>(admin.username == form.name) && admin.password == form.password)
  if(admins){
  
    SuccessAlert()
    // alert("daxil olundu");
    navigate("/welcomeadmin")
    
  }
  else{
    // location("/notfound")
    ErrorAlert()
  }
  setForm({
    name:"",
    password:""
  })
}
  return (
    <>
      <section className="flex justify-center min-h-[70vh] items-center">
        <div className="bg-white flex justify-center items-center w-full md:w-[40vw] h-[300px] rounded-lg p-9">
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <input
            required
              type="text"
              name="name"
              placeholder="email"
              value={form.name}
              onChange={(e) => handleChange(e)}
              className="border p-3 rounded-lg md:w-[28vw] w-[85vw]"
            />
            <input
            required
              type="password"
              name="password"
              placeholder="password"
              value={form.password}
              onChange={(e) => handleChange(e)}
              className="border p-3 rounded-lg md:w-[28vw] w-[85vw]"
            />
            <button className="rounded-lg bg-blue-600 text-white py-3">
              Daxil ol
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

export default Login;
