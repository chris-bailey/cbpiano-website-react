import React, { useEffect } from 'react';
import DobrijaAndI from '../assets/images/Dobrija-and-I.jpg';

function About() {
    useEffect(() => {
        document.title = "About | Chris Bailey Piano";
    }, []);

    const imageStyle = {
        float: 'right',
        margin: '3px 0 8px 12px',
    };

    return (

        <div id="mainContent">
            <h1>About Me</h1>

            <img style={imageStyle} src={DobrijaAndI} width="220" height="173" alt="My wife Dobrija & myself" />

            <p>I was born in Ontario, Canada where I started playing piano when I was just four years old. I started out by
                playing classical music in every one of my lessons, but it couldn't hold my full attention.</p>

            <p>I tried out a couple of different teachers before I found the incredibly talented Francis Rose. We made a deal
                where I agreed to play classical music if he also taught me how to play the popular songs I was passionate
                about. Among my favourites were "The Pink Panther" and "Great Balls of Fire" which I was very excited to play at
                school talent shows. Thanks to the teaching style and expertise of Francis Rose, by the time I was 14 I was
                playing classical music at the highest levels. This inspired me to search out a new challenge, and I started
                learning how to compose music.</p>

            <p>I have found that composing is an excellent way for me to express myself. Many of the themes have been inspired
                by loss. This album is dedicated to the memory of my father, John W. Bailey, who passed away when I was 17 years
                old. Two of the songs — <em>Emma</em> and <em>Emma Ever After</em> — were inspired by my cousin Emma Leigh
                Bailey, who passed suddenly in a car accident in 2007. It was a tragedy; she was only 23 and so full of life and
                joy. </p>

            <p>I hope that you enjoy listening to the music as much as I enjoyed creating it!</p>

            <br />

        </div>
    );
}

export default About