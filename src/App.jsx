import React, { useState } from "react";
import "./App.css";

const TagInput = () => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && tag.trim() !== "") {
      e.preventDefault();
      setTags([...tags, tag.trim()]);
      setTag("");
    }
  };
  const removeTag = (indexToRemove) => {
    const updatedTags = tags.filter((_, index) => index !== indexToRemove);
    setTags(updatedTags);
  };





  return (
    <div className="tag-container">
      <input
        type="text"
        placeholder="Enter tag and press Enter"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        onKeyDown={handleKeyDown}
        className="tag-input"
      />

      <div className="tag-list">
        {tags.map((t, index) => (
          <span key={index} className="tag-item">
            {t}
            <button className="tag-close" onClick={() => removeTag(index)}>
              ×
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
