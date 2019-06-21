/*
 * @Description: 基类模态框
 * @Author: jiangdexiao
 * @Date: 2019-06-19 14:24:05
 * @LastEditTime: 2019-06-21 13:59:27
 * @LastEditors: Please set LastEditors
 */
import React from 'react';
import { Modal,Spin } from 'antd';
import PropTypes from 'prop-types';
export default class BaseModal extends React.Component{
  static propTypes = {
    hideRequiredMark: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    loading:PropTypes.bool,
    afterClose:PropTypes.func,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
    footer:PropTypes.bool
  };
  static defaultProps = {
    hideRequiredMark: false,
    width: 640,
    title: undefined,
    cancelText: '取消',
    okText:'确定',
    loading:true,
    maskClosable:false,
    centered: true,
    className: 'customer-modal',
    onCancel:e=>{
    },
    onOk:e=>{
    }
  };

   /**
   * 组件显示标题，可覆盖
   *
   * @returns {string}
   */
  getTitle = () => '';

  render() {
    const { children, title, width, visible, okText, cancelText,loading,footer, ...restProps } = this.props;
    return (
      <Modal
        visible
        title={title || this.getTitle()}
        width={width}
        okText={okText}
        onOk={this.onOk}
        cancelText={cancelText}
        onCancel={this.onCancel}
        {...restProps}
        destroyOnClose
        footer={footer}
      >
        {loading?<Spin style={{ display: 'block' }} spinning={loading} tip="loading...." />:children }
      </Modal>
    )
  }
}