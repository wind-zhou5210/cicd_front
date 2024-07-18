import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomePage() {
  const [userList, setUserList] = useState<Array<{ id: number; name: string }>>(
    []
  );

  useEffect(() => {
    axios.get("http://localhost:3000/api/users").then((data) => {
      console.log(data);
      setUserList(data?.data);
    });
  }, []);
  return (
    <div>
      1111
      <ul>{userList?.map((user) => <li key={user.id}>{user.name}</li>)}</ul>
    </div>
  );
}
