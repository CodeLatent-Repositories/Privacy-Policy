import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-custom'>
      <p className='pb-2'>© 2024 codelatent.com</p>
      <div>
      <a class="footerLogo" href='https://www.instagram.com/codelatent?igsh=d24zcHo0ODB1MG1l' target='_blank'>
        <img src="insta.png" alt="Instagram"/>
      </a>

      <a href='mailto:aashuchoudhary52@gmail.com' target='_blank'>
        <img src="gmail.png" alt="Gmail"/>
      </a>

      <a href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Aorganization%3A105728565&keywords=code%20latent&origin=RICH_QUERY_SUGGESTION&position=0&searchId=d52ff825-cb2d-48c3-b255-3a2736b03787&sid=N~9&spellCorrectionEnabled=false' target='_blank'>
        <img src="linkedin.png" alt="Linkedin"/>
      </a>

      <a href='' target='_blank'>
        <img src="twitter.png" alt="Twitter"/>
      </a>
      </div>
      <p className='mt-4 mb-1 text-sm'><a href='#'>Privacy Policy</a></p>
      <p className='max-w-xl text-[0.7rem]'>Your privacy is our priority. We are committed to protecting your personal data and ensuring that your experience with us is safe and secure. Read our detailed privacy policy to understand how we manage your information.</p>
      </footer>
  );
};

export default Footer;