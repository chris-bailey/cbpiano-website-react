import React, { useEffect } from 'react';
import './Album.scss';
import cdCover from '../assets/images/cd-cover.jpg';

function Album() {
    useEffect(() => {
        document.title = "Album | Chris Bailey Piano";
    }, []);

    return (
        <div id="albumContent">
            <h1 id="firstHeading">I Will Always Remember</h1>

            <div className="topContent">
                <div id="leftTop">
                    <img className="aboutImage" src={cdCover} alt="I Will Always Remember - CD Cover Art" width="165" height="165" />
                </div>
                <div id="rightTop">
                    <p>This album is dedicated to my late father John W. Bailey who always sat in the living room and listened to me play piano. Each evening after work, he would listen to me play while reading books on history and philosophy. He sat about 15 feet away from the piano for the first 17 years of my life. When I said that I didn't know how to compose he hummed a few notes of a song that he made up in his head. After those first few notes I was off to the races. Thanks Dad! </p>
                    <p>My most heartfelt thanks to the most wonderful wife anyone could ever ask for. My wife Dobrija is the most incredible person I have ever or will ever meet.</p>
                </div>
            </div>

            <h2 className="center">Song Descriptions</h2>

            <div className="columns">
                <div id="leftColumn">
                    <h3 className="center">Dad</h3>
                    <p>After my father passed away in 1995 the theme for this song came to me suddenly, and I knew it should be dedicated to him.</p>

                    <h3 className="center">Emma</h3>
                    <p>This song is in loving memory of my young cousin Emma who left us way too early.</p>

                    <h3 className="center">Dobrija</h3>
                    <p>My wife Dobrija inspired this song which I composed after we first met. I played it for her after she beat me
                        at bowling on our first date and I play it for her still.</p>

                    <h3 className="center">Passion</h3>
                    <p>The year after my father passed was a time of intense emotion and this song was created during that
                        tumultuous time.</p>

                    <h3 className="center">Hope</h3>
                    <p>I started playing Hope while my father was fighting cancer. I played it at his
                        funeral after a courageous battle was fought.</p>
                </div>

                <div id="rightColumn">
                    <h3 className="center">Water Drops</h3>
                    <p>This theme was inspired by a summer spent surrounded by nature.</p>

                    <h3 className="center">Letting Go</h3>
                    <p>Sometimes in order to move forward we are forced to let go.</p>

                    <h3 className="center">Taking Flight</h3>
                    <p>Taking Flight was written for my father as I picture him continuing his journey in the next life.</p>

                    <h3 className="center">Flirting with the Wind</h3>
                    <p>This song represents the illusion of control.</p>

                    <h3 className="center">Emma Ever After</h3>
                    <p>After many months of playing the song Emma I felt inspired to move into variations on the theme. Emma Ever After
                        symbolizes her continuing journey in the afterlife.</p>
                </div>
            </div>
        </div>
    );
}

export default Album;