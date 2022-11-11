import React from 'react';
import PlaceList from '../components/PlacesList';


const PLACE = [
    {
        id:1, title:'The Burj khalifa',
        imageUrl:'https://images.adsttc.com/media/images/59eb/8a55/b22e/38dd/0500/0155/medium_jpg/Burj_Khalifa_SOM_exterior_(c)_Nick_Merrick_for_Hedrich_Blessing_(10).jpg?1508608588',
        description:'Burj Khalifa ',
        address:'Dubai',
        location:{lat:25.2143965, lng:55.2585541},
        creator:'u1'

} ,
{
    id:2, title:'Emperor Building ',
    imageUrl:'https://scontent.ffjr1-3.fna.fbcdn.net/v/t39.30808-6/299122561_579949450491112_3709527655218928431_n.jpg?stp=dst-jpg_s960x960&_nc_cat=109&ccb=1-7&_nc_sid=e3f864&_nc_ohc=qJME_GYb_bAAX8NSDNB&_nc_ht=scontent.ffjr1-3.fna&oh=00_AfBgtr2iQm_-3aCMJvT6eaYYxAACaV5n6AS6rWZQF6LM5w&oe=63723A68',
    description:'Emperor Building  ',
    address:'Korea',
    location:{lat:25.2143965, lng:55.2585541},
    creator:'u2'

} 
    ];

const UserPlaces = () =>
{
    return <PlaceList items={PLACE}></PlaceList>
}

export default UserPlaces;