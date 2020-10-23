import React, { Component } from 'react';
import Layout from './components/layout';
import Banner from './components/banner';
class SevenDay extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
            <Banner header='7-Day Songs' caption='Ever since that day, Ive been making a song a week...'/>
            <Layout>
                <h2>7-Day Songs</h2>
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
 
export default SevenDay;