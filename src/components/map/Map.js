import { memo, useContext } from 'react';
import { countryCodes } from '../../data/countries';
import GroupsContext from '../../GroupsContext';
import WorldMap from './WorldMap';

const Map = () => {
  const { onCountrySelect } = useContext(GroupsContext);

  const onClick = (e) => {
    const target = e.target;

    if(target.id == 'ocean')
      return;

    const id = countryCodes.find(c => c === target.id)
      || countryCodes.find(c => c === target.parentElement.id);
    
    if(id)
      onCountrySelect(id);
  }

  return (
    <div>
      <WorldMap onClick={onClick} />
    </div>
  );
};

export default memo(Map);
