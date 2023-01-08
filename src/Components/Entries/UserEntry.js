import "./UserEntry.css";

const UserEntry = (props) => {
  return (
    <div className="user_entry">
      <p className="entry_line">
        <span className="line_label">Name:</span>
        {props.name}
      </p>
      <p className="entry_line">
        <span className="line_label">Organization:</span>
        {props.org}
      </p>
      <p className="entry_line">
        <span className="line_label">Title:</span>
        {props.title}
      </p>
      <p className="entry_line">
        <span className="line_label">Phone #:</span>
        {props.phone}
      </p>
      <p className="entry_line">
        <span className="line_label">Email:</span>
        {props.email}
      </p>
    </div>
  );
};

export default UserEntry;
