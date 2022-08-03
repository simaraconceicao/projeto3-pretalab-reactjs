import { useState, useEffect } from 'react'
import { FiTrash2, FiPlus } from 'react-icons/fi'

import imgList from '../../assets/list.svg'
import Header from '../../components/Header/Header'
import './list.css'


const List = () => {
  const getLocalList = () => {
    let items = localStorage.getItem('list')
  
    if (items) {
      return JSON.parse(localStorage.getItem('list'))
    } else {
      return []
    }
  }
  
  const [list, setList] = useState(getLocalList)
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    // Crie uma nova task com um id random, não permita criar caso o título seja vazio.
    const task = {
      id: Math.random(),
      title: newTask,
      isComplete: false
    }

    if(task.title === '') {
      return
    }

    setList([...list, task])
    setNewTask('')
  }

  function handleToggleTaskCompletion(id) {
    //Altere entre `true` ou `false` o campo `isComplete` de uma task com dado ID
    //Encontre uma tarefa pelo id, olhe pra o isComplete e alterne o valor entre true e false quando for clicado
    const newTasks = list.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete,
    } : task)
    
    setList(newTasks)
  }

  function handleRemoveTask(id) {
    // Remova uma task da listagem pelo ID
    const tasksFiltered = list.filter(task => task.id !== id)
    setList(tasksFiltered)
  }

  //salvar na localStorage
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list))
  }, [list])

  return (
    <>
      <Header image={imgList}>Dicas, feedbacks, mensagens de paz</Header>
      <section className="list">
        <header>
          <div className="input-container">
            <input 
              type="text" 
              placeholder="Digite aqui" 
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
            <div className="add-container">
              <button className="add-task" type="submit" data-testid="add-task" onClick={handleCreateNewTask}>
                <FiPlus size={16} color="#fff"/>
              </button>
            </div>
          </div>
        </header>

        <main>
          <ul className='list-items'>
            {list.map(task => {
              return(
                <li key={task.id}>
                  <div className={task.isComplete ? 'completed' : ''} data-testid="task" >
                    <p>{task.title}</p>
                  </div>
                  <button className="remove-task"type="button" data-testid="remove-task" onClick={() => handleRemoveTask(task.id)}>
                    <FiTrash2 size={16}/>
                  </button>
                </li>
              )
            })}
            
          </ul>
        </main>
      </section>
    </>
    
  )
}

export default List