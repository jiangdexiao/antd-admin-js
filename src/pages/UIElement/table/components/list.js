import React from 'react';
import { Modal,Icon } from 'antd';
import {DataTable} from 'components';
import { UPDATE,DELETE } from '@/constant/options';

const {confirm} = Modal;
export default class ListView extends React.Component{

  render(){
    const columns = [
      {
        title: 'id',
        dataIndex:'id',
        width: 172,
        fixed:'left',
      },
      {
        title: 'name ',
        dataIndex:'name',
      },
      {
        title: 'age ',
        dataIndex:'age',
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        width: 172,
        fixed: 'right',
        render: (text, record)=>{
          return(
            <div className="opIcon">
              <Icon
                className="icon"
                type="edit"
                title="edit"
                onClick={this.props.onEvent.bind(null, record,UPDATE)}
              />
              <Icon
                className="icon"
                type="delete"
                title="delete"
                onClick={handleDeleteItem.bind(null, record,this)}
              />
            </div>
          );
        },
      }];
      const handleDeleteItem = (record,_this) => {
        confirm({
          title: '您确定要删除此问卷吗?',
          onOk() {
            _this.props.onEvent(record,DELETE);
          },
        });
      };
    return (
      <DataTable 
        columns={columns} 
      />
    );
  }
}