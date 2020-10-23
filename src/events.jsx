import React, { Component } from 'react';
import Layout from './components/layout';
import Banner from './components/banner';

class Events extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Banner header='Events' caption='I played music live once or twice...'/>
            <Layout>
                <h2>Events</h2>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                <ul>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas ullam officiis mollitia repellat sunt repudiandae, vero dolor nobis fugit ratione earum quis maiores dolorum adipisci, assumenda vel corrupti, illo eveniet.</ul>
                </Layout>

        </div> );
    }
}
 
export default Events;