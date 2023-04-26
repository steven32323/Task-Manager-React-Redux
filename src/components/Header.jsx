import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1 className={classes.h1}>Task Manager</h1>
    </div>
  );
};

export default Header;
