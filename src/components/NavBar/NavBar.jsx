import './NavBar.css'
export default function NavBar() {
    function showMenu() {
        var nanMenu = document.querySelector(".navMenu")
        nanMenu.classList.toggle("active");
    }
    return (
    <>
        <nav>
            <img src="/Edujar/assets/logo.svg" alt="Edujar logo " />
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>About us</li>
                <li>Works</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <button className='signup'>Signup</button>
            <button className='menu' onClick={showMenu}><i className='fa-solid fa-bars'></i></button>
        </nav>
        <div className="navMenu active">
            <ul>
                <li>Home</li>
                <li>Courses</li>
                <li>About us</li>
                <li>Works</li>
                <li>Blog</li>
                <li>Contact</li>
            </ul>
            <button>Signup</button>
        </div>
    </>
    )
}
