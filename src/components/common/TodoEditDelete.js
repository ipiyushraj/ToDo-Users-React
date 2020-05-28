import React, { useState } from 'react';
import { Button } from 'antd';
import UserForm from '../UserForm';
import { useDispatch } from 'react-redux';
import { editUser, removeUser } from '../../actions/userActions';
import { removeUserConfirm } from '../../utilites/removeUserConfirm';
import EditDelete from './EditDelete';

function UserEditDelete({ text, record }) {
  const [openEditUser, setOpenEditUser] = useState(false);
  const dispatch = useDispatch();

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    dispatch(editUser({ ...values, key: record.key }));
    setOpenEditUser(false);
  };

  const onRemoveUser = (key) => {
    dispatch(removeUser(key));
  };

  const onHandleDelete = () => {
    removeUserConfirm(record, onRemoveUser);
  };

  return (
    <div className='UserEditDelete'>
      <EditDelete
        setOpenEditUser={setOpenEditUser}
        removeUserConfirm={onHandleDelete}
        editText='Edit'
        deleteText='Delete'
      />
      <UserForm
        onCreate={onCreate}
        modalVisible={openEditUser}
        setModalVisible={setOpenEditUser}
        initialValues={{ ...record }}
        okText='Edit'
        cancelText='Cancel'
        modalTitle='Edit User'
      />
    </div>
  );
}

export default UserEditDelete;