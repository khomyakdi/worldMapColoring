import './Groups.css';
import NewGroup from "./NewGroup";

export default () => {
   const onGroupCreate = group => {
      console.log(group);
   }
   return (
      <div>
         <NewGroup onGroupCreate={onGroupCreate} />
      </div>
   );
};
