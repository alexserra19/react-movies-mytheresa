import React from 'react';
import { Spin } from 'antd';

export const LoadingSpinner = (props) => {

    return (
        <div style={{width:'100%', textAlign:'center'}}>
            <Spin size={'large'} />
        </div>
    );
}