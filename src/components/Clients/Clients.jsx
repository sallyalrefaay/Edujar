import './Clients.css'
export default function Clients() {
    return (
    <div className='clients'>
        <div className="desc-2">
        <h1>What our client’s say</h1>
        <img className='cummon' src="/public/assets/cummon.svg" alt="cummon icon" />
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
        <h3>Adrian Smith</h3>
        <div className="ourClients">
            <div><img className='arrow-2' src="/public/assets/arrow-2.svg" alt="arrow icon" /></div>
            <div><img className='photo' src="/public/assets/client-1.png" alt="client image" /></div>
            <div><img className='photo' src="/public/assets/client-2.png" alt="client image" /></div>
            <div><img className='photo' src="/public/assets/client-3.png" alt="client image" /></div>
            <div><img className='photo' src="/public/assets/client-4.png" alt="client image" /></div>
            <div><img className='photo' src="/public/assets/client-5.png" alt="client image" /></div>
            <div><img className='arrow-2' src="/public/assets/arrow-2.svg" alt="arrow icon" /></div>
        </div>
        </div>
    </div>
    )
}
