export interface Person{
  name:String; //A person has a name and it will be a string.
}

export interface SocialNetwork{
  title:String;
  getUsers():Person[]; //This function will return a person, and that is an array of persons
}
