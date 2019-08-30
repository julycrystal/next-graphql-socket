import React from 'react';
import {Breadcrumb} from 'antd';
import style from './style.module.scss';

const CustomBreadcrumb = () => {
  return(
    <Breadcrumb className={style.breadcrumb}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default CustomBreadcrumb;
