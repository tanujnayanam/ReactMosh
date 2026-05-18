import { useState } from "react";

interface Props {
  maxChar: number;
  children: string;
}

const ExpandableText = ({ children, maxChar }: Props) => {
  const [isVisible, setVisibility] = useState(false);

  const textToShow = isVisible ? children : children.slice(0, maxChar);
  return (
    <>
      <div>
        {textToShow}
        <button onClick={() => setVisibility(!isVisible)}>
          {isVisible ? "Less" : "More"}
        </button>{" "}
      </div>
    </>
  );
};

export default ExpandableText;
