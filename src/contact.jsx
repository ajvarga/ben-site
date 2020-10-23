import React, { Component } from 'react';
import Banner from './components/banner';
import  Layout  from './components/layout';

class Contact extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Banner header='CContact Me' caption='please...'/>
            <Layout>
                <h2>SOCIAL MEDIA</h2>
                <h6>my social ID is :420 69 1337</h6>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi expedita eos porro molestiae aut quas repudiandae laboriosam et! Reiciendis laudantium inventore eaque, libero ex quod facilis quaerat earum totam! Aperiam.

                </p>
            </Layout>
        </div> );
    }
}
 
export default Contact;