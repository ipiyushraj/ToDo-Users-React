import React from 'react';
import { Button } from 'antd';

function CreateModalButton(props) {
  return (
    <div className='CreateModalButton'>
      <div className='CreateModalButton__header'>
        <Button
          type='primary'
          size='large'
          onClick={() => props.setModalVisible(true)}>
          {props.buttonText}
        </Button>
      </div>
      {props.children}
    </div>
  );
}

export default CreateModalButton;
