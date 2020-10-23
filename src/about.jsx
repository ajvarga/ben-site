import React, { Component } from 'react';
import Banner from './components/banner';
import  Layout  from './components/layout';


class About extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Banner header='About Me' caption='My name is ben, im 60% water, 20% jewish 30% beard and 100% bad at math'/>
            <Layout>
                <h2>About</h2>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
            </Layout>
        </div>
         );
    }
}
 
export default About;