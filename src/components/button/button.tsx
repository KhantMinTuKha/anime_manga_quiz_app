import "./button.css";

interface Props {
  value: boolean;
  setValue: (value: boolean) => void;
}

const Button = ({ value, setValue }: Props) => {
  return (
    <div className="buttonContainer">
      <p>Do you have brave enough to press this button?</p>
      <button
        className="startButton"
        onClick={() => {
          setValue(!value);
        }}
      >
        start quiz
      </button>
    </div>
  );
};

export default Button;
