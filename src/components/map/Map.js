import { memo, useContext } from 'react';
import { countryCodes } from '../../data/countries';
import GroupsContext from '../../GroupsContext';
import WorldMap from './WorldMap';

const Map = () => {
  const { currentGroup, onCountrySelect } = useContext(GroupsContext);

  const onClick = (e) => {
    if (!currentGroup)
      return;

    const target = e.target;

    if (target.id === 'ocean')
      return;

    const id = countryCodes.find(c => c === target.id)
      || countryCodes.find(c => c === target.parentElement.id)
      || countryCodes.find(c => c === target.parentElement?.parentElement?.id);

    console.log(target.id, target.parentElement.id, id);

    if (id)
      onCountrySelect(id);
  }

  return (
    <div>
      <WorldMap onClick={onClick} />
    </div>
  );
};

export default memo(Map);
