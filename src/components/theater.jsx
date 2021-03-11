import React, { Component } from 'react';
import cringe from '../assets/leord.png';


import Videos from './videos';
import { Card } from 'react-bootstrap';


class Theater extends Component {
    state = {
     }
    render() {     

        return ( 
        <section class='animated-grid'>
            {/* <Row style={{display: 'flex', justifyContent:'center'}}> */}

            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            {/* </Row> */}
            {/* <Row style={{display: 'flex', justifyContent:'center'}}> */}
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div>
                <video class='card'
                width='100%'
                height='100%'
                src={'chief.mp4'} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
            <div class='card' id='main'>
                
            </div>
            {/* </Row> */}

            {/* <img src='sonicchu.jpg'></img> */}
        </section>

        );
    }

}
 
export default Theater;