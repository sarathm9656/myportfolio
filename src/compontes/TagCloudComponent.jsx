// src/TagCloudComponent.js
import React, { useEffect, useRef } from 'react';
import TagCloud from 'TagCloud';
import './TagCloudComponent.css';

const TagCloudComponent = () => {
  const tagCloudRef = useRef(null);

  useEffect(() => {
    const container = tagCloudRef.current;
    const texts = [
      'React', 'TagCloud', 'JavaScript',
      'CSS3', 'Gitbub', 'c',
      'HTML', 'Tailwind', 'Bootstrap',
      'MongoDB', 'Node.js','Express','Mongoose','Figma'
    ];
    const options = {
      radius: 200,
      maxSpeed: 'fast',
      initSpeed: 'fast',
    };

    TagCloud(container, texts, options);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return <div className="tagcloud" ref={tagCloudRef}></div>;
};

export default TagCloudComponent;
