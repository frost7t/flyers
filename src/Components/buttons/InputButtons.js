import React from 'react'

export default function InputButtons() {
  return (
    <div className="mt-4">
      <div className="flex flex-col">
        <label htmlFor="fromInput" className="mb-1 text-sm font-semibold">
          From*
        </label>
        <div className="border-b border-gray-500">
          <input
            type="text"
            id="fromInput"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="toInput" className="mb-1 text-sm font-semibold">
          To*
        </label>
        <div className="border-b border-gray-500">
          <input
            type="text"
            id="toInput"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <label htmlFor="passengersInput" className="mb-1 text-sm font-semibold">
          Passengers*
        </label>
        <div className="border-b border-gray-500">
          <input
            type="number"
            id="passengersInput"
            className="w-full bg-transparent focus:outline-none"
          />
        </div>
      </div>
    </div>
  );
}
