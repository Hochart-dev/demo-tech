import axios from 'axios';
import { useEffect, useState } from 'react';
import StyleMembers from './StyleMembers';

function Members() {
  const [members, setmembers] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8000/Members').then(({ data }) => {
      setmembers(data);
    });
  }, []);

  return (
    <StyleMembers>
      <div className="content">
        {members.map((member) => {
          return (
            <div className="memberlist">
              <img className="pictures" src={member.Avatar} alt={member.Name} />
              <p>{member.Name}</p>
              <p>{member.Quality}</p>
            </div>
          );
        })}
      </div>
    </StyleMembers>
  );
}

export default Members;
