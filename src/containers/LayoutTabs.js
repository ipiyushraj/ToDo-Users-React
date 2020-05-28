import React from 'react';
import { Tabs } from 'antd';
import Todos from '../components/Todos';
import Users from '../components/Users';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}
function LayoutTabs() {
  return (
    <div className='LayoutTabs'>
      <Tabs defaultActiveKey='1' onChange={callback} size='large'>
        <TabPane tab='Todos' key='1'>
          <Todos />
        </TabPane>
        <TabPane tab='Users' key='2'>
          <Users />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default LayoutTabs;