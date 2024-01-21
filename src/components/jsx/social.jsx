import React from 'react';

export const Social = () => {
    let socials = [
        {href:'https://x.com/LHNTRX_music?t=t2sKheerDaBiBSAIibKnDw&s=09', img:'/img/social/x.png'},
        {href:'https://www.instagram.com/lhntrx.id/', img:'/img/social/ig.png'},
        {href:'https://open.spotify.com/artist/6x6nrMPqN6ScC66NHbjdbI?si=-mQp2f0WTlucXhiK9n_Dyw', img:'/img/social/spotify.png'},
        {href:'https://youtube.com/@LhntrxMusic?si=nYWeBUy0Z6l-wZkz', img:'/img/social/yt.png'},
    ]
    return (
        socials.map((value, index) => {
                return <a href={socials[index].href} key={socials[index].href}><img
                    src={process.env.PUBLIC_URL + socials[index].img}
                    alt={socials[index].img}/></a>
        })
    );
};