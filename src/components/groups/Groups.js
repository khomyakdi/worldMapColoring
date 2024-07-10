import './Groups.css';
import { useContext } from 'react';
import GroupsContext from '../../GroupsContext';
import NewGroup from "./NewGroup";
import { countries } from '../../data/countries';

const Groups = () => {
  const {
    groups,
    createGroup,
    deleteGroup,
    currentGroup,
    setCurrentGroup,
  } = useContext(GroupsContext);

  const onGroupCreate = group => {
    createGroup(group);
  }

  const onChange = e => {
    setCurrentGroup(e.target.value);
  }

  return (
    <div>
      <NewGroup onGroupCreate={onGroupCreate} />
      {Object.values(groups).map(group => (
        <div key={group.name} className="group-item">
          <div>{group.name}</div>
          <div className="color">
            <div style={{ backgroundColor: group.color }} />
          </div>
          <button type="button" onClick={e => deleteGroup(group.name)}>
            Remove
          </button>
          <div>
            {group.codes.map(code => countries.find(c => c.id === code)?.title || code).join(', ')}
          </div>
        </div>
      ))}
      <div>
        <select onChange={onChange}>
          {Object.values(groups).map(group => (
            <option key={group.name} value={group.name}>{group.name}</option>
          ))}
        </select>
        <div className="color">
          <div style={{ backgroundColor: groups[currentGroup]?.color || '' }} />
        </div>
      </div>
    </div>
  );
};

export default Groups;

