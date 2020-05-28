import React, { useState } from 'react';
import { Form, Input, Modal, DatePicker } from 'antd';
import moment from 'moment';
import { wait } from '../utilities/customWait';

const dateFormat = 'DD/MM/YYYY';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
function TodoForm(props) {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [form] = Form.useForm();
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
    <div className='todoForm'>
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
            label='Action'
            name='action'
            rules={[{ required: true, message: 'Please input your name!' }]}>
            <Input placeholder='Action' size='large' />
          </Form.Item>

          <Form.Item
            label='Date'
            name='dateAdded'
            rules={[
              {
                required: true,
                message: 'Please Select Date',
              },
            ]}>
            <DatePicker
              placeholder='Select Date'
              style={{ width: '100%' }}
              format={dateFormat}
              defaultPickerValue={moment()}
            />
          </Form.Item>
          <Form.Item label='Operation' name='operation'>
            <Input placeholder='Operation' size='large' />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default TodoForm;