import React, {useState, useEffect} from 'react';
import NavbarGenral from '../component/navbargenral'
import {useDispatch, useSelector, connect} from 'react-redux';
import {addUser} from '../actions/action'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import validators from '../component/validators';

export default function AddUser(props) {
const { handleSubmit, pristine, reset, submitting } = props

const formValidators = {
  name: validators.required('firsname is not found'),
  lastName: [validators.required('last name needed'), validators.maxLength(5)]
}

const dispatch = useDispatch()
const selector = useSelector(state => state.users)
console.log(selector)
const [values, setValues] = useState({
  name:"",
  gender:"",
  email:"",
  phonenumber:"",
  city:"",
  pincode:""
})

const handleChange = (event) => {
  event.persist();
  setValues((values) => ({
  ...values,
  [event.target.name]: event.target.value,
  }));
  };
console.log(values)


const onUserAdd = (e) => {
  e.preventDefault()
  dispatch(addUser(values))
}

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
          validate={formValidators.name}
          value={values.name}
          onChange={handleChange}
          className="border-none h-10 px-2 font-semibold py-1 w-96 rounded bg-gray-200"
          type="text"
          />
        </div>
        <div className="pt-7 flex">
          <div>
            <p className="font-semibold text-lg">gender</p>
            <input
              name="gender"
              value={values.gender}
              onChange={handleChange}
              className="border-none h-10 px-2 font-semibold py-1 w-56 rounded bg-gray-200 px-2"
              type="gender"
            />
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
            name="phonenumber"
            value={values.phonenumber}
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
            name="pincode"
            value={values.pincode}
            onChange={handleChange}
            className="border-none h-10 px-2 font-semibold py-1 w-96 rounded bg-gray-200"
            type="text"
          />
        </div>
        <div className="pt-12">
        <button onClick={onUserAdd} className="bg-indigo-600 px-8 py-2 font-bold text-lg text-white rounded">SUBMIT</button>
        </div>
      </form>
    </div>
  </div>
</div>
</div>
)
}