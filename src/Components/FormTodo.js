import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap';

const FormTodo = ({addTodo}) => {
  const [value,setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value)
    setValue('');
  }
  return (
    <div>
               <Form onSubmit={handleSubmit}>
                   <Form.Group>
                           <Form.Control type='text'
                            className='input'
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder='Enter Todo'/>
                   </Form.Group>
                   <br></br>
                   <Button type='Submit'>Add Todo</Button>
               </Form>
    </div>
  )
}

export default FormTodo
