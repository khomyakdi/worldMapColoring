import { useState, memo } from "react";

const NewGroup = ({ onGroupCreate }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');

    const onSubmit = (e) => {
        onGroupCreate({ name, color });
        setName('');
        setColor('');
        e.preventDefault();
    };

    const onNameChange = (e) => {
        setName(e.target.value);
    };

    const onColorChange = (e) => {
        setColor(e.target.value);
    };

    return (
        <form onSubmit={onSubmit} className="new-group">
            <div>
                <label>Name: <input onChange={onNameChange} value={name} /></label>
            </div>
            <div className="color">
                <label>Color: <input onChange={onColorChange} value={color} /></label>
                <div style={{ background: color }} />
            </div>
            <div>
                <button type="submit">Create</button>
            </div>
        </form>
    )

};

export default memo(NewGroup);
