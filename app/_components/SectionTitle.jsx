import React from 'react'

const SectionTitle = ({title,subtitle,containerStyle}) => {
  return (
    <div className={`w-full  h-full ${containerStyle}`}>
      <h2 className="max-w-7xl pl-4 pb-3 mx-auto text-3xl text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-600 md:text-5xl font-bold text-gray-800 dark:text-neutral-200 font-sans">
        {title}
      </h2>
      <p className="max-w-7xl pl-4 mx-auto mt-5 text-lg leading-8 text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}

export default SectionTitle