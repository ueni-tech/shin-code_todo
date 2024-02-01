import React, { FC, useState } from 'react'
import { TodoType } from '../types'
import axios from 'axios'
import useSWR from 'swr'
import { useTodos } from '../hooks/useTodos'

type Props = {
  todo: TodoType
}

const Todo: FC<Props> = ({ todo }) => {

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const { todos, isLoading, error, mutate } = useTodos();

  const handleEdit = async () => {
    setIsEditing(prev => !prev);
    if (isEditing) {
      const response = await axios.put(`http://localhost/api/todos/${todo.id}`, { title: editedTitle });

      if (response.status === 200) {
        const editedTodo = await response.data;
        const updatedTodos = todos.map((todo: TodoType) => todo.id === editedTodo.id ? editedTodo : todo);
        mutate(updatedTodos);
      }
    }
  }

  const handleDelete = async () => {
    const response = await axios.delete(`http://localhost/api/todos/${todo.id}`);
    if (response.status === 200) {
      const deletedTodo = await response.data;
      const updatedTodos = todos.filter((todo: TodoType) => todo.id !== deletedTodo.id);
      mutate(updatedTodos);
    }
  }

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
              {isEditing ? (
                <input type="text" className='border rounded py-1 px-2' value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
              ) : (
                <span className="text-lg font-medium mr-2">{todo.title}</span>
              )}
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleEdit}
              className="duration-150 bg-green-600 hover:bg-green-700 text-white font-medium py-1 px-2 rounded"
            >
              {isEditing ? "save" : "✒"}
            </button>
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-2 rounded"
              onClick={handleDelete}
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