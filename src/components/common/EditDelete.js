import React, { useState } from 'react';
import UserForm from '../UserForm';
import { useDispatch } from 'react-redux';
import { editUser, removeUser } from '../../actions/userActions';
import { removeUserConfirm } from '../../utilities/removeUserConfirm';
import EditDeleteButton from './EditDeleteButton';
import TodoForm from '../TodoForm';
import { editTodo, removeTodo } from '../../actions/todoActions';
import moment from 'moment';

function EditDelete(props) {
  const { record, forUse } = props;
  const [openEditUser, setOpenEditUser] = useState(false);
  const dispatch = useDispatch();

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    const dateAdded = values.dateAdded && moment(values.dateAdded).format('L');
    if (forUse === 'todo') {
      dispatch(editTodo({ ...values, dateAdded, key: record.key }));
    }
    if (forUse === 'user') {
      dispatch(editUser({ ...values, key: record.key }));
    }
    setOpenEditUser(false);
  };

  const onRemoveUser = (key) => {
    if (forUse === 'todo') {
      dispatch(removeTodo(key));
    }
    if (forUse === 'user') {
      dispatch(removeUser(key));
    }
  };

  const onHandleDelete = () => {
    removeUserConfirm(record, onRemoveUser, forUse);
  };

  return (
    <div className='EditDelete'>
      <EditDeleteButton
        setOpenEditUser={setOpenEditUser}
        removeUserConfirm={onHandleDelete}
        editText='Edit'
        deleteText='Delete'
      />
      {forUse === 'todo' && (
        <TodoForm
          onCreate={onCreate}
          modalVisible={openEditUser}
          setModalVisible={setOpenEditUser}
          initialValues={{ ...record, dateAdded: moment(record.dateAdded) }}
          okText='Edit'
          cancelText='Cancel'
          modalTitle='Edit Todo'
        />
      )}
      {forUse === 'user' && (
        <UserForm
          onCreate={onCreate}
          modalVisible={openEditUser}
          setModalVisible={setOpenEditUser}
          initialValues={{ ...record }}
          okText='Edit'
          cancelText='Cancel'
          modalTitle='Edit User'
        />
      )}
    </div>
  );
}

export default EditDelete;