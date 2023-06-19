import React from 'react'

export default function SocialFooter() {
  return (
    <div className="flex gap-3 pt-3">
      {/* instagram */}
      <svg
        fill="none"
        viewBox="0 0 256 256"
        width="32"
        height="32"
        className="text-current"
      >
        <circle cx="128" cy="128" r="144" fill="#FFFFFF" />
        <circle
          cx="128"
          cy="128"
          r="40"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8px"
        />
        <rect
          x="36"
          y="36"
          width="184"
          height="184"
          rx="48"
          strokeWidth="8px"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="180" cy="76" r="8" fill="#000" />
      </svg>
      {/* facebook */}
      <svg
        fill="none"
        viewBox="0 0 256 256"
        width="32"
        height="32"
        className="text-current"
      >
        <circle cx="128" cy="128" r="144" fill="#FFFFFF" />
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8px"
        />
        <path
          d="M168,88.00094H152a24,24,0,0,0-24,24v112"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8px"
        />
        <line
          x1="96"
          y1="144.00094"
          x2="160"
          y2="144.00094"
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8px"
        />
      </svg>
      {/* linkedin */}
      <svg
        fill="none"
        viewBox="0 0 256 256"
        width="32"
        height="32"
        className="text-current"
      >
        <circle cx="128" cy="128" r="144" fill="#FFFFFF" />
        <rect
          x="40"
          y="40"
          width="176"
          height="176"
          rx="8"
          strokeWidth="8px"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="120"
          y1="112.00094"
          x2="120"
          y2="176.00094"
          fill="none"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8px"
        />
        <line
          x1="88"
          y1="112.00094"
          x2="88"
          y2="176.00094"
          fill="none"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8px"
        />
        <path
          d="M120,140.00094a28,28,0,1,1,56,0v36"
          fill="none"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8px"
        />
        <circle cx="88" cy="79.99998" r="8" fill="#000D10"></circle>
      </svg>
    </div>
  );
}
