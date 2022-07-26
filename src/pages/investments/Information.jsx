import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as Back_btn_border } from '../../images/backButton_border.svg';
import { ReactComponent as Back_home_border } from '../../images/back_home_border.svg';
import InvestImg from '../../images/invest/background_invest_page.jpg';

export const information = () => {

    const navigate = useNavigate();
    return (

        <div className='background_information'>
            <div className='btn_back_container' >
                <div className='btn_back_cluster' onClick={() => navigate('/')}>
                    <Back_btn_border className='header_icons' />
                </div>
                <div className='btn_back_cluster' onClick={() => navigate('/')} style={{ marginLeft: '18px' }} >
                    <Back_home_border className='header_icons' />
                </div>
            </div>
        </div>
    )
}

export default information;