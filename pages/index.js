import React from "react";
import Navbar from "../component/navbar";
import {useDispatch, useSelector} from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Link from 'next/link'

export default function Home() {

  const selector = useSelector(state => state.users)
  
  // const userDetail = [
  //   {
  //     name: 'Pragi',
  //     gender: 'male',
  //     email: 'kasipragi143@gmail.com',
  //   },
  //   {
  //     name: 'Hari',
  //     gender: 'male',
  //     email: 'kasipragi143@gmail.com',
  //   }
  // ]
  
  

    return (
      <div>
      <Navbar />
      <div className="pt-12 flex flex-col px-56">
        <div className="-my-2 overflow-x-auto -mx-6 lg:mx-12 xl:mx-5 2xl:-mx-12">
          <div className="py-2 align-middle inline-block min-w-full px-6 lg:px-12">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr className="sm:table-row">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Gender
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Email
                    </th>
                  </tr>
                </thead>
                {selector.length > 0 ? (selector.map((userDetails,index) => (
                    <Link key={userDetails.name}  href={`/userdetail/${index+1}`}>
                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="sm:table-row">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="">
                            <div className="text-sm font-medium text-gray-900">{userDetails.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{userDetails.gender}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">{userDetails.email}</td>
                    
                      <button className="px-6 py-4 text-sm bg-red-500 text-white pr-5">Delete</button>
                    </tr>
                   </tbody>
                   </Link>
                ))) : 
                <div>
                  <div className="flex justify-center pt-12 pl-24">
                    <img className="w-24 pl-5" src="https://img-premium.flaticon.com/png/512/4508/premium/4508935.png?token=exp=1625131928~hmac=b30552cfbb09bd2298888423890eb879" alt="no data"/>
                    </div>
                    <p className="text-center pt-8">Please add new data<span className="text-red-500"> No user data found</span> </p>
                </div>
                  }
</table>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
