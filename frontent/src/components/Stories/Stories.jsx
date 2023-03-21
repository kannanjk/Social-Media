import React from 'react'
import './Stories.scss'

function Stories({location}) {
    const storie = [
        {
            id: 1,
            name: "Jishnu",
            img: "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2020/01/15/Actress-Rashmika-Mandanna-latest-cute-HD-stills-7-scaled.jpg?quality=90&zoom=1&ssl=1"
        },
        {
            id: 2,
            name: "kannan",
            img: "https://1.bp.blogspot.com/-2gUK_72jpeA/Xo8s0xA55BI/AAAAAAAABSI/o0fCqKAo6rsmTQnGCc9tTVZ-zy8AXok4QCLcBGAsYHQ/s1600/Rashmika%2BMandanna%2Bbeautifully%2Bimages.jpg"
        },
        {
            id: 3,
            name: "salman",
            img: "https://images.cinemaexpress.com/uploads/user/imagelibrary/2018/7/4/original/rashmika-mandanna-.jpg"
        },
        {
            id: 4,
            name: "charu",
            img: "https://www.thetelugufilmnagar.com/wp-content/uploads/2020/03/RASHMIKA.jpg"
        },
    ];
    return (
        <div className="stories">
              <div className="story">
                    <img src="https://1.bp.blogspot.com/-pEaSgnZYoG8/XsPj9lm2g5I/AAAAAAAAcQY/tPmxdV68b3ohExlzgFAKw6aH7apsObLNgCLcBGAsYHQ/s1600/nayanthara-64.png" alt="" />
                    <span> Kannan</span>
                    <button>+</button>
                </div>
            {storie.map(stor=>(
                <div className="story" key={stor.id} >
                    <img src={stor.img} alt="" />
                    <span> {stor.name}</span>
                </div>
            ))}
        </div>
    )
}

export default Stories