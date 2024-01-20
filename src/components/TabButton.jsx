const TabButton = ({ children }) => {
  const handleClick = () => {
    console.log('Holiiii');
  };
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};

export default TabButton;
