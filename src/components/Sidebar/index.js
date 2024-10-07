import './index.css'

const Sidebar = () => (
  <>
    <div className="sidebar-bg">
      <div className="profile-img-div">
        <img
          src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1728112767/Jagadeesh_Image_j9mbse.jpg"
          alt="profile"
          className="profile-img"
        />
        <p className="name">Jagadeesh Kumar</p>
        <div className="social-media-icon-div">
          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719055511/001-instagram_uhzysd.png"
            alt="instagram"
            className="social-media-icon"
          />

          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719056120/002-youtube_tl43jz.png"
            alt="youtube"
            className="social-media-icon"
          />

          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719069709/003-twitter_beoqnc.png"
            alt="twitter"
            className="social-media-icon"
          />

          <img
            src="https://res.cloudinary.com/dakmxu3dl/image/upload/v1719069814/005-linkedin_bpusgd.png"
            alt="linkedin"
            className="social-media-icon"
          />
        </div>
      </div>
    </div>
  </>
)

export default Sidebar
