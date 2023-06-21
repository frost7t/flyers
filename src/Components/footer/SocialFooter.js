import React from 'react'

export default function SocialFooter() {
  return (
    // window.open c'est une fonction fournie par le navigateur qui permet d'ouvrir une nouvelle fenêtre ou un nouvel onglet.
    // _blank le parametre de la cible de la fonction window.open
    <div className="lg:flex gap-3 pt-3">
      
      {/* instagram */}
      <svg
        onClick={() =>
          window.open("https://www.instagram.com/fly_hyer/", "_blank")
        }
        style={{ cursor: "pointer" }}
        fill="currentColor"
        viewBox="0 0 256 256"
        width={40}
        height={40}
      >
        <rect width="256" height="256" fill="#fff" rx="128" ry="128" />
        <circle
          cx="128"
          cy="128"
          r="40"
          fill="none"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4px"
        />
        <rect
          x="36"
          y="36"
          width="184"
          height="184"
          rx="48"
          strokeWidth="4px"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="180" cy="76" r="4" fill="#fff"></circle>
      </svg>

      {/* facebook */}

      <svg
        onClick={() =>
          window.open("https://www.facebook.com/HyerAviation", "_blank")
        }
        style={{ cursor: "pointer" }}
        fill="currentColor"
        viewBox="0 0 256 256"
        width={40}
        height={40}
      >
        <rect width="256" height="256" fill="#fff" rx="128" ry="128" />
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <path
          d="M168,88.00094H152a24,24,0,0,0-24,24v112"
          fill="none"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
        <line
          x1="96"
          y1="144.00094"
          x2="160"
          y2="144.00094"
          fill="none"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={4}
        />
      </svg>

      {/* linkedin */}
      <svg
        onClick={() =>
          window.open(
            "https://www.linkedin.com/authwall?trk=qf&original_referer=https://www.flyhyer.com/&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fflyhyer%2F",
            "_blank"
          )
        }
        style={{ cursor: "pointer" }}
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        width={40}
        height={40}
      >
        <rect width="256" height="256" fill="#fff" rx="128" />
        <circle
          cx="128"
          cy="128"
          r="104"
          fill="none"
          stroke="#000D10"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8px"
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
        <circle cx="88" cy="79.99998" r="8" fill="#000D10" />
      </svg>
    </div>
  );
}
