import './Footer.css'
export default function Footer() {
    return (
    <div className='footer'>
        <div className="info">
            <img src="/public/assets/logo.svg" alt="edujar logo" />
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat...</p>
            <p className='copyRight'>© 2024 <span>edujar</span> - All Rights Reserved</p>
        </div>
        <div className="info">
            <h3>Quick links</h3>
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>About us</li>
                <li>Works</li>
                <li>Blog</li>
            </ul>
        </div>
        <div className="info">
        <h3>Legal</h3>
            <p>Terms of use Terms & conditions Privacy policy Cookie policy</p>
        </div>
        <div className="info">
            <h3>Quick links</h3>
            <input type="email" placeholder='Enter Email' />
            <button>Subscribe</button>
        </div>
    </div>
    )
}
