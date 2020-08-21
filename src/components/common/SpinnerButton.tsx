import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Button, { ButtonProps } from 'react-bootstrap/Button';

interface Props extends ButtonProps {
  loading: boolean;
}

const SpinnerButton: React.FC<Props> = ({ loading, children, ...otherProps }) => {
  return (
    <Button {...otherProps}>
      {loading && (
        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
      )}{' '}
      {children}
    </Button>
  );
};

export default SpinnerButton;
