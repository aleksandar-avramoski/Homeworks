function tellStory(storyElements) {
  //Story elements
  let [name, mood, activity] = storyElements;
  return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end`;
} 

console.log(tellStory(["Aleksandar", "good", "writing code"]));