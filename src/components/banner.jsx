import React, { Component } from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import styled from 'styled-components';
import cringe from '../assets/leord.png';


//  background-size: 2000px 300px;
const Styles = styled.div`
    .jumbotron{
        background: url(${cringe}) fixed;
        height: auto;
        position: relative;
        border: 2px solid white;
        color: white;
    }
    .text{
        background-color: black;
        opacity: .75;
        padding: 15px;
        margin-left: 150px;
        border-radius: 20px;
        padding-left: 4em;
        width: 500px
    }
    `;
class Banner extends Component {
    state = {  }
    render() { 
        return ( 
        <Styles>
            <Jumbo fluid className='jumbo'>
                <Container className='text'>
                    <h1>{this.props.header}</h1>
                    <p>{this.props.caption}</p>
                </Container>
            </Jumbo>
        </Styles> );
    }   
}
 
export default Banner;