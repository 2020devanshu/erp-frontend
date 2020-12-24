import React, { useEffect, useState } from "react";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import FootSocials from "../../Components/FootSocials/FootSocials";
import SnapScroll from "../../Components/SnapScroll/SnapScroll";
import { ReactComponent as PointerTip } from "../../Assets/svg/pointer-tip.svg";
import { ReactComponent as PointerPhone } from "../../Assets/svg/pointer-phone.svg";
import { ReactComponent as PointerClouds } from "../../Assets/svg/pointer-clouds.svg";
import { AddIcCall, Business } from "@material-ui/icons";

const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 765;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  return <>{isMobile ? <MobileView /> : <DesktopView />}</>;
};

function MobileView() {
  return (
    <SnapScroll>
      <div className="contact__map section container-fluid">
        <div className="row" style={{ margin: "0" }}>
          <div className="col-md-6 col-sm-12 map-map">
            <div className="pointer-mobile">
              <PointerPhone className="pointer__phone" />
              <PointerTip className="pointer-mobile__tip" />
              {/* <div
                className="pointer__clouds"
                style={{ backgroundImage: `url(${PointerClouds})` }}
              ></div> */}
              <PointerClouds className="pointer__clouds" />
            </div>
            <br />
            <div className="contact__details">
              <h3>Contact Details</h3>
              <div className="row">
                <div className="col-md-7">
                  <p>
                    Man request adapted spirits set pressed. Up to denoting
                    subjects sensible feelings it indulged directly. Man request
                    adapted spirits set pressed. Up to denoting subjects
                    sensible feelings it indulged directly.
                  </p>
                </div>
                <div className="col-md-5">
                  <p>
                    <AddIcCall /> &nbsp; +91-9876543210
                  </p>
                  <div>
                    <div>
                      <Business />
                    </div>
                    <div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Accusamus, quo perferendis id atque dolore ea,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact__map section container">
        <div className="row">
          <div
            className="col-md-6 col-sm-12 map"
            // style={{ backgroundImage: `url(${MapImage})` }}
          >
            <iframe
              className="iframe-map"
              title="contact_map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.0291291131!2d76.69348873658218!3d30.73506264436678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1608303349273!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: "0", height: "20rem" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="contact__form__info col-md-5 col-sm-12">
            <div>
              <br />
              <br />

              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                cupiditate, eveniet mollitia quas perspiciatis quis veritatis
                voluptatum nobis minus quos sint accusantium vitae facilis
                totam, voluptate illo perferendis magni deserunt!
              </h5>
            </div>
          </div>
          <div>
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
      <div className="contact__map section container">
        <div className="contact__form__form col-md-6 col-sm-12">
          <div>
            <h2>CONTACT US</h2>
          </div>
          <form
            method="post"
            data-form-title="CONTACT US"
            style={{ padding: "15px" }}
          >
            <input type="hidden" data-form-email="true" />
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                name="name"
                required=""
                placeholder="Name*"
                data-form-field="Name"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                name="email"
                required=""
                placeholder="Email*"
                data-form-field="Email"
              />
            </div>
            <br />
            <div class="form-group">
              <input
                type="tel"
                class="form-control"
                name="phone"
                placeholder="Phone"
                data-form-field="Phone"
              />
            </div>
            <br />
            <div class="form-group">
              <textarea
                class="form-control"
                name="message"
                placeholder="Message"
                rows="7"
                data-form-field="Message"
              ></textarea>
            </div>
            <br />
            <div>
              <button type="submit" class="btn btn-lg btn-danger">
                CONTACT US
              </button>
            </div>
          </form>
          <div>
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
      </div>
    </SnapScroll>
  );
}

function DesktopView() {
  return (
    <SnapScroll>
      <div className="contact__map section container-fluid">
        <div className="row" style={{ margin: "0" }}>
          <div className="col-md-6 map-map">
            <br />
            <br />
            <div className="pointer">
              <PointerPhone className="pointer__phone" />
              <PointerTip className="pointer__tip" />
              {/* <div
                className="pointer__clouds"
                style={{ backgroundImage: `url(${PointerClouds})` }}
              ></div> */}
              <PointerClouds className="pointer__clouds" />
            </div>
            <br />
            <div className="contact__details">
              <h3>Contact Details</h3>
              <br />
              <div className="row">
                <div className="col-md-7">
                  <p>
                    Man request adapted spirits set pressed. Up to denoting
                    subjects sensible feelings it indulged directly. Man request
                    adapted spirits set pressed. Up to denoting subjects
                    sensible feelings it indulged directly.
                  </p>
                </div>
                <div className="col-md-5">
                  <p>
                    <AddIcCall /> &nbsp; +91-9876543210
                  </p>
                  <div>
                    <div>
                      <Business />
                    </div>
                    <div>
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Accusamus, quo perferendis id atque dolore ea,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 map-map map"
            // style={{ backgroundImage: `url(${MapImage})` }}
          >
            <iframe
              title="contact_map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109741.0291291131!2d76.69348873658218!3d30.73506264436678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1608303349273!5m2!1sen!2sin"
              width="100%"
              height="100%"
              frameborder="0"
              style={{ border: "0" }}
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="contact__form section container">
        <div className="row contact__form__row">
          <div className="contact__form__info col-md-5">
            <div>
              <br />
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                cupiditate, eveniet mollitia quas perspiciatis quis veritatis
                voluptatum nobis minus quos sint accusantium vitae facilis
                totam, voluptate illo perferendis magni deserunt!
              </h5>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="contact__form__form col-md-6">
            <div>
              <br />
              <h2>CONTACT US</h2>
            </div>
            <br />
            <br />
            <form method="post" data-form-title="CONTACT US">
              <input type="hidden" data-form-email="true" />
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  name="name"
                  required=""
                  placeholder="Name*"
                  data-form-field="Name"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="email"
                  class="form-control"
                  name="email"
                  required=""
                  placeholder="Email*"
                  data-form-field="Email"
                />
              </div>
              <br />
              <div class="form-group">
                <input
                  type="tel"
                  class="form-control"
                  name="phone"
                  placeholder="Phone"
                  data-form-field="Phone"
                />
              </div>
              <br />
              <div class="form-group">
                <textarea
                  class="form-control"
                  name="message"
                  placeholder="Message"
                  rows="7"
                  data-form-field="Message"
                ></textarea>
              </div>
              <br />
              <div>
                <button type="submit" class="btn btn-lg btn-danger">
                  CONTACT US
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* <div className="section">
        <Footer />
        <FootSocials />
      </div> */}
    </SnapScroll>
  );
}

export default Contact;
