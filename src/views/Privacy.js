import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | Chris Bailey Piano";
  }, []);

  return (
    <div id="mainContent">
      <h1>Privacy Policy</h1>
      <p>This website does not collect information such as names, email addresses, or phone numbers.</p>
      <p>If you have any questions or concerns, please feel free to <Link to="/contact">contact me</Link>.</p>
      <br />
    </div>
  );
}

export default PrivacyPolicy;
