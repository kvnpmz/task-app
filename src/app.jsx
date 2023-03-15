import { useState } from 'react';
import Button from '@mui/material/Button';

export default function App() {

    const [count, setCount] = useState(0);

    const handleClick = (prevState) => {
        setCount(prevState + 1);
    };   
    
  return (
    <div>
        <Button
        onClick={() => handleClick(count)}
        variant="contained"
        color="primary"
        >
            {count}
        </Button>
    </div>
    );
}


