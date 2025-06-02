function ProfileIntro() {
  return (
    <>
      <div className="main-container">
        <div className="sub-box-1">
          <div className="box-1">
            <img src="Github-bild.jpg" alt="" id="profile-image" />
          </div>
        </div>
        <div className="box-text project box">
          <h1 className="primary-heading">Hej!</h1>
          <br />
          <div className="text">
            <h4>My name is Fatemeh.</h4>
            <br />
            <div className="job-title">
              <p>
                I am currently a front-end development student at Nackademin.
                With a background in architecture and a Master's degree in
                lighting design from KTH, as well as experience as a consultant
                in the lighting industry, I have decided to pursue my newfound
                passion for front-end development.
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProfileIntro;
