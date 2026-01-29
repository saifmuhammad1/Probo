type Props = {
  text: string;
};

const TextBlock = ({ text }: Props) => {
  return <h1>{text}</h1>;
};

export default TextBlock;
