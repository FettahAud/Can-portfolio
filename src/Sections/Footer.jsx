export default function Footer() {
  return (
    <footer id="footer">
      <div className="wrapper">
        <div className="content">
          <div>
            <img src="/Logo.svg" alt="logo" />
            <button>
              <svg width="17" height="12" viewBox="0 0 17 12" fill="none">
                <path
                  d="M0.976366 5.96696C0.976366 5.96696 9.38897 6.00173 16.9762 6.03309M16.9762 6.03309C11.4952 6.01044 10.5073 0.262714 10.5073 0.262714M16.9762 6.03309C11.4952 6.01044 10.4598 11.7498 10.4598 11.7498"
                  stroke="#C4FF00"
                />
              </svg>
              Start a project
            </button>
          </div>
          <div>
            <div className="item">
              <span>Email me</span>
              <h1>can@canyilmaz.co</h1>
            </div>
            <div className="social">
              <div className="icon">
                <img src="/dribbble.svg" alt="" />
              </div>
              <div className="icon">
                <img src="/instagram.svg" alt="" />
              </div>
              <div className="icon">
                <img src="/linkedin-in.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <p>
            2023 Ⓒ All rights reserved. <span>canyilmaz.co</span>
          </p>
          <p>
            I
            <span>
              <img src="/heart.svg" alt="" />
            </span>
            minimalism
          </p>
        </div>
      </div>
    </footer>
  );
}
