import React from 'react'
import InvestorList from './InvestorList'

// import { Form, Icon } from 'antd';

class SettingsPage extends React.Component {

  render() {
    return(
      <div className='container'>
        <InvestorList />
      </div>
    )
  }
}



export default SettingsPage