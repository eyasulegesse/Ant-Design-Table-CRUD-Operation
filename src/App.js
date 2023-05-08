import { useState } from 'react';
import './App.css';
import { Spin, Button } from 'antd';
import { UserAddOutlined, LockOutlined } from '@ant-design/icons';
import Login from './components/login';
import TableComponent from './components/table';
import IconComponent from './components/icon';
import TableCrud from './components/tableCrud';
function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className='App'>
      <header className='App-header'>
        <TableCrud />
      </header>
    </div>
  );
}

export default App;
