import './Rating.css'
export default function Rating() {
    return (
    <div className="container">
        <div className="part">
            <h2>60K+</h2>
            <p>Live Courses</p>
        </div>
        <div className="part">
            <h2>35K+</h2>
            <p>Category</p>
        </div>
        <div className="part partCenter">
            <div className='title'>
            <img src="/Edujar/assets/star.svg" alt="star icon" />
            <h2>Trustpilot</h2>
            </div>
            <div className="rating">
                <p>View our 1,602 reviews</p>
                <div>
                    <h3> 4.9 </h3>
                    <img src="/Edujar/assets/Star 2.svg" alt="star icon" />
                </div>
            </div>
        </div>
        <div className="part">
            <h2>25K+</h2>
            <p>Professionals</p>
        </div>
        <div className="part">
            <h2>125K+</h2>
            <p>Students</p>
        </div>
    </div>
    )
}
