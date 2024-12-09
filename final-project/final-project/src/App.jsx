import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {nanoid} from 'nanoid'
import AddStudent from './AddStudent';

function App() {
  const [allStudents, setAllStudents] = useState(null);

  const students = [{
    id: nanoid(),
    firstName: "Thalia",
    lastName: "Houson",
    email: "thouson0@statcounter.com",
    image: "student1.jpg"
  }, {
    id: nanoid(),
    firstName: "Chick",
    lastName: "Enrich",
    email: "cenrich1@comsenz.com",
    image: "student2.jpg"
  }, {
    id: nanoid(),
    firstName: "Naomi",
    lastName: "Cokely",
    email: "ncokely2@mediafire.com",
    image: "student3.jpg"
  }, {
    id: nanoid(),
    firstName: "Gayle",
    lastName: "Canlin",
    email: "gcanlin3@wikipedia.org",
    image: "student4.jpg"
  }, {
    id: nanoid(),
    firstName: "Tomkin",
    lastName: "Liccardo",
    email: "tliccardo4@admin.ch",
    image: "student5.jpg"
  }, {
    id: nanoid(),
    firstName: "Colas",
    lastName: "Waby",
    email: "cwaby5@amazonaws.com",
    image: "student6.jpg"
  }, {
    id: nanoid(),
    firstName: "Maurise",
    lastName: "Gartell",
    email: "mgartell6@pagesperso-orange.fr",
    image: "student7.jpg"
  }, {
    id: nanoid(),
    firstName: "Alfred",
    lastName: "Bleythin",
    email: "ableythin7@mediafire.com",
    image: "student8.jpg"
  }, {
    id: nanoid(),
    firstName: "Eolande",
    lastName: "Cesco",
    email: "ecesco8@techcrunch.com",
    image: "student9.jpg"
  }, {
    id: nanoid(),
    firstName: "Ginelle",
    lastName: "Keilty",
    email: "gkeilty9@disqus.com",
    image: "student10.jpg"
  }]

  const addStudent =(newStudent) => {
    const updatedStudents = [...allStudents,newStudent]
    saveStudents(updatedStudents);
  }

  return (
   <div className='container'>
    <div className='row'>
      {allStudents && allStudents.map((student) => (
      <div className='col-lg-2' key={student.id}>
        <div className='card'>
        <img src={student.image} alt="Our Student" />
        <ul className=' list-group list-group-flush'>
          <li className='list-group-item'>{student.firstName}</li>
          <li className='list-group-item'>{student.lastName}</li>
          <li className='list-group-item'>{student.email}</li>
        </ul>
      </div>  
      </div>)
    )}
      
    </div>

    {!allStudents && <button type='button' className='btn btn-lg btn-success' onClick={() => setAllStudents(students)}>Save Students</button>}
    <AddStudent addStudent={addStudent}/>
   </div>
  )
}

export default App
