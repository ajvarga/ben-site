import React, { Component } from 'react';
import Theater from './components/theater';
import './App.css';
import Banner from './components/banner';




class Home extends Component {
    state = { 

     }
    render() { 
        return ( 
                <div>
                    {/* <Banner header='Greetings' caption='I make music n stuff, Hi mom'/> */}
                    {/* <div className='page-header'>
                        <h1 className='text-center'><s>Ben Visini<s></h1>
                    </div> */}
                    <div>
                        <Theater Fixed></Theater>
                    </div>
                </div>
         );
    }
}
 
export default Home;