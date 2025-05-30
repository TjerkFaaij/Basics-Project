import {
    Image,
    Text,
    Box,
    Center,
    Button,
    SimpleGrid,
    Stack, HStack,
    Tag,
    TagLabel,
    Flex,
    Divider
  } from "@chakra-ui/react";
  
  import { ArrowBackIcon } from "@chakra-ui/icons";

 
  
  export const RecipePage = ({ recipe, selectRecipe }) => {

    return (
      <>
        <Button
          m={4}
          size={'lg'}
          variant="solid"
          bgColor="blue.300"
          color="white"
          leftIcon={<ArrowBackIcon />}
          onClick={() => selectRecipe()}
        >
          Go Back
        </Button>

        <Box
          borderRadius="1rem"
          overflow="hidden"
          p="4"
          m="4"
          backgroundColor="white"
          maxWidth={[300, 400, 600, 900]}
        >
          <Box m={[1,1, 6]} >
            <Center>
              <Image
                boxSize={[300,400,700]}
                maxHeight={[200,300,500]}
                objectFit="fill"
                borderRadius="1rem"
                src={recipe.image}
              />
            </Center>
          </Box>

          <SimpleGrid columns={[1,1,2]} spacing={[2,2, 10]}>
            <Box  height="auto">

              <Box m={[1,2]}>
                <Text fontSize={["l","l","xl","2xl"]} fontWeight={"500"} color="grey">
                {recipe.mealType.toString().toUpperCase()}
                </Text>
              </Box>

              <Box m={[1,2]} mb={6}>
                <Text fontSize={["xl","3xl"]} fontWeight={"500"}>
                  {recipe.label}
                </Text>
              </Box>

              <Box m={[1,2]}>
                <Text fontSize={["l","xl"]} fontWeight={"500"}>
                Dish: {recipe.dishType}
                </Text>
              </Box>

              <Box m={[1,2]}>
                <Text fontSize={["l","xl"]} fontWeight={"500"}>
                Total cooking time: {recipe.totalTime} minutes
                </Text>
              </Box>

              <Box m={[1,2]}>
                <Text fontSize={["l","xl"]} fontWeight={"500"}>
                Servings: {recipe.yield} 
                </Text>
              </Box>
             
              <Divider mb={4} mt={4}/>
             
              <Box m={2}>
                <>
                <Text fontSize={["xl","2xl"]} fontWeight={"500"} mb="0.5">Ingredients: </Text>
                <Stack spacing={[1,2,2,3]}>
                  {recipe.ingredients.map((ingredient) => (
                  <Text key={ingredient} fontSize={["md","xl"]} fontWeight={"300"}>
                    {ingredient.text}
                  </Text>
                    ))}
                </Stack>
                </>
              </Box>
            </Box>    
          
            <Box height="auto" >
              <>

              <Box m={2}>
              <Text fontSize={["m","xl"]} fontWeight={"500"}>Health Labels: </Text>
              <Flex wrap='wrap'>
                  {recipe.healthLabels.map((label) => (
                  <Tag size={["md","lg"]}  key={label} variant="solid" bgColor="purple.300" m={2} >
                    <TagLabel>{label}</TagLabel>
                  </Tag>
                  ))}
              </Flex>
              </Box>

              <Box m={2}>
                <>
                <Text fontSize={["m","xl"]} fontWeight={"500"}>Diet: </Text>
                <HStack spacing={4}>
                  {recipe.dietLabels.map((diet) => (
                  <Tag size={["md","lg"]} key={diet} variant="solid" bgColor="green.300">
                    <TagLabel>{diet}</TagLabel>
                  </Tag>  
                    ))}
                </HStack>
                </>
              </Box>
            
              <Box m={2}>
                <>
                <Text fontSize={["m","xl"]} fontWeight={"500"}>Cautions: </Text>
                <HStack spacing={4}>
                  {recipe.cautions.map((caution) => (
                    <Tag size={["md","lg"]}  key={caution} variant="solid" bgColor="pink.300">
                      <TagLabel>{caution}</TagLabel>
                    </Tag>
                  ))}
                </HStack>
                </>
              </Box>

              <Box m={2}>
                <Text fontSize={["m","xl"]} fontWeight={"500"} mb={2}>Total Nutrients: </Text>
                <SimpleGrid columns={3} spacing={6}>
                  <box >
                    <Text>{Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)} {recipe.totalNutrients.ENERC_KCAL.unit}</Text> 
                    <Text fontSize={"l"} fontWeight={"600"}>{recipe.totalNutrients.ENERC_KCAL.label}</Text>
                  </box>
                  <box>
                    <Text>{Math.round(recipe.totalNutrients.PROCNT.quantity)} {recipe.totalNutrients.PROCNT.unit}</Text> 
                    <Text fontSize={"l"} fontWeight={"600"}>{recipe.totalNutrients.PROCNT.label}</Text>
                  </box>
                  <box>
                    <Text>{Math.round(recipe.totalNutrients.FAT.quantity)} {recipe.totalNutrients.FAT.unit}</Text> 
                    <Text fontSize={"l"} fontWeight={"600"}>{recipe.totalNutrients.FAT.label}</Text>
                  </box>
                  <box>
                    <Text>{Math.round(recipe.totalNutrients.CHOCDF.quantity)} {recipe.totalNutrients.CHOCDF.unit}</Text> 
                    <Text fontSize={"l"} fontWeight={"600"}>{recipe.totalNutrients.CHOCDF.label}</Text>
                  </box>
                  <box>
                    <Text>{Math.round(recipe.totalNutrients.CHOLE.quantity)} {recipe.totalNutrients.CHOLE.unit}</Text> 
                    <Text fontSize={"l"} fontWeight={"600"}>{recipe.totalNutrients.CHOLE.label}</Text>
                  </box>    
                  <box>
                    <Text>{Math.round(recipe.totalNutrients.NA.quantity)} {recipe.totalNutrients.NA.unit}</Text> 
                    <Text fontSize={"l"} fontWeight={"600"}>{recipe.totalNutrients.NA.label}</Text>
                  </box>             
                </SimpleGrid>
              </Box>

            </>
            </Box > 
          </SimpleGrid>

        </Box>
        <Button
          m={6}
          size={'lg'}
          variant="solid"
          bgColor="blue.300"
          color="white"
          leftIcon={<ArrowBackIcon />}
          onClick={() => selectRecipe()}
        >
          Go Back
        </Button>
      </>
    );
  };
  