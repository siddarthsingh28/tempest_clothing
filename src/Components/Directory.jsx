import DirectoryItem from "./DirectoryItem";

import { DirectoryContainer } from "./DirectoryStyles";

const Directory = ({ categories }) => {
  return (
    <DirectoryContainer>
      {categories.map(category => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
};

export default Directory;
