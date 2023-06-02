import ArrowUpIcon from '../../../assets/icons/arrow-up-icon';
import { forwardRef } from 'react';
import styles from './styles.module.css';

interface GoUpButtonProps extends React.InputHTMLAttributes<HTMLButtonElement> {
  ref: HTMLButtonElement | null;
}

const GoUpButton = forwardRef<HTMLButtonElement, GoUpButtonProps>((props, ref) => {

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <button 
      className={styles.goUpButton}
      onClick={scrollTop}
      ref={ref}
    >
      <ArrowUpIcon />
    </button>
  );
});

export default GoUpButton;