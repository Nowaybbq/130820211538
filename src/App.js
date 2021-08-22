import { useState } from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'
import photo from './photo.png'
import like from './like.png'
import comment from './comment.png'

function App() {

  const [todos, setTodos] = useState([])

  const addTask = (userInput) => {
    if(userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2,9),
        task: userInput,
      }
      setTodos([...todos, newItem])
    }
  }


  return (
    <div className="wrapper">
      <div className="content">

        <div className="block1">
          <div className="intro">
            <div className="text1">Вероника Ростова</div>
            <div className="text2">Менеджер по продажам</div>
          </div>
          <div className="bg-yellow">
            <div className="text3">Подберу для вас самые лучшие предложения.</div>
            <div className="text4">Мои услуги абсолютно бесплатны</div>
          </div>
          <div className="block1_image">
            <img src={photo}></img>
          </div>
        </div>

        <div className="block2">
                <div className="text5">Услуг</div>
                <div className="table">
                  <div className="numbers">
                    <ul className="list1">
                      <li>11</li>
                      <li>3</li>
                      <li>1</li>
                    </ul>
                  </div>
                  <div className="titles">
                    <div className="rec-green"></div>
                    <div className="rec-blue1"></div>
                    <div className="rec-blue2"></div>
                    <ul className="list2">
                      <li>Ручное бронирование</li>
                      <li>Пакетные туры</li>
                      <li>Отели</li>
                    </ul>
                  </div>
                </div>
                <div className="all">
                  <div className="text6">Всего</div>
                  <div className="text7">15</div>
                </div>           
          </div>
          
          <div className="block3">
                <div className="text8">Последние отзывы</div>
                <div className="text9">Все отзывы</div>
  
                  <div className="like_img">
                    <img src={like}></img>
                    <div className="text10">131</div>
                  </div>
                    <div className="comment_img">
                      <img src={comment}></img>
                    </div>
                    <div className="text11">14</div>
          </div>

          <div className="block4">
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => {
        return (
          <div className="comment">
            <ToDo
            todo={todo}
            key={todo.id}
            />
          </div>

        )
      })}
    </div>

      </div>
    </div>     
  );  
  
}
  


export default App;
