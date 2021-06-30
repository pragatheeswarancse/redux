import React, {useState, useEffect} from 'react';
import NavbarGenral from '../component/navbargenral'

export default function AddUser() {

const [values, setValues] = useState({
  name:"",
  gender:"",
  email:"",
  phone:"",
  city:"",
  pincode:""
})

const handleChange = (event) => {
  event.persist();
  setValues((values) => ({
  ...values,
  [event.target.name]: event.target.value,
  }));
  setItem([...item])
  };
console.log(values)

useEffect(()=>{
    const values = localStorage.getItem('values')
    if(values){
      setItem(JSON.parse(values))
     }
    },[])
    useEffect( () => {
      localStorage.setItem('values',JSON.stringify(item))
    })

return(
  <div>
  <NavbarGenral />
<div className=" pt-5  xl:ml-3">
  <div className="flex lg:pt-12 xl:items-center lg:justify-center lg:h-screen lg:bg-gradient-to-r from-gray-300 to-gray-50">
    <div className="container px-5">
      <form className="bg-white rounded-lg xl:shadow-lg p-8 xl:px-20 mx-2 pt-12 pb-24">
        <div className="">
          <h2 className="text-lg tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-2xl xl:text-3xl">
            Add<span className="text-indigo-600"> User</span>
          </h2>
        </div>
        <div className="pt-7">
          <p className="font-semibold text-lg">Name</p>
          <input
          name="name"
          value={values.name}
          onChange={handleChange}
          className="border-none h-10 px-2 font-semibold py-1 w-96 rounded bg-gray-200"
          type="text" />
        </div>
        <div className="pt-7 flex">
          <div>
            <p className="font-semibold text-lg">gender</p>
            <select
              name="gender"
              value={values.gender}
              onChange={handleChange}
              className="border-none h-10 px-2 font-semibold py-1 w-56 rounded bg-gray-200 px-2 "
              type="text">
                  <option value="male">Male</option>
                  <option value="female">female</option>
                  <option value="Rather to say">Rather to say</option>
              </select>
          </div>
          <div className="pl-7">
            <p className="font-semibold text-lg">Email</p>
            <input
              name="email"
              value={values.email}
              onChange={handleChange}
              className="border-none h-10 px-2 font-semibold py-1 w-56 rounded bg-gray-200 px-2"
              type="email"
            />
          </div>
        </div>
        <div className="pt-7">
          <p className="font-semibold text-lg">Phone Number</p>
          <input
            name="PhoneNumber"
            value={values.PhoneNumber}
            onChange={handleChange}
            className="border-none h-10 px-2 font-semibold py-1 w-96 rounded bg-gray-200"
            type="tel"
          />
        </div>
        
        <div className="pt-7">
          <p className="font-semibold text-lg">city</p>
          <input
            name="city"
            value={values.city}
            onChange={handleChange}
            className="border-none h-10 px-2 font-semibold py-1 w-96 rounded bg-gray-200"
            type="text"
          />
        </div>
        <div className="pt-7">
          <p className="font-semibold text-lg">Pincode</p>
          <input
            name="Pincode"
            value={values.Pincode}
            onChange={handleChange}
            className="border-none h-10 px-2 font-semibold py-1 w-96 rounded bg-gray-200"
            type="text"
          />
        </div>
        <div className="pt-12">
        <button type="submit" className="bg-indigo-600 px-8 py-2 font-bold text-lg text-white rounded">SUBMIT</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
)
}