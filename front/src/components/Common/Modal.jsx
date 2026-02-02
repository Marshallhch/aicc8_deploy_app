import React from 'react';

const Modal = () => {
  return (
    <div className="modal fixed bg-black bg-opacity-50 w-full h-full left-0 top-0 z-50 flex justify-center items-center">
      <div className="form-wrapper bg-gray-700 rounded-md w-1/2 h-1/2 flex flex-col items-center relative p-4">
        <h2 className="text-2xl py-2 border-b border-gray-300 w-fit font-semibold">
          코딩하기
        </h2>
      </div>
    </div>
  );
};

export default Modal;
