import './App.css';
import { useCallback, useMemo, useState } from 'react';
import Groups from './components/groups';
import Map from './components/map';
import GroupsContext from './GroupsContext';

/*

- Handle click on country
- Fill countries with groups color

*/

function App() {
  const [groups, setGroups] = useState({});

  const createGroup = useCallback(group => {
    const newGroups = { ...groups };
    newGroups[group.name] = { ...group, codes: [] };
    setGroups(newGroups);
  }, [groups]);

  const deleteGroup = useCallback(name => {
    const newGroups = { ...groups };
    delete newGroups[name];
    setGroups(newGroups);
  }, [groups]);

  const value = useMemo(() => ({
    groups,
    createGroup,
    deleteGroup,
  }), [groups, createGroup, deleteGroup]);

  return (
    <div className="App">
      <GroupsContext.Provider value={value}>
        <Groups />
        <Map />
      </GroupsContext.Provider>
    </div>
  );
}

export default App;
