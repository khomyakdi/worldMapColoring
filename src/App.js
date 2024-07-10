import './App.css';
import { useCallback, useMemo, useState, useEffect } from 'react';
import Groups from './components/groups';
import Map from './components/map';
import GroupsContext from './GroupsContext';

function App() {
  const [groups, setGroups] = useState({});
  const [currentGroup, setCurrentGroup] = useState();

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

  const onCountrySelect = useCallback(id => {
    //TODO remove other groups;

    const newGroups = { ...groups };
    const newGroup = { ...newGroups[currentGroup] };
    const newCodes = [...newGroup.codes];

    const countryIndex = newCodes.findIndex(c => c === id);

    if (countryIndex >= 0) {
      newCodes.splice(countryIndex, 1);
    } else {
      newCodes.push(id);
    }

    newGroups[currentGroup] = { ...newGroup, codes: newCodes };

    setGroups(newGroups);
  }, [groups, currentGroup]);

  useEffect(() => {
    const groupNames = Object.keys(groups)

    if (groupNames[0] && !currentGroup)
      setCurrentGroup(groupNames[0]);
  }, [groups, currentGroup, setCurrentGroup]);

  const value = useMemo(() => ({
    groups,
    createGroup,
    deleteGroup,
    currentGroup,
    setCurrentGroup,
    onCountrySelect,
  }), [groups, createGroup, deleteGroup, currentGroup, setCurrentGroup, onCountrySelect]);

  const colorStyles = useMemo(() => {
    const groupValues = Object.values(groups);
    if (!groupValues.length)
      return '';

    const groupStyles = groupValues.map(group => {
      if (!group.codes.length)
        return '';

      const selector = '#' + group.codes.join(', #') + ', #' + group.codes.join(' path, #') + ' path';
      return `${selector} { fill: ${group.color} !important;}`;
    });

    return groupStyles.join(' ');
  }, [groups]);

  return (
    <>
      <style>
        {colorStyles}
      </style>
      <div className="App">
        <GroupsContext.Provider value={value}>
          <Groups />
          <Map />
        </GroupsContext.Provider>
      </div>
    </>
  );
}

export default App;
