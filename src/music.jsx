import React, { Component } from 'react';
import Layout from './components/layout';
import Banner from './components/banner';
class Music extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Banner header='My Music' caption='Its like vibrations for your ears'/>
            <Layout>
                <h2>Buzz Buzz</h2>
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
 
export default Music;