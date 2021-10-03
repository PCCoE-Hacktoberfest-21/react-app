import React, { useState } from "react";

const Footer = () => {
    return (
        <div>
            <footer class="footer-distributed">

                

                <div class="footer-left">

                    <p class="footer-links">
                        <img className="footer-img" src="./hacktoberfest-2021.png" />
                    </p>

                    <p className="copyright" >HacktoberFest &copy; 2021</p>
                </div>
                <div class="footer-right ">

                    <a href="https://www.facebook.com/hashtag/hacktoberfest" target="_blank"><i class="fa fa-facebook"></i></a>
                    <a href="https://twitter.com/hacktoberfest?lang=en" target="_blank"><i class="fa fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/events/hacktoberfestkickoff6844640536146546688/" target="_blank"><i class="fa fa-linkedin"></i></a>
                    <a href="https://github.com/PCCoE-Hacktoberfest-21" target="_blank"><i class="fa fa-github"></i></a>

                </div>

            </footer>
        </div>
    );
}
export default Footer;