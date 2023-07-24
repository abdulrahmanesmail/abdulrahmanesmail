import Slider from "react-slick";
import "./landingpages.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Landingpages = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    return (
          <div className="landingpages">
            <h1>Here's some dummy landing's pages</h1>
            <p>I made those Page's While leaning in 2018 </p>
            <Slider {...settings}>
              <div>
                 <img src={require('./img/1.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/2.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/3.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/4.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/5.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/6.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/7.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/8.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/9.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/10.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/11.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/12.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/13.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/14.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/15.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/16.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/17.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/18.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/19.jpg')} alt="Landing-page" />
              </div>
              <div>
                 <img src={require('./img/20.jpg')} alt="Landing-page" />
              </div>
            </Slider>
        </div>    
    );
}