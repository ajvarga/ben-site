import React, { Component } from 'react';


import Videos from './videos';
import { Row } from 'react-bootstrap';


class Theater extends Component {
    state = {
     }
    render() { 
        return ( 
        <div >
            <Row style={{display: 'flex', justifyContent:'center'}}>

                <div className='col-3'>
                    <Videos vid='neverGiveUp.mp4'/>
                </div>
                <div className='col-3'>
                    <Videos vid='chief.mp4'/>
                </div>
                <div className='col-3'>
                    <Videos vid='chief.mp4'/>
                </div>
            </Row>


            <Row style={{display: 'flex', justifyContent:'center'}}>
                <div className='col-3'>
                    <Videos vid='neverGiveUp.mp4'/>
                </div>
                <div className='col-3'>
                    <Videos vid='chief.mp4'/>
                </div>
                <div className='col-3'>

                    <Videos vid='neverGiveUp.mp4'/>
                </div>
            </Row>

            {/* <img src='sonicchu.jpg'></img> */}
        </div>

        );
    }

}
 
export default Theater;