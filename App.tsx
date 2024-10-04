import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import MenuItem from "./src/components/MenuItem";

import { mockFoods } from "./src/mock/food";
import { useState } from "react";

export default function App() {
  const [orderMessage, setOrderMessage] = useState("");
  const [bubbleVisible, setBubbleVisible] = useState(false);

  const handleClick = (item: string) => {
    const recipes_messages = [
      {
        recipe_name: "Ratatouille",
        message: "Uau, essa é mesmo uma delícia! Uma explosão de sabores franceses com um toque rústico e saudável.",
      },
      {
        recipe_name: "Coq au Vin",
        message: "Esse Coq au Vin é de dar água na boca! Frango suculento em vinho tinto, perfeito para os amantes da culinária francesa.",
      },
      {
        recipe_name: "Tarte Tatin",
        message: "Nada melhor que uma Tarte Tatin quente com sorvete! A combinação de maçã caramelizada e massa crocante é irresistível.",
      },
      {
        recipe_name: "Soupe à l'Oignon",
        message: "Essa sopa de cebola gratinada é puro conforto. O queijo derretido e os croutons crocantes são perfeitos!",
      },
      {
        recipe_name: "Crêpes Suzette",
        message: "Crêpes flambados? Sim, por favor! A doçura do molho de laranja com Grand Marnier torna este prato inesquecível.",
      },
      {
        recipe_name: "Quiche Lorraine",
        message: "Uma clássica Quiche Lorraine, cremosa e cheia de sabor. Perfeita para qualquer hora do dia!",
      },
      {
        recipe_name: "Boeuf Bourguignon",
        message: "Esse Boeuf Bourguignon é uma verdadeira iguaria! Carne macia com um molho de vinho delicioso.",
      },
      {
        recipe_name: "Macarons",
        message: "Quem resiste a macarons? Docinhos coloridos que são crocantes por fora e cremosos por dentro.",
      },
      {
        recipe_name: "Pâté en Croûte",
        message: "O Pâté en Croûte é um clássico. A carne temperada dentro de uma crosta folhada é simplesmente divina.",
      },
      {
        recipe_name: "Baguette",
        message: "Essa baguette é crocante e perfeita para acompanhar qualquer prato. O pão francês clássico!",
      },
    ];

    setOrderMessage(recipes_messages.find((receita) => receita.recipe_name === item)?.message || "bon appetit!");
    setBubbleVisible(true);

    setTimeout(() => {
      setBubbleVisible(false);
    }, 5000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.remy}>
        {bubbleVisible && (
          <View style={styles.bubbleContainer}>
            <Text style={styles.bubbleText}>{orderMessage || ""}</Text>
            <View style={styles.bubbleArrow} />
          </View>
        )}

        <Image source={require("./assets/remy.png")} />
      </View>

      <ScrollView style={styles.menu} showsHorizontalScrollIndicator={false}>
        <View style={styles.logo}>
          <Image source={require("./assets/logo.png")} />
        </View>

        {mockFoods.map((e, i) => (
          <MenuItem name={e.name} price={e.price} category={e.category} description={e.description} image={e.image} onClick={handleClick} key={i} />
        ))}
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#461813",
    padding: 20,
  },
  logo: {
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "600",
    color: "white",
    fontFamily: "serif",
    textAlign: "center",
    textShadowColor: "#d1b69d",
    textShadowOffset: { width: 0, height: 3 },
    textShadowRadius: 6,
    letterSpacing: 1,
    marginBottom: 8,
  },
  menu: {
    padding: 12,
  },
  remy: {
    position: "absolute",
    bottom: 0,
    right: 100,
  },
  bubbleContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 16,
    padding: 12,
    maxWidth: "80%",
    alignSelf: "flex-start",
    marginBottom: 16,
    position: "fixed",
    bottom: "40%",
    marginRight: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bubbleText: {
    fontSize: 16,
    color: "#333",
  },
  bubbleArrow: {
    position: "absolute",
    left: 50,
    bottom: -10,
    width: 0,
    height: 0,
    borderLeftWidth: 10,
    borderRightWidth: 10,
    borderTopWidth: 10,
    borderStyle: "solid",
    backgroundColor: "transparent",
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "#f0f0f0",
  },
});
