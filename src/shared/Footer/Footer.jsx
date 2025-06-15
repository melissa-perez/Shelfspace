import footerStyles from './Footer.module.css';

function Footer() {
  const currentDate = new Date();
  return (
    <div className={`container ${footerStyles.footerContainer}`}>
      <span className={footerStyles.bold}>
        {' '}
        &#169;{currentDate.getFullYear()} Melissa Perez
      </span>
    </div>
  );
}

export default Footer;
