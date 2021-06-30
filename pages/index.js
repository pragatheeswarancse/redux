import React from "react";
import Navbar from "../component/navbar";
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
export default function Home() {
  const userDetail = [
    {
      name: 'Pragi',
      gender: 'male',
      email: 'kasipragi143@gmail.com',
    },
    {
      name: 'Hari',
      gender: 'male',
      email: 'kasipragi143@gmail.com',
    }
  ]
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
                <tbody className="bg-white divide-y divide-gray-200">
                  
                  {userDetail.map((userDetails) => (
                    <tr className="sm:table-row" key={userDetails.name}>
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
                      <td className="px-6 py-4 text-sm bg-red-500 text-white">Delete</td>
                    </tr>
                  ))}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      </div>
    )
  }
