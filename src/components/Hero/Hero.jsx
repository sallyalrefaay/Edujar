import './Hero.css'
export default function Hero() {
    return (
    <section className='hero'>
        <div className="image"><img className='man' src="/Edujar/assets/left-hero.png" alt="man image" /></div>
        <div className='desc'> 
            <h1>Learn with us anywhere with the best <span>experts<img src="/Edujar/assets/line.png" alt="line" /></span></h1>
            <p>We collaborate with 275+ leading universities and companies</p>
            <div className="explore">
                <input type="text" placeholder='Want do you want to learn?' />
                <button>Explore</button>
            </div>
        </div>
        <div className="image"><img className='man' src="/Edujar/assets/right-hero.png" alt="man image" /></div>
    </section>
    )
}
