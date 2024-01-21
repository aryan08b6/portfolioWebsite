import React from "react";
import {useNavigate} from "react-router-dom"


export function ThumbCard({data={}}) {

  const navigate = useNavigate();

  const {title, img, tags, rId, content="", buttonText="Read More", links} = data

  return (
    <div className="w-[300px] rounded-md border m-2">
      <img
        src={img}
        alt="Will Be Updated Soon"
        className="h-[200px] w-[full] rounded-t-md object-scale-down"
      />
      <div className="p-4">
        <h1 className="inline-flex items-center text-lg font-semibold overflow-ellipsis h-10">
          {(() => {
            if (title.length > 22) {
              return title.substring(0, 20) + "..";
            } else {
              return title;
            }
          })()}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </h1>
        <p className="mt-3 text-sm text-gray-600">
        {(() => {
            if (content.length > 22) {
              return content.substring(0, 20) + "..";
            } else {
              return content;
            }
          })()}
        </p>
        <div className="h-8 overflow-auto">
          {tags.map((tag, index) => (
            <span
              key={index} // Important for React's reconciliation
              className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={() => navigate(`/portfolioWebsite/resource/${rId}`, { state: { resourceData: data } })}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default ThumbCard;
