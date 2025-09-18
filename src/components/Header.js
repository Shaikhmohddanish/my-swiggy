function Header(){
    return (
        <div className="p-2 m-2 border border-black flex bg-orange-500">
            <img className=" w-32 rounded"  alt="logo" src="swiggy_logo.png"/>
            <ul className="flex list-none">
                <li className="mx-2">Home</li>
                
                <li className="mx-2"><a href="/about-us">ABOUT</a></li>
                <li className="mx-2">Contact Us</li>
                <li className="mx-2">Restaurants</li>
            </ul>
        </div>
    );
}

export default Header;