import Button from "./Button";
const Header =({onShow, showAdd})=>{
    return(
        <header className="header">
            <h2>Task Tracker</h2>
            <Button text={onShow ? "Close" : "Open"}  color={onShow ? "red" : "green"}  onClick={showAdd}/>

        </header>

    );
}
export default Header;