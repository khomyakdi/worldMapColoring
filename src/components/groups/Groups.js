import './Groups.css';
import { useContext } from 'react';
import GroupsContext from '../../GroupsContext';
import NewGroup from "./NewGroup";

export default () => {
   const { groups, createGroup, deleteGroup } = useContext(GroupsContext);

   const onGroupCreate = group => {
      createGroup(group);
   }
  
  return (
      <div>
         <NewGroup onGroupCreate={onGroupCreate} />
         {Object.values(groups).map(group => (
            <div key={group.name} className="group-item">
              <div>{group.name}</div>
              <div className="color">
                <div style={{backgroundColor: group.color}} />
              </div>
              <button type="button" onClick={e => deleteGroup(group.name)}>Remove</button>
            </div>
         ))}
      </div>
  );
};
