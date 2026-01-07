import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    title: "Cash Points",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#3B82F6" />
        <circle cx="20" cy="20" r="10" fill="#1E3A8A" />
        <text x="20" y="24" textAnchor="middle" fontSize="12" fill="#DBEAFE" fontWeight="bold">₹</text>
      </svg>
    ),
    paragraph: "",
  },

  {
    id: 2,
    title: "Spin & Win",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#3B82F6" />
        <path d="M20 4L23 14L34 16L25 22L27 32L20 26L13 32L15 22L6 16L17 14L20 4Z" fill="#DBEAFE" />
      </svg>
    ),
    paragraph: "",
  },

  {
    id: 3,
    title: "Rewards",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40">
        <circle cx="20" cy="20" r="18" fill="#3B82F6" />

        {/* Trophy */}
        <path
          d="M14 10H26V14C26 16.5 24 18.5 21.5 19V22H25V24H15V22H18.5V19C16 18.5 14 16.5 14 14V10Z"
          fill="#DBEAFE"
        />
        <path
          d="M12 10H14V14C14 16 12.5 17.5 11 17.8V14C11 12 12 10 12 10Z"
          fill="#DBEAFE"
        />
        <path
          d="M26 10H28C28 10 29 12 29 14V17.8C27.5 17.5 26 16 26 14V10Z"
          fill="#DBEAFE"
        />
      </svg>
    ),
    paragraph: "",
  },

  {
    id: 4,
    title: "Scratch Cards",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40">
        <rect x="5" y="5" width="30" height="30" rx="4" fill="#3B82F6" />
        <rect x="10" y="14" width="20" height="3" fill="#DBEAFE" />
        <rect x="10" y="22" width="15" height="3" fill="#DBEAFE" />
      </svg>
    ),
    paragraph: "",
  },

  {
    id: 5,
    title: "Gift Cards",
    icon: (
      <svg width="48" height="48" viewBox="0 0 40 40">
        <rect x="5" y="12" width="30" height="23" rx="4" fill="#3B82F6" />
        <circle cx="20" cy="10" r="6" fill="#1E3A8A" />
        <rect x="18" y="12" width="4" height="23" fill="#DBEAFE" />
      </svg>
    ),
    paragraph: "",
  },
];

export default featuresData;