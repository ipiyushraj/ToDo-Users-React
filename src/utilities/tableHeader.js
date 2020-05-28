import React from 'react';
import EditDelete from '../components/common/EditDelete';

export const todoColumns = [
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'name',
  },
  {
    title: 'DateAdded',
    dataIndex: 'dateAdded',
    key: 'dateadd',
  },
  {
    title: 'Operation',
    dataIndex: 'operation',
    key: 'operation',
  },
  {
    title: 'Others',
    dataIndex: '',
    key: 'y',
    render: (text, record) => (
      <EditDelete text={text} record={record} forUse='todo' />
    ),
  },
];

export const userColumns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Action',
    dataIndex: '',
    key: 'x',
    render: (text, record) => (
      <EditDelete text={text} record={record} forUse='user' />
    ),
  },
];
