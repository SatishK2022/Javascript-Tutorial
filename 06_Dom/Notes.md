# DOM Notes :-

### Code: 
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document Object Model(DOM)</title>
</head>
<body>
    <div class="container">
        <h1  id="title" class="heading">This is a heading <span style="display: hidden">Chai aur Code</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit.</p>
    </div>
</body>
</html>

```

- document.getElementById("title")
- document.getElementById("title").id
- document.getElementById("title").className
- document.getElementById("title").getAttribute("class")
- document.getElementById("title").setAttribute("class", "test heading") // it overwrites the value

### const title = document.getElementById("title")
  title.style.backgroundColor = "Orange"

  title.style.padding = "20px"

  title.innerText // Gets the text which is visible on the screen
  ```
  This is Heading
  ```

  title.textContent // Gets all the text which is either hidden or showing on the screen
  ```
  This is Heading Chai aur Code
  ```

  title.innerHTML // It will also give the inner HTML elements
  ```
  This is a heading <span style="display: hidden">Chai aur Code</span>
  ```

