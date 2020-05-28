import React, { Fragment } from 'react';
import { Button } from 'antd';

function EditDeleteButton(props) {
  return (
    <Fragment>
      <Button type='link' onClick={() => props.setOpenEditUser(true)}>
        {props.editText}
      </Button>
      |
      <Button onClick={props.removeUserConfirm} type='link'>
        {props.deleteText}
      </Button>
    </Fragment>
  );
}

export default EditDeleteButton;
