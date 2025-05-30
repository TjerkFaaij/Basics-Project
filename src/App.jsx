import { RecipeListPage } from './pages/RecipeListPage';
import { RecipePage } from './pages/RecipePage';
import { Center } from '@chakra-ui/react';
import { useState } from 'react';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState();

  return (
    <Center flexDir="column" backgroundColor="blue.100">
      {selectedRecipe ? (
        <RecipePage recipe={selectedRecipe} selectRecipe={setSelectedRecipe} />
      ) : (
        <RecipeListPage selectRecipe={setSelectedRecipe} />
      )}
    </Center>
  );
};
