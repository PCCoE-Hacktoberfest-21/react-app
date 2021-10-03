import React from "react";

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                
                <div className="footer-left">

                    <p className="footer-links">
                        <img className="footer-img" alt="hacktoberfest-logo" src="./Hacktoberfest-2021.png" />
                    </p>

                    <p className="copyright" >HacktoberFest &copy; 2021</p>
                </div>
                <div className="footer-right ">

                    <a href="https://www.facebook.com/hashtag/hacktoberfest" rel="noreferrer" target="_blank"><i className="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/hacktoberfest?lang=en" rel="noreferrer" target="_blank"><i className="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/events/hacktoberfestkickoff6844640536146546688/" rel="noreferrer" target="_blank"><i className="fa fa-linkedin"></i></a>
                    <a href="https://github.com/PCCoE-Hacktoberfest-21" rel="noreferrer" target="_blank"><i className="fa fa-github"></i></a>

                </div>

            </footer>
        </div>
    );
}
export default Footer;