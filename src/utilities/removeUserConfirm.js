import React from 'react';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';
import { wait } from './customWait';
const { confirm } = Modal;

export const removeUserConfirm = (record, action, forUse) => {
  confirm({
    title: `Are you sure you want to delete this ${forUse === 'todo' ? 'todo' : ''} ${
      forUse === 'user' ? `${record.name}'s users?` : ''
    }`,
    icon: <ExclamationCircleOutlined />,
    content: 'Have you completed the task',
    okText: 'Delete',
    okType: 'danger',
    cancelText: 'No',
    async onOk() {
      await wait(2000);
      action(record.key);
      console.log('Delete');
    },
    onCancel() {
      console.log('Cancel');
    },
  });
};
