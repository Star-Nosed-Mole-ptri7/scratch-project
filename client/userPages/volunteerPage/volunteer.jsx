import React from 'react';
import VolunteerList from './components/VolunteerList.jsx';

const Volunteer = () => {
  const VOLUNTEER = [
    {
      id: 'v1',
      name: 'The Kegkini Beach Cleanup (21+)',
      description:
        'Join us Sunday July 3rd at Historic Virginia Key Beach Park for a 21+ bikini themed keg n clean event where volunteers help clean the beach and can enjoy complimentary beer, raffles, food vendors, local businesses, DJs and live art with repurposed trash. Raffle prizes donated by Miami LS, Go Green and Holistic Healing include: a Jet Ski rental, a Corvette rental, a 1 hr massage and a sustainable goodies basket.',
      imageUrl:
        'https://hvkbmp.org/wp-content/uploads/2020/02/Historic-Virginia-Key-Beach-Park-Ariel-1-1080x573-1.jpg',
      dateTime: 'Sunday, July 03, 2022 - 12:00 PM',
      address: 'Historic Virginia Key Beach Park, 4020 Virginia Beach Dr, Miami, FL 33149',
      location: {
        lat: 25.7349443,
        lng: -80.1566608
      },
      organizer: 'KeepFloridaClean',
      register: 'https://www.volunteercleanup.org/22918/the_kegkini_beach_cleanup_21_3kvsqmf0og4qgchtumqxmg'
    },
    {
      id: 'v2',
      name: 'Monthly Island CleanUp',
      description:
        'Join us July 5th at 10:30am for our monthly island clean up. Meeting point at Pelican Harbor Marina 10:30am. Transportation to and from the island will be provided as well as cleaning supplies. (Gloves, trash bags) Please bring closed toe shoes, reef friendly sun protection and a reusable water bottle for free refills! If you are a free driver or PADI certified we encourage you to join us too! Lots of trash to collect both on land and in the water. ',
      imageUrl:
        'https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/Pelican_Harbor_Marina_1440x9000-71b0c28a5056a36_71b0c405-5056-a36a-0b7cebff165e5910.jpg',
      dateTime: 'Tuesday, July 5, 2022 | 10:30 AM - 1:00 PM',
      address: 'Pelican Harbor Marina, 1275 NE 79th St, Miami, FL 33138',
      location: {
        lat: 25.8470815,
        lng: -80.1692606
      },
      organizer: 'Watersports Association',
      register: 'https://www.volunteercleanup.org/watersportsassociation/monthly_island_cleanup_watersports_association'
    }
  ];

  return <VolunteerList items={VOLUNTEER} />;
};

export default Volunteer;