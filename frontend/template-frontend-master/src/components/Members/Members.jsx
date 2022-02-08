import axios from 'axios';
import { useEffect, useState } from 'react';

function Members() {
  const [members, setmembers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/Members').then(({ data }) => {
      setmembers(data);
    });
  }, []);

  return (
    <ul>
      {members.map((member) => {
        return <li>{member.Name}</li>;
      })}
    </ul>
  );
}

export default Members;
