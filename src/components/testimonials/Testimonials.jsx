import "./testimonials.scss"
export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: 'Belva Devara',
          title: 'CEO of Ruangguru',
          img:
            'assets/user2.jpg',
          desc:
            'Very helpful when building my website, I now have my ecommerce store built from scratch.',
        },
        {
          id: 2,
          name: 'William Tanuwijaya',
          title: 'CEO of Tokopedia',
          img:
            'assets/user1.jpg',
          desc:
            'Everything we ask him to do is done quickly and efficiently, we would be lost without him.. ',
          featured: true,
        },
        {
          id: 3,
          name: 'Kevin Aluwi',
          title: 'CEO of Gojek',
          img:
            'assets/user3.jpg',
          desc:
            'Genta is awesome, delivers exactly what you want and is a great guy as well, thanks for all your hard work on my website',
        },
      ]

    return (
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="container">
                {data.map(d=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img src="assets/right-arrow.png" className="left" alt="" />
                        <img className="user" src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
