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
        return (
          <character>
            <img className="pictures" src={member.Avatar} alt={member.Name} />
            <li>{member.Name}</li>
            <li>{member.Quality}</li>
          </character>
        );
      })}
    </ul>
  );
}

export default Members;
