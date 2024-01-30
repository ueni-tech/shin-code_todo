export default function Home() {
  return (
    <div
      className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-32 py-4 px-4"
    >
      <div className="px-4 py-2">
        <h1 className="text-gray-800 font-bold text-2xl uppercase">To-Do List</h1>
      </div>
      <form className="w-full max-w-sm mx-auto px-4 py-2">
        <div className="flex items-center border-b-2 border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent
      border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight
      focus:outline-none"
            type="text"
            placeholder="Add a task"
          />
          <button
            className="duration-150 flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="divide-y divide-gray-200 px-4">
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
      </ul>
    </div>
  );
}
