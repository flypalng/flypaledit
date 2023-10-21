import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

export default function PrimaryButton({
  isLoading,
  text,
  type,
}: {
  isLoading: boolean;
  text: string;
  type: 'button' | 'submit' | 'reset' | undefined;
}) {
  return (
    <div className="form-group">
      <button className="btn btn-lg btn-primary btn-block" type={type}>
        {isLoading ? (
          <RotatingLines width="20" strokeColor="#FFF" strokeWidth="3" />
        ) : (
          text
        )}
      </button>
    </div>
  );
}
