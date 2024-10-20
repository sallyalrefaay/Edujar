import './Categories.css'
export default function Categories() {
    return (
    <div className="topCategories">
        <h1>Explore Top Categories </h1>
        <p>Click on the categories and explore all courses</p>
        <div className="container-2">
            <img className='arrow' src="/Edujar/assets/arrow.svg" alt="arrow icon" />
            <div className="card">
                <div className="icon">
                    <img src="/Edujar/assets/Pen.svg" alt="pen icon" />
                </div>
                <p>Art & Design </p>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="/Edujar/assets/Chat.svg" alt="chat icon" />
                </div>
                <p>Communication  </p>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="/Edujar/assets/ring.svg" alt="ring icon" />
                </div>
                <p>Finance & Bank   </p>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="/Edujar/assets/Chart_pin.svg" alt="chart pin icon" />
                </div>
                <p>Marketing  </p>
            </div>
            <div className="card">
                <div className="icon">
                    <img src="/Edujar/assets/Camera.svg" alt="camera icon" />
                </div>
                <p>Photography  </p>
            </div>
            <img className='arrow' src="/Edujar/assets/arrow.svg" alt="arrow icon" />
        </div>
    </div>
    )
}
