type Props = {
  name?: string;
  picture?: string;
};

const Avatar = ({ name, picture }: Props) => {
  return (
    <div className="flex items-center">
      <img src={picture || 'https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light'} className="w-12 h-12 rounded-full mr-4" alt={name} />
      <div className="text-xl font-bold">{name || 'Jane Doe'}</div>
    </div>
  );
};

export default Avatar;
