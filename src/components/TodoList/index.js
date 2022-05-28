import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react'
import { addTodo } from '../../redux/actions'
import { v4 as uuidv4 } from 'uuid'
import { todoRemainingSelector } from '../../redux/selectors';

export default function TodoList() {
  const [todoName,setTodoName] = useState('')
  const [prioriry,setPriority] = useState('Medium')
  const todoList = useSelector(todoRemainingSelector)
  const refTodoName = useRef()
  const dispatch = useDispatch()  
  const handleAdd = () => {
    dispatch(addTodo({
      id:uuidv4(),
      name:todoName,
      prioriry:prioriry,
      completed:false
    }))
    setTodoName('')
    refTodoName.current.focus()
  }
  const handleTodoName = (e) => {
    setTodoName(e.target.value)
  }
  const handlePriority = (value) => {
    setPriority(value)
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map(todo => 
          <Todo 
          key={todo.id} 
          id={todo.id}
          name={todo.name} 
          prioriry={todo.prioriry} 
          completed={todo.completed} />
        )}
      </Col>
      <Col span={24}>
        <Input.Group  style={{ display: 'flex' }} compact >
          <Input ref={refTodoName} value={todoName} onChange={handleTodoName} />
          <Select defaultValue="Medium" value={prioriry} onChange={handlePriority}>
          <Select.Option value='High' label='High'>
              <Tag color='red'>High</Tag>
            </Select.Option>
            <Select.Option value='Medium' label='Medium'>
              <Tag color='blue'>Medium</Tag>
            </Select.Option>
            <Select.Option value='Low' label='Low'>
              <Tag color='gray'>Low</Tag>
            </Select.Option>
          </Select>
          <Button type='primary' onClick={handleAdd}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
