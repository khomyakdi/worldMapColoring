import { useContext } from 'react';
import GroupsContext from '../../GroupsContext';
import './Groups.css';
import NewGroup from "./NewGroup";

export default () => {
   const { groups, createGroup } = useContext(GroupsContext);

   const onGroupCreate = group => {
      createGroup(group);
   }

   return (
      <div>
         <NewGroup onGroupCreate={onGroupCreate} />
         {Object.values(groups).map(group => (
            <div key={group.name}>{group.name}</div>
         ))}
      </div>
   );
};
