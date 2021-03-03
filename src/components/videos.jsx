import React, { Component } from 'react';
import styled from 'styled-components';

const Styles = styled.div`
    .zoom {
        padding:15px;
        transition: .2s;
        width: 360px;
        height: 280px;
        margin 0 auto;
        }
    .zoom:hover {
        transform: scale(1.5);
    }
`
class Videos extends Component {
    state = {  }
    render() { 
        return ( 
        <Styles>
            <div className='zoom'>
                <video 
                width="240" height="201.38" 
                src={this.props.vid} 
                onMouseEnter={event => event.target.play()} onMouseLeave={event => event.target.pause()}
                loop>
                </video> 
            </div>
        </Styles>
);
    }
}
 
export default Videos;