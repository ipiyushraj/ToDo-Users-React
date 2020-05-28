import React, { useState } from 'react';
import CreateModalButton from './common/CreateModalButton';
import UserForm from './UserForm';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { createUser } from '../actions/userActions';
import { userColumns } from '../utilities/tableHeader';
import TableLists from './common/TableLists';

function Users() {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  const onCreate = (values) => {
    console.log('Received values of form: ', values);
    const key = uuidv4();
    const data = { ...values, key };
    dispatch(createUser(data));
    setModalVisible(false);
  };
  const userState = useSelector((state) => state.user);

  return (
    <div className='Users'>
      <CreateModalButton
        buttonText='Create User'
        setModalVisible={setModalVisible}>
        <UserForm
          onCreate={onCreate}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          okText='Create'
          cancelText='Cancel'
          modalTitle='Add User'
        />
      </CreateModalButton>
      <br />
      <TableLists data={userState.users} columns={userColumns} />
    </div>
  );
}

export default Users;