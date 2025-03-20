import styles from './button.module.css';
import { ReactNode } from 'react';

type Props = { text: string; optionText: string };

const Button = ({ text, optionText }: Props): ReactNode => {
  return (
    <button className={styles.button}>
      {text} <span>{optionText ? `(${optionText})` : ''}</span>
    </button>
  );
};

export default Button;
