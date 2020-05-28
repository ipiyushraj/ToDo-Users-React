import React, { useState } from 'react';
import CreateModalButton from './common/CreateModalButton';
import TodoForm from './TodoForm';
import { useDispatch, useSelector } from 'react-redux';
import { createTodo } from '../actions/todoActions';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { todoColumns } from '../utilities/tableHeader';
import TableLists from './common/TableLists';

function Todos() {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();

  const onCreate = (values) => {
    console.log('Received values of Todo: ', values);
    const dateAdded = moment(values.dateAdded).format('L');
    const key = uuidv4();
    const data = { ...values, dateAdded, key };
    dispatch(createTodo(data));
    setModalVisible(false);
  };
  const todoState = useSelector((state) => state.todo);

  return (
    <div className='Todos'>
      <CreateModalButton
        buttonText='Create Todo'
        setModalVisible={setModalVisible}>
        <TodoForm
          onCreate={onCreate}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          okText='New Todo'
          cancelText='Cancel'
          modalTitle='Add New Todo'
        />
      </CreateModalButton>
      <br />
      <TableLists data={todoState.todos} columns={todoColumns} />
    </div>
  );
}

export default Todos;