import {
    Image,
    Text,
    Box,
    HStack,
    Center,
    Tag,
    TagLabel
  } from "@chakra-ui/react";
  
  export const RecipeCard = ({ recipe, selectRecipe }) => {

    const isVegetarianCheck = recipe.healthLabels.includes("Vegetarian")
    const isVeganCheck = recipe.healthLabels.includes("Vegan")

    return (
      <Box
        cursor={"pointer"}
        onClick={() => selectRecipe(recipe)}
        borderRadius="1rem"
        overflow="hidden"
        p="4"
        marginBottom="4"
        backgroundColor="white"
        maxWidth={[340, 380]}
      >
        <Box m={2}>
          <Center>
            <Image
              height={250}
              width={350}
              objectFit="fill"
              borderRadius="1rem"
              src={recipe.image}
            />
          </Center>
        </Box>

        <Box m={2}>
         <Text fontSize={["l","xl"]} fontWeight={"500"} > 
           <Center>{recipe.mealType}</Center>
          </Text>
        </Box>
 
        <Box m={3}>
          <Text fontSize={["xl", "2xl"]} fontWeight={"700"} textAlign={"center"} >
            <Center>{recipe.label}</Center>
          </Text>
        </Box>

        <Box m={2}><Center>
            <HStack spacing={4}>
            { isVegetarianCheck ? (<Tag size="lg" variant="solid" bgColor="purple.300"> <TagLabel> Vegetarian</TagLabel></Tag> ): ""}
            { isVeganCheck ? (<Tag size="lg" variant="solid" bgColor="purple.300"> <TagLabel> Vegan</TagLabel></Tag> ): ""}
            </HStack></Center>
        </Box>

        <Box m={2}><Center>
        <HStack spacing={4}>
          {recipe.dietLabels.map((diet) => (
            <Tag size="lg" key={diet} variant="solid" bgColor="green.300">
              <TagLabel>{diet}</TagLabel>
            </Tag>
            
          ))}
        </HStack></Center>
        </Box>
 
 
        <Box m={2}>
          <Text fontSize={["l","xl"]} fontWeight={"500"}>
            <Center>Dish: {recipe.dishType}</Center>
          </Text>
        </Box>
 
 
        <Box m={2}>
          <Text fontSize={["l","xl"]} fontWeight={"500"}>
            <Center> Cautions: </Center></Text>
          <Center>
        <HStack spacing={2}>
          {recipe.cautions.map((caution) => (
            <Tag size="lg" key={caution} variant="solid" bgColor="pink.300">
              <TagLabel>{caution}</TagLabel>
            </Tag>
          ))}
        </HStack></Center>
        </Box>

     </Box>
    );
  };
  