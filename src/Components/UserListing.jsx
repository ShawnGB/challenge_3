import React, { useContext } from "react";
import { UserContext } from "./UserContext";

import { Link } from "react-router-dom";

export default function UserListing() {
  // get array of users
  const { users } = useContext(UserContext);

  return (
    <>
      {users.map((user, index) => (
        <article key={index}>
          <div className="userElement">
            <Link to={`/${user.login.uuid}`}>
              <span className="imageContainer">
                <img src={user.picture.medium} alt="" />
              </span>
              <h2 id="noColor">
                {user.name.title + " " + user.name.first + " " + user.name.last}
              </h2>
            </Link>
            <a href={"mailto:" + user.email}>{user.email}</a>
            <p>{user.location.city + ", " + user.location.country}</p>

            <Link className="linkStyle" to={`/${user.login.uuid}`}>
              See More
            </Link>
            <br />
          </div>
        </article>
      ))}
    </>
  );
}
