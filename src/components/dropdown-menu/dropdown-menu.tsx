import styles from './dropdown-menu.module.css';
import Button from '../button';
import { ReactNode, useState } from 'react';
import { REGION_ALL } from '@/consts';

const DropdownMenu = ({
  buttonText,
  content,
  onClick,
}: {
  buttonText: string;
  content: string[];
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}): ReactNode => {
  const [optionText, setOptionText] = useState('');

  const updateButtonText = (event: React.MouseEvent<HTMLDivElement>) => {
    const option = event.currentTarget;

    if (option instanceof HTMLDivElement && option.textContent) {
      const text = option.textContent === REGION_ALL ? '' : option.textContent;
      setOptionText(text);
    }
  };

  return (
    <div className={styles.dropdown}>
      <Button text={buttonText} optionText={optionText} />
      <div className={styles['dropdown-content']}>
        {content.map((value, index) => (
          <div
            onClick={(event) => {
              updateButtonText(event);
              onClick(event);
            }}
            key={index}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
