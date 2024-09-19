import React from 'react';

const Overlay = ({ setIsOpen, isOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ${
        isOpen ? 'block' : 'hidden'
      } `}>
      <div className="flex flex-col gap-10 bg-white rounded-lg p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">Взлом КАЗИНО</h1>
          <div
            className="bg-red-500 w-10 h-10 flex justify-center items-center rounded-full hover:bg-red-700 transition duration-300 cursor-pointer"
            onClick={() => setIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
        </div>
        <p className="text-center">
          Казино взломано на 14%.
          <br /> Выкачано <span className="font-bold">12 050</span> руб. из{' '}
          <span className="font-bold">70 055 020</span> руб. <br />
          Продолжить?
        </p>
        <div className="flex justify-center items-center gap-20">
          <button
            className="bg-green-500 text-white font-bold py-3 px-7 rounded hover:bg-green-700 transition duration-300"
            onClick={() => setIsOpen(false)}>
            Да
          </button>
          <button
            className="bg-red-500 text-white font-bold py-3 px-7 rounded hover:bg-red-700 transition duration-300"
            onClick={() => setIsOpen(false)}>
            Нет
          </button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
