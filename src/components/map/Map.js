import WorldMap from './WorldMap';
import { memo } from 'react';

/* groups
    {string} id - Id for country
    {string} groupcode - code of group
    {string} color - color
*/
/* onCountryClick
    (countryId: string) => void
*/

const Map = ({ groups, onCountryClick }) => {
    const onClick = (e) => {
			console.log(e.target.id, );
    };

    return (
        <div>
           <WorldMap onClick={onClick} />
        </div>
    )
};

export default memo(Map);
