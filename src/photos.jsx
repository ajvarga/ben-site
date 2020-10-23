
import React, { Component } from 'react';
import Layout from './components/layout';
import Banner from './components/banner';

class Photos extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Banner header='Photos' caption='UwU this is my good side'/>
            <Layout>
                <h2>It me</h2>
                <h6>hey baby</h6>
                <img src='Sonichu.jpg' alt='marioSonic.gif' width='500' height='700'></img>
            </Layout>
        </div> 
        );
    }
}
 
export default Photos;