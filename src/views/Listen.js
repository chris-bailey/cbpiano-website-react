import React, { useEffect } from 'react';
import './Listen.scss';

function Listen() {
    useEffect(() => {
        document.title = "Listen | Chris Bailey Piano";
    }, []);

    return (
        <div id="mainContentItunes">
            <h1>I Will Always Remember</h1>
            <p>The album <em>I Will Always Remember</em> is available on <a href="https://music.apple.com/us/album/i-will-always-remember/435243973">iTunes</a> and <a href="https://open.spotify.com/album/18mNvmkOHA1Ykxt5PXHqXz">Spotify</a>.</p>
        </div>
    )
};

export default Listen;