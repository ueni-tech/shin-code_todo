import React from 'react'

const Todo = () => {
  return (
    <div>
      <li className="py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="todo1"
              name="todo1"
              type="checkbox"
              className="h-4 w-4 text-teal-600 focus:ring-teal-500
                  border-gray-300 rounded"
            />
            <label className="ml-3 block text-gray-900">
              <span className="text-lg font-medium mr-2"> 散歩 </span>
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <button
              className="duration-150 bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-2 rounded"
            >
              ✒
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded"
            >
              ✖
            </button>
          </div>
        </div>
      </li>
    </div>

  )
}

export default Todo