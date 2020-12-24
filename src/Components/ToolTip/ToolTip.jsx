import React, { useEffect, useState } from "react";
import "./ToolTip.scss";
// import "./ToolTip.css";

const ToolTip = (props) => {
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

  return (
    <>
      <div className="wrapper">
        <input type="checkbox" />
        <div className="btn"></div>
        <div
        className={`${isMobile ? "tooltip" : "tooltip"}`}
        >{props.children}</div>
        <svg>
          <use xlinkHref="#shape-01" className="shape shape-01" />
          <use xlinkHref="#shape-02" className="shape shape-02" />
          <use xlinkHref="#shape-03" className="shape shape-03" />
          <use xlinkHref="#shape-04" className="shape shape-04" />
          <use xlinkHref="#shape-05" className="shape shape-05" />
          <use xlinkHref="#shape-06" className="shape shape-06" />
          <use xlinkHref="#shape-07" className="shape shape-07" />
          <use xlinkHref="#shape-08" className="shape shape-08" />
          <use xlinkHref="#shape-09" className="shape shape-09" />
        </svg>
      </div>

      {/* <!-- SVG --> */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-01"
        >
          <path
            d="M18.29,5.76l-.7-1.37A2.59,2.59,0,0,0,15.29,3H10.71a2.59,2.59,0,0,0-2.3,1.39l-.7,1.37a2.6,2.6,0,0,1-2.3,1.39H3.58A2.57,2.57,0,0,0,1,9.71V20.44A2.57,2.57,0,0,0,3.58,23H22.42A2.57,2.57,0,0,0,25,20.44V9.71a2.57,2.57,0,0,0-2.58-2.56H20.59A2.6,2.6,0,0,1,18.29,5.76Z"
            transform="translate(0 -2)"
          />
          <ellipse cx="13" cy="12.99" rx="4.52" ry="4.49" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-02"
        >
          <line x1="25" y1="12.58" x2="25" y2="9.42" />
          <line x1="21" y1="14.16" x2="21" y2="7.84" />
          <line x1="17" y1="15.74" x2="17" y2="6.26" />
          <line x1="13" y1="21" x2="13" y2="1" />
          <line x1="9" y1="17.32" x2="9" y2="4.68" />
          <line x1="5" y1="13.63" x2="5" y2="8.37" />
          <line x1="1" y1="11.53" x2="1" y2="10.47" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 26 22"
          id="icon-03"
        >
          <polygon points="8.08 10 1 21 25 21 18.09 12.66 13.78 17.45 8.08 10" />
          <circle cx="8" cy="4" r="3" />
        </symbol>

        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-01"
        >
          <polygon
            stroke="var(--shape-color-03)"
            points="155.77 140.06 141.08 152.42 159.12 158.96 155.77 140.06"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-02"
        >
          <g stroke="var(--shape-color-02)">
            <line x1="158.66" y1="146.73" x2="141.54" y2="152.29" />
            <line x1="147.32" y1="140.95" x2="152.88" y2="158.07" />
          </g>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-03"
        >
          <circle
            stroke="var(--shape-color-01)"
            cx="150.1"
            cy="149.51"
            r="13"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-04"
        >
          <circle fill="var(--shape-color-01)" cx="150.1" cy="149.51" r="4" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-05"
        >
          <rect
            stroke="var(--shape-color-03)"
            x="141.1"
            y="140.51"
            width="18"
            height="18"
            transform="translate(40.44 -31.76) rotate(13.94)"
          />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-06"
        >
          <g stroke="var(--shape-color-02)">
            <line x1="158.48" y1="152.78" x2="141.72" y2="146.24" />
            <line x1="153.37" y1="141.13" x2="146.83" y2="157.89" />
          </g>
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-07"
        >
          <rect
            stroke="var(--shape-color-03)"
            x="138.1"
            y="137.51"
            width="24"
            height="24"
            transform="translate(-42.94 62.23) rotate(-20.56)"
          />
        </symbol>

        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-08"
        >
          <circle fill="var(--shape-color-01)" cx="150.1" cy="149.51" r="4" />
        </symbol>
        <symbol
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 300"
          id="shape-09"
        >
          <circle stroke="var(--shape-color-01)" cx="150.1" cy="149.51" r="8" />
        </symbol>
      </svg>
    </>
  );
};

export default ToolTip;
