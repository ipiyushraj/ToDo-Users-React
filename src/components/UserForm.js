import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { wait } from '../utilities/customWait';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
function UserForm(props) {
  const [form] = Form.useForm();
  const [confirmLoading, setConfirmLoading] = useState(false);

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onHandleOk = async () => {
    setConfirmLoading(true);
    await wait(2000);
    form
      .validateFields()
      .then(wait(2000))
      .then((values) => {
        props.onCreate(values);
        setConfirmLoading(false);
        form.resetFields();
      })
      .catch((info) => {
        setConfirmLoading(false);
        console.log('Validate Failed:', info);
      });
  };

  return (
    <div className='UserForm'>
      <Modal
        title={props.modalTitle}
        visible={props.modalVisible}
        okText={props.okText}
        cancelText={props.cancelText}
        onOk={onHandleOk}
        confirmLoading={confirmLoading}
        onCancel={() => props.setModalVisible(false)}>
        <Form
          {...layout}
          form={form}
          name='userfrom'
          initialValues={props.initialValues}
          onFinish={props.onSubmitUser}
          onFinishFailed={onFinishFailed}
          size='large'>
          <Form.Item
            label='Name'
            name='name'
            rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder='Name' size='large' />
          </Form.Item>

          <Form.Item
            label='Email'
            name='email'
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}>
            <Input placeholder='Email' size='large' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default UserForm;