import React from "react";
import "./work-card.css";
function WorkCard({
  item,
}: {
  item: {
    company: string;
    designation: string;
    dateJoining: string;
    dateEnd: string;
    companyLogo: string;
    work: string;
  };
}) {
  return (
    <div className="work-card">
      <img src={item.companyLogo} className="work-logo" />
      <div className="work-info">
        <strong className="company-name">{item.designation}</strong>
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label> - <label>{item.dateEnd}</label>
        </div>

        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
