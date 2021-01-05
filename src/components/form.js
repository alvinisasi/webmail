function Form(){
    return(
        <div>
            <h2>Submit your message</h2>
            <form>
                <input type="email" placeholder="Email" className="input" />
                <input type="text" placeholder="Subject" className="input" />
                <textarea placeholder="Message" className="input" />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form