export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="container">
                    <div className="header-inner">
                        <div className="header-logo">
                            <a href="#"><img src="images/logo.png" alt="Restaurant" /></a>
                        </div>
                        <ul className="header-nav">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Product</a></li>
                            <li><a href="#">Promo</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <div className="header-search">
                            <label htmlFor="header-search" className="btn-icon icon-search"><i className="fa fa-search" aria-hidden="true"></i></label>
                            <input id="header-search" type="checkbox" />
                            <form>
                                <input type="text" name="q" />
                                <button type="button"><i className="fa fa-search" aria-hidden="true"></i></button>
                            </form>
                        </div>
                        <div className="header-nav-mobile">
                            <label htmlFor="nav-mobile" className="nav-icon"><i className="fa fa-navicon"></i></label>
                            <input id="nav-mobile" type="checkbox" />
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Product</a></li>
                                <li><a href="#">Promo</a></li>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main">
                {children}
            </div>
            <div className="section-footer">
                <div className="container">
                    <div className="footer-cols">
                        <div className="footer-col double-col">
                            <figure><a href="#"><img src="images/logo.png" alt="Restaurant" /></a></figure>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                Vivamus lacinia odio vitae vestibulum vestibulum.<br />
                                <a href="http://www.freepik.com">Designed by Freepik</a>
                            </p>
                            <ul className="socials">
                                <li><a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>About</h5>
                            <ul>
                                <li><a href="#">About link 1</a></li>
                                <li><a href="#">About link 2</a></li>
                                <li><a href="#">About link 3</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>Services</h5>
                            <ul>
                                <li><a href="#">Services link 1</a></li>
                                <li><a href="#">Services link 2</a></li>
                                <li><a href="#">Services link 3</a></li>
                                <li><a href="#">Services link 4</a></li>
                                <li><a href="#">Services link 5</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h5>Other</h5>
                            <ul>
                                <li><a href="#">Other link 1</a></li>
                                <li><a href="#">Other link 2</a></li>
                                <li><a href="#">Other link 3</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}