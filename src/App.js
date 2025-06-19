import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import { MdOutlineMenu } from "react-icons/md";

const App = () => {

  const courseImages = [
    "/course-img2.jpg",
    "/course-img1.jpg",
    "/course-img.jpg"
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" font-sans text-dark">
      {/* Header */}
      <header className="bg-light border-bottom">
        <div className='container d-flex justify-content-between align-items-center py-3 px-4'>
        <div className="d-flex align-items-center gap-2">
          <img src="/logo.png" alt="Logo" className="me-2 logo-img" />
          <h1 className="h4 fw-bold mb-0 text-darkk">E-School</h1>
        </div>
        <nav className="d-none ml d-md-flex gap-3">
          <a href="#" className="text-decoration-none text-dark">Books</a>
          <a href="#" className="text-decoration-none text-dark">Courses</a>
          <a href="#" className="text-decoration-none text-dark">Others</a>
          <a href="#" className="text-decoration-none text-dark">Blog</a>
          <button className="btn btn-success">Sign In</button>
        </nav>

        <nav className='menu'>
          <div>
            <Button
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <MdOutlineMenu />
            </Button>
            <Menu
              className='menu-item'
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  'aria-labelledby': 'basic-button',
                },
              }}
            >
              <MenuItem onClick={handleClose}><a href="#" className="text-decoration-none text-dark">Books</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="#" className="text-decoration-none text-dark">Courses</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="#" className="text-decoration-none text-dark">Others</a></MenuItem>
              <MenuItem onClick={handleClose}><a href="#" className="text-decoration-none text-dark">Blog</a></MenuItem>
              <button className="btn btn-success">Sign In</button>
            </Menu>
          </div>
        </nav>
</div>
      </header>

      {/* Hero Section */}
      <div className='container'>
        <section className="row d-flex justify-content-center align-items-center bg-light py-5 px-5 hero-section">
          <div className="col-md-6 text-center text-md-start">
            <p className="text-success fw-medium">Are you ready to learn?</p>
            <h2 className="display-5 fw-bold font">
              Learn With fun <br /> on <span className="text-success">any schedule</span>
            </h2>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Varius blandit facilisis quam netus.
            </p>
            <button className="btn btn-success mt-3">Get Started</button>
          </div>
          <div className="col-md-6 text-center">
            <img src="/hero-img.png" alt="Learning" className="img-fluid hero-img" />
          </div>
        </section>

        {/* Features Section */}
        <section className="py-5 text-center mt-5 mb-5">
          <div className="row g-4">
            <div className="col-md-3">
              <img src="/topic-icon.png" alt="Topics" className="mb-2" style={{ height: "40px" }} />
              <h5 className="fw-bold">1500+ Topics</h5>
              <p className="small">Learn Anything</p>
            </div>
            <div className="col-md-3">
              <img src="/student-icon.png" alt="Students" className="mb-2" style={{ height: "40px" }} />
              <h5 className="fw-bold">1800+ Students</h5>
              <p className="small">Learn Anything</p>
            </div>
            <div className="col-md-3">
              <img src="/test-icon.png" alt="Tests" className="mb-2" style={{ height: "40px" }} />
              <h5 className="fw-bold">9K+ Test Token</h5>
              <p className="small">Learn Anything</p>
            </div>
            <div className="col-md-3">
              <img src="/user-icon.png" alt="Users" className="mb-2" style={{ height: "40px" }} />
              <h5 className="fw-bold">2000+ Students</h5>
              <p className="small">Learn Anything</p>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="container bg-light py-5 px-3 px-md-5 mt-5 mb-5">
          <h3 className="text-center fw-bold mb-4">Online Courses</h3>
          <div className="row gy-4">
            {courseImages.map((img, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 d-flex">
                <div className="card shadow-sm rounded-4 w-100">
                  <img
                    src={img}
                    className="card-img-top img-fluid rounded-4"
                    alt="Course"
                    style={{ height: '220px', objectFit: 'cover' }}
                  />
                  <div className="card-body d-flex flex-column justify-content-start  pb-4">
                    <div>
                      <h5 className="fw-bold mb-1">Modern Psychology</h5>
                      <p className="text-muted small mb-3">Designation</p>
                      <div className="d-flex justify-content-start mb-3">
                        <button className="btn btn-success px-4 py-2 rounded-pill">
                          Buy Course
                        </button>
                      </div>
                      <div className="d-flex justify-content-between text-muted small">
                        <span>Start 21 April 2025</span>
                        <span>80 seats</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonial */}
        <section className="text-center mb py-5 px-4 mt-5">
          <h3 className="fw-bold mb-5">Testimonial</h3>
          <div className="d-flex justify-content-center align-items-center flex-column flex-md-row text-start gap-4 mx-auto" style={{ maxWidth: "800px" }}>
            <img src="/user.jpg" alt="User" className="rounded-circle test-img" style={{ width: "100px", height: "100px" }} />
            <p className="text-secondary fs-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour,
              or randomised words which don't look even slightly believable.
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-light py-5 mt-5">
        <div className="container">
          <div className="row gy-4 align-items-start">
            <div className="col-12 col-md-4">
              <p className="mb-0 small">
                Millions of people of all ages and from around <br />
                the world are improving their lives with us
              </p>
            </div>
            <div className="col-6 col-md-3">
              <h6 className="fw-bold mb-3">Course</h6>
              <ul className="list-unstyled small">
                <li>Graphic Design</li>
                <li>Web Design</li>
                <li>Business</li>
                <li>Marketing</li>
                <li>Engineering</li>
              </ul>
            </div>
            <div className="col-6 col-md-3">
              <h6 className="fw-bold mb-3">Terms</h6>
              <ul className="list-unstyled small">
                <li>Graphic Design</li>
                <li>Web Design</li>
                <li>Business</li>
                <li>Marketing</li>
                <li>Engineering</li>
              </ul>
            </div>
            <div className="col-6 col-md-2">
              <h6 className="fw-bold mb-3">Useful Link</h6>
              <ul className="list-unstyled small">
                <li>Graphic Design</li>
                <li>Web Design</li>
                <li>Business</li>
                <li>Marketing</li>
                <li>Engineering</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-4">
            <small className="text-light">Copyright © 2020 Rokomari.com</small>
          </div>
        </div>
      </footer>


    </div>
  );
}

export default App;