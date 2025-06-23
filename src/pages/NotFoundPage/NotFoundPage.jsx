import { Link } from 'react-router';

import "../../index.css"
import notFoundStyles from './NotFoundPage.module.css';

function NotFoundPage() {
  return (
    <div className={`container ${notFoundStyles.notFoundContainer}`}>
      <p>Page not found.</p>
      <Link to={'/'}>Go back home</Link>
    </div>
  );
}

export default NotFoundPage;
