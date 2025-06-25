import buttonStyles from './Button.module.css';

function Button({ title, handler }) {
  return (
    <button className={buttonStyles.spacing} onClick={handler} type="button">
      {title}
    </button>
  );
}

export default Button;
