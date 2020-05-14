import React, { useContext } from "react";
import { UserContext } from "./UserContext";
import { Link, Redirect } from "react-router-dom";

export default function UserDetails(props) {
  const { getUser } = useContext(UserContext);

  // get user object
  const user = getUser(props.match.params.uuid);

  // return to index if user is not found
  if (!user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="userDetilsContainer">
      <span className="imageContainer">
        <img src={user.picture.large} alt="" />
      </span>
      <h2>
        {user.name.title +
          " " +
          user.name.first +
          " " +
          user.name.last +
          " [" +
          user.registered.age +
          "]"}
      </h2>
      <a href={"mailto:" + user.email}>{user.email}</a>
      <a href={"tel:" + user.cell}>{user.cell}</a>
      <p>{user.location.street.name + ", " + user.location.street.number}</p>
      <p>{user.location.city + ", " + user.location.country}</p>
      <Link className="linkStyle" to={"/"}>
        Go Back
      </Link>
      <br />
    </div>
  );
}
