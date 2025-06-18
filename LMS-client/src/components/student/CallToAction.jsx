import React from 'react';

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 mb-10">
      <h1 className="mb-4 text-4xl font-bold text-center">
        Learn anything, anytime, anywhere
      </h1>
      <p className="mb-8 text-lg text-center text-gray-600">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea.
      </p>
      <div className="flex space-x-4">
        <button className="px-4 py-2 font-semibold text-white transition duration-200 bg-blue-500 rounded shadow hover:bg-blue-600">
          Get started
        </button>
        <button className="px-4 py-2 font-semibold text-blue-500 transition duration-200 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
          Learn more →
        </button>
      </div>
    </div>
  );
};

export default CallToAction;