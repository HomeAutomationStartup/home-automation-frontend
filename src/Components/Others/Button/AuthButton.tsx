import "./AuthButton.css";

const AuthButton = (props: any) => {
  return (
    <div className="greenButton">
      <button style={{ marginTop: "20px" }} type="submit" onClick={props.fn}>
        {props.label}
      </button>
    </div>
  );
};

export default AuthButton;
