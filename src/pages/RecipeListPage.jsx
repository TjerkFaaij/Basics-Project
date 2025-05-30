import { Center, Text } from '@chakra-ui/react';
import { data } from '../utils/data';
import { SimpleGrid } from "@chakra-ui/react";
import { RecipeCard } from '../components/ui/RecipeCard';
import { useState } from 'react';
import { TextInput } from "../components/ui/TextInput";

//need to add ids to the data file

export const RecipeListPage = ({selectRecipe}) => {
  // You can play around with the console log, but ultimately remove it once you are done
  //console.log(data.hits[0].recipe.id);
  
  const [searchField, setSearchField] = useState();

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  const matchedRecipes = data.hits.filter((recipe) => {
    return recipe.recipe.label.toLowerCase().includes(searchField);
  });

  console.log(matchedRecipes);

  return (
    <>
    <Text mt={4} fontSize={"3xl"}>Search for recipes:</Text>
    <TextInput changeFn={handleChange} w={[300, 380]} mb={8} />

    <Center flexDir="column">
      <SimpleGrid columns={[1, 1, 2, 3, 3, 4]} spacing={10}>
        { matchedRecipes.map((recipe) => (
        //  console.log(recipe.recipe.id)
           <RecipeCard
            key={recipe.recipe.id}
            recipe = {recipe.recipe}
            selectRecipe={selectRecipe}
          />
        ))}
      </SimpleGrid>

    </Center>
    </>
  );
};

