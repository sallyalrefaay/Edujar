import './Questions.css'
export default function Questions() {
    return (
    <div className='questions'>
        <div className="leftSection">
            <h3>Frequently Asked Questions</h3>
            <h1>Any Questions? Find here.</h1>
            <button>Send Message</button>
            <div><img src="/Edujar/assets/woman.png" alt="woman image" /></div>
        </div>
        <div className="rightSection">
            <h3>Can Conversix sync my data to my CRM?</h3>
            <p>Every data request starts with a target foundation, you will be asked to complete a search request and provide information such as lookalike companies, industries, companies size, revenue, job titles etc.</p>
            <div className="line"></div>
            <div className="add">
                <h3>How much data will I receive?</h3>
                <img src="/Edujar/assets/add.svg" alt="add icon" />
            </div>
            <div className="line"></div>
            <div className="add">
                <h3>Can marketers use Conversix data on behalf of client?</h3>
                <img src="/Edujar/assets/add.svg" alt="add icon" />
            </div>
            <div className="line"></div>
            <div className="add">
                <h3>How accurate is my data?</h3>
                <img src="/Edujar/assets/add.svg" alt="add icon" />
            </div>
            <div className="line"></div>
        </div>
    </div>
    )
}
