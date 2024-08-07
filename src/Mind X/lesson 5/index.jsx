import { useState } from 'react';
const Test = () => {
 
  const [theme, setTheme] = useState(true);
  const handleSetTheme = () => {
    setTheme(!theme);
  };

  return (
    <div style={!theme ? {backgroundColor: 'white',color: 'black' }: {   backgroundColor: 'black', color: 'white'} }>
      <p>Hello! I'm MindX. 10 years old.</p>
      <button onClick={handleSetTheme}>Change theme {!theme ? 'Light' : 'Dark'}</button>
    </div>
  );
};
export default Test;
