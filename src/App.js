import "./App.css";
import logo from "./logo.svg";
import { Button, Layout } from "antd";
import { Cascader } from "antd";
import { Avatar } from "antd";
import { Image } from "antd";
import { Row, Col } from "antd";
import { Typography, Divider } from "antd";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
const { Title, Paragraph, Text, Link } = Typography;

function App() {
  return (
    <div className="App">
      <header className="header header-tab">
        <Title className="header-logo" level={2}>
          Logo
        </Title>
        <div className="header-right">
          <ul className="header-ul">
            <li >
              Home
              <div className="dropdown-content">
                <a href="#">WORLD NEWS</a>
                <a href="#">TRAVEL</a>
                <a href="#">TECHNOLOGY</a>
                <a href="#">CITY</a>
                <a href="#">CULTURE</a>
                <a href="#">MORE…</a>
              </div>
            </li>
            <li>Discovery</li>
            <li>Photo</li>
            <li>Contact</li>
            <span>
              <Avatar size="small" icon={<UserOutlined />} />
            </span>
          </ul>
        </div>
      </header>
      <header className=" header header-mobile">
        <div className="row" style={{ justifyContent: "space-between" }}>
          <div className="col-4">
            <div className="icon-menu" style={{ textAlign: "left" }}>
              <i class="fa fa-bars" aria-hidden="true"></i>
            </div>
          </div>
          <div className="col-4">
            {" "}
            <Title
              className="logo"
              level={5}
              style={{ display: "inline-block", float: "none" }}
            >
              Logo
            </Title>
          </div>
          <div className="col-4">
            <div className="avatar" style={{ textAlign: "right" }}>
              <Avatar size={30} icon={<UserOutlined />} />
            </div>
          </div>
        </div>
      </header>
      {/* Banner */}

      <div className="body-banner">
        <picture>
          <source
            className="img-banner"
            media="(min-width:576px) and (max-width:768px)"
            srcset="https://i.ibb.co/GR1bVgJ/bird.png"
          />
          <source
            className="img-banner"
            media="(max-width:576px)"
            srcset="https://i.ibb.co/YRqXH20/bird-small.png" alt="bird-small"
          />

          <img className="img-banner" src="https://i.ibb.co/YRYXTdV/bird-big.png" alt="bird-big" alt="bird" />
        </picture>
        <div className="banner-web">
          <div className="content-center">
            <Title className="title-banner" level={2}>
              AMAZING PLACES IN AMERICA TO VISIT
            </Title>
            <div className="title-sub">
              <div className="content-banner f-l">
                <i class="fa fa-globe" aria-hidden="true"></i>

                <span>TRAVELGUIDE</span>
              </div>
              <div className="content-banner f-r">
                <i class="fa fa-file-text-o" aria-hidden="true"></i>
                <span>WORLD NEWS</span>
              </div>
            </div>
          </div>

          <div className="avatar-banner">
            <Avatar
              size="small"
              icon={<UserOutlined />}
              src=".//img/avatar.png"
            />
            <span className="sp-1">by Steven Voorhees</span>
          </div>

          <div className="content-right">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <Title className="title-right" level={2}>
              NEXT STORY
              <span> </span>
            </Title>

            <Title className="title-right-1" level={2}>
              Morbi eleifend a libero
            </Title>
            <p>
              Quisque viverra interdum velit, et cursus magna sagittis in. In
              dui dui.
            </p>
          </div>
        </div>
        <div className="banner-mobile">
          <div className="content-center">
            <div className="container">
              <Title className="title-banner" level={2}>
                AMAZING PLACES IN AMERICA TO VISIT
              </Title>
              <div className="title-sub">
                <div className="content-banner f-l">
                  <i class="fa fa-globe" aria-hidden="true"></i>

                  <span>TRAVELGUIDE</span>
                </div>
                <div className="content-banner f-r">
                  <i class="fa fa-file-text-o" aria-hidden="true"></i>
                  <span>WORLD NEWS</span>
                </div>
              </div>

              <div className="avatar-banner">
                <Avatar
                  size="small"
                  icon={<UserOutlined />}
                  src=".//img/avatar.png"
                />
                <span className="sp-1">by Steven Voorhees</span>
              </div>

              <div className="content-right">
                <i class="fa fa-angle-right" aria-hidden="true"></i>
                <Title className="title-right" level={2}>
                  NEXT STORY
                  <span> </span>
                </Title>

                <Title className="title-right-1" level={2}>
                  Morbi eleifend a libero
                </Title>
                <p>
                  Quisque viverra interdum velit, et cursus magna sagittis in. In
                  dui dui.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Content */}
      <div className="content">
        <div className="container">
          <div class="row">
            <div class="col-lg-4 col-md-12">
              <div className="content-left">
                <Title className="title-left" level={2}>
                  Quisque viverra interdum velit?
                </Title>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sodales
                  primis, mollis viverra conubia ligula inceptos laoreet libero
                  tortor, nascetur non habitasse iaculis tempor nec egestas
                  fames augue, platea porta integer nostra curae sed arcu. Nec
                  ut diam vulputate ante scelerisque ridiculus lobortis orci mi
                  curae himenaeos quis, senectus curabitur ullamcorper a
                  porttitor nibh fermentum nisi cum morbi aliquam. Vitae pretium
                  vestibulum dui gravida in potenti interdum, class rhoncus
                  neque.
                </p>
                <p>
                  Ullamcorper porttitor non pharetra cursus nisl mollis
                  pellentesque primis penatibus platea, dictum himenaeos eget mi
                  bibendum ad molestie aliquet curae quis quisque, nunc duis ac
                  at elementum dui integer viverra tempus. Lacinia bibendum diam
                  senectus egestas nec molestie convallis aenean hac tempus,
                  vivamus purus congue euismod fringilla cursus donec est eu
                  blandit platea, feugiat vitae netus orci habitant accumsan
                  placerat morbi nostra. Quam fringilla sociis suspendisse quis
                  ultricies dis tellus cum, litora aliquet.
                </p>
                <div className="small-title">
                  <Title className="subtitle" level={2}>
                    Small Title - Subtitle
                  </Title>
                  <div className="time">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>
                      3h ago <ins>by Worldnews</ins>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8 col-md-12">
              <div className="posts">
                <div className="posts-right">
                  <Title className="user" level={2}>
                    <Avatar
                      className="a"
                      size="small"
                      icon={<UserOutlined />}
                    />
                    Jonathan Walker
                  </Title>
                  <p>
                    In hac habitasse platea dictumst. Sed nec venenatis odio.
                    Nulla faucibus ipsum sed faucibus accumsan. Donec rhoncus
                    luctus massa vitae lobortis. Duis consequat, nunc a pretium
                    imperdiet, neque est rhoncus massa, tristique rutrum nisl
                    risus at libero
                  </p>
                  <div className="time">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>2 min ago</span>
                  </div>
                </div>
                <div className="posts-right">
                  <Title className="user" level={2}>
                    <Avatar
                      className="a"
                      size="small"
                      icon={<UserOutlined />}
                    />
                    Brenda Mercer
                  </Title>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit
                    sodales primis, mollis viverra conubia ligula inceptos
                    laoreet libero tortor, nascetur non habitasse iaculis tempor
                    nec egestas fames augue, platea porta integer nostra curae
                    sed arcu. Nec ut diam vulputate ante scelerisque ridiculus
                    lobortis orci mi curae.
                  </p>
                  <div className="time">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                    <span>2 min ago</span>
                  </div>
                  <div className="video">
                    <iframe
                      width="100%"
                      height="315"
                      src="https://www.youtube.com/embed/a1xRIqFApvY"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer */}
      <div className="footer">
        <div className="container">
          <div class="row">
            <div class="col-lg-1 col-sm-6 m-b p-l">
              <Title className="title-logo" level={2}>
                Logo
              </Title>
            </div>
            <div class="col-lg-4 col-sm-6 ">
              <div className="footer-menu">
                <ul className="footer-ul">
                  <li>Home</li>
                  <li>Discovery</li>
                  <li>Photos</li>
                  <li>Contact</li>
                </ul>{" "}
                <ul className="footer-ul">
                  <li>About</li>
                  <li>Help</li>
                  <li>Teams</li>
                  <li>Guidlines</li>
                </ul>
                <ul className="footer-ul">
                  <li>Testimonials</li>
                  <li>Advertise</li>
                  <li>Integrations</li>
                  <li>Careers</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 p-l m-t ">
              <div className="footer-email">
                <form className="footer-form">
                  <input
                    type="text"
                    placeholder="Email"
                    id="fname"
                    name="name"
                  ></input>
                  <button className="form-btn">
                    <i class="fa fa-paper-plane-o" aria-hidden="true"></i>
                  </button>
                </form>
                <p>Stay in touch with us for the freshest products!</p>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 m-t">
              {" "}
              <div className="footer-icon">
                <i class="fa fa-facebook" aria-hidden="true"></i>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <i class="fa fa-instagram" aria-hidden="true"></i>
                <i class="fa fa-globe" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* page 3 */}
    </div>
  );
}

export default App;
