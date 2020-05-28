import React from 'react';
import { Table } from 'antd';

function TableLists(props) {
  return (
    <div className='TableLists'>
      <Table dataSource={props.data} columns={props.columns} />
    </div>
  );
}

export default TableLists;
