# Next.js

## Route
#### Next.js use file system based router in which we create folder and set the file.
#### Folder set the route


nested routing , optional routing, dynamic routing

#### Nested Route
    For using nested route we have to create a folder and inside that folder we create another folder and in this folder we create our router page.

#### Route Group 
    We can use Route Group by putting that folder (FolderName) inside it.

#### Dynamic Route
    When we don't know the actual route then we use Dynamic route.
    We use [], and inside this we write our id, name etc.

    ```
    
const MyProfile  = ({params}) => {
    console.log(params);
  return (
    <div>MyProfile {params.id} </div>
  )
}

export default MyProfile 
```

#### Catch All Route

    We use catch to combine all the route at one 
    For using Catch All Route we have to put our folder inside [...FolderName].
    If we want this folder optional so we have to use double square bracket [[...FolderName]] 

#### Paraller Routes

#### Layout

#### Link

#### userouter() Hook

#### Using CSS Module

