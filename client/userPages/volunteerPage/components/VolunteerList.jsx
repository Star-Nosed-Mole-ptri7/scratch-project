import React from 'react';

import Card from './Card.jsx';
import VolunteerItem from './VolunteerItem.jsx';
import './VolunteerList.css';

const VolunteerList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="volunteer-list center">
        <Card>
        <h2> No Volunteering Opportunities At This Time </h2>
        <button>Share Volunteer Opportunity</button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="volunteer-list">
      {props.items.map((volunteerOpp) => {
        return (
          <VolunteerItem
            key={volunteerOpp.id}
            id={volunteerOpp.id}
            image={volunteerOpp.imageUrl}
            name={volunteerOpp.name}
            dateTime={volunteerOpp.dateTime}
            address={volunteerOpp.address}
            organizer={volunteerOpp.organizer}
            coordinates={volunteerOpp.location}
            description={volunteerOpp.description}
            register={volunteerOpp.register}
          />
        );
      })}
    </ul>
  );
};

export default VolunteerList;
