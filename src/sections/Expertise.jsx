import "../styles/Expertise.css";
import {
  FaSearch,
  FaMousePointer,
  FaShareAlt,
  FaEnvelope,
  FaCode,
  FaShoppingCart,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaPencilRuler,
  FaTools,
  FaUserPlus,
  FaGoogle,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const iconMap = {
  "SEO Optimization": <FaSearch />,
  "Pay Per Click": <FaMousePointer />,
  "Social Media Marketing": <FaShareAlt />,
  "Email Marketing": <FaEnvelope />,
  "Web Development": <FaCode />,
  "E-commerce Solutions": <FaShoppingCart />,
  "IT Consulting": <FaLaptopCode />,
  "Digital Strategy": <FaChartLine />,
  "Brand Identity": <FaPalette />,
  "UI/UX Design": <FaPencilRuler />,
  "Website Maintenance": <FaTools />,
  "Lead Generation": <FaUserPlus />,
  "Google Ads": <FaGoogle />,
  "Facebook Ads": <FaFacebookF />,
  "Instagram Marketing": <FaInstagram />,
};

const expertiseData = [
  { title: "SEO Optimization", value: 90 },
  { title: "Pay Per Click", value: 85 },
  { title: "Social Media Marketing", value: 97 },
  { title: "Email Marketing", value: 88 },
  { title: "Web Development", value: 90 },
  { title: "E-commerce Solutions", value: 87 },
  { title: "IT Consulting", value: 76 },
  { title: "Digital Strategy", value: 84 },
  { title: "Brand Identity", value: 91 },
  { title: "UI/UX Design", value: 98 },
  { title: "Website Maintenance", value: 87 },
  { title: "Lead Generation", value: 76 },
  { title: "Google Ads", value: 84 },
  { title: "Facebook Ads", value: 91 },
  { title: "Instagram Marketing", value: 98 },
];

export default function ExpertiseSection() {
  return (
    <section className="expertise-wrapper">
      <div className="expertise-container">
        <p className="expertise-label">Our Expertise</p>
        <h2 className="expertise-title">What We Excel At</h2>
        <p className="expertise-desc">
          Specialized skills and deep industry knowledge to deliver exceptional results
        </p>

        <div className="expertise-grid">
          {expertiseData.map((item, index) => (
            <div className="expertise-card" key={index}>
              {/* ICON + TITLE */}
              <div className="card-header">
                <div className="iconn-box">
                  {iconMap[item.title] || <FaCode />}
                </div>
                <h4>{item.title}</h4>
              </div>

              {/* PROGRESS */}
              <div className="progress-row">
                <span>Proficiency</span>
                <span className="percent">{item.value}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${item.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





























// import "../styles/Expertise.css";

// const expertiseData = [
//   { title: "SEO Optimization", value: 90 },
//   { title: "Pay Per Click", value: 85 },
//   { title: "Social Media Marketing", value: 97 },
//   { title: "Email Marketing", value: 88 },
//   { title: "Web Development", value: 90 },
//   { title: "E-commerce Solutions", value: 87 },
//   { title: "IT Consulting", value: 76 },
//   { title: "Digital Strategy", value: 84 },
//   { title: "Brand Identity", value: 91 },
//   { title: "UI/UX Design", value: 98 },
//     { title: "Website Maintenance", value: 87 },
//   { title: "Lead Generation", value: 76 },
//   { title: "Google Ads", value: 84 },
//   { title: "Facebook Ads", value: 91 },
//   { title: "Instagram Marketing", value: 98 },
// ];

// export default function ExpertiseSection() {
//   return (
//     <section className="expertise-wrapper">
//       <div className="expertise-container">

//         <p className="expertise-label">Our Expertise</p>

//         <h2 className="expertise-title">What We Excel At</h2>

//         <p className="expertise-desc">
//           Specialized skills and deep industry knowledge to deliver exceptional results
//         </p>

//         <div className="expertise-grid">
//           {expertiseData.map((item, index) => (
//             <div className="expertise-card" key={index}>

//               {/* ICON + TITLE IN SAME ROW */}
//               <div className="card-header">
//                 <div className="icon-box">★</div>
//                 <h4>{item.title}</h4>
//               </div>

//               <div className="progress-row">
//                 <span>Proficiency</span>
//                 <span className="percent">{item.value}%</span>
//               </div>

//               <div className="progress-bar">
//                 <div
//                   className="progress-fill"
//                   style={{ width: `${item.value}%` }}
//                 />
//               </div>

//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }
