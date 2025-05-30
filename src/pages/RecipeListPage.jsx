import { Center, Text } from "@chakra-ui/react";
import { data } from "../utils/data";
import { SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from "../components/ui/RecipeCard";
import { useState } from "react";
import { TextInput } from "../components/ui/TextInput";

export const RecipeListPage = ({ selectRecipe }) => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  };

  const matchedRecipes = data.hits.filter((recipe) =>
    recipe.recipe.label.toLowerCase().includes(searchField)
  );

  return (
    <>
      <Text mt={4} fontSize="3xl">
        Search for recipes:
      </Text>
      <TextInput changeFn={handleChange} w={[300, 380]} mb={8} />

      <Center flexDir="column">
        <SimpleGrid columns={[1, 1, 2, 3, 3, 4]} spacing={10}>
          {matchedRecipes.map((recipe) => (
            <RecipeCard
              key={recipe.recipe.id}
              recipe={recipe.recipe}
              selectRecipe={selectRecipe}
            />
          ))}
        </SimpleGrid>
      </Center>
    </>
  );
};
