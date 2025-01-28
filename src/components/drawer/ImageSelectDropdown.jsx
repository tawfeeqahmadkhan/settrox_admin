import { useState } from "react";

const ImageSelectDropdown = ({ allImages, variant, handleFieldChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(variant.image || "");

  const handleSelect = (img) => {
    setSelectedImage(img);
    handleFieldChange(variant._id, "image", img);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Selected Value */}
      <div
        className="border border-gray-300 p-2 rounded cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          {selectedImage && (
            <img src={selectedImage} alt="Selected" className="w-8 h-8" />
          )}
          <span className="text-xs">
            {selectedImage ? "Selected Image" : "Choose an image"}
          </span>
        </div>
        <span className="text-xs">{isOpen ? "▲" : "▼"}</span>
      </div>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute z-10 mt-2 border border-gray-300 bg-white rounded shadow w-40 max-h-60 overflow-y-auto">
          {allImages?.map((img, index) => (
            <li
              key={index}
              className="flex items-center gap-2 p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => handleSelect(img)}
            >
              <img src={img} alt={`Option ${index}`} className="w-8 h-8" />
              <span className="text-xs">Image {index + 1}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageSelectDropdown;
