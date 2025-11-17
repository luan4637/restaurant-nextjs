export default function BestSeller() {
    return (
        <div className="section section-best-seller">
            <div className="container">
                <h4 className="section-headline headline">Best Seller</h4>
                <p className="intro">It is a long established fact that a reader will be 
                    distracted by the readable content of a page when 
                    looking at its layout.</p>
                <ul className="section-list list-dishes">
                    <li>
                        <figure><a href="#"><img src="images/menu1.png"
                            alt="Title menu 1" /></a></figure>
                        <h3><a href="#">Title menu 1</a></h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text</p>
                    </li>
                    <li>
                        <figure><a href="#"><img src="images/menu2.png"
                            alt="Title menu 2" /></a></figure>
                        <h3><a href="#">Title menu 2</a></h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text</p>
                    </li>
                    <li>
                        <figure><a href="#"><img src="images/menu3.png"
                            alt="Title menu 3" /></a></figure>
                        <h3><a href="#">Title menu 3</a></h3>
                        <p>Lorem Ipsum has been the industry's standard dummy text</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}