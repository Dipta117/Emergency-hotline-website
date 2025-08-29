

#1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?<br><br>
Ans : getElementById returns a single element identified by ID . getElementsByClassName returns HTML collection or the HTML elements identified by same classname , querySelector returns the first matching HTML element and querySelectorAll returns a Nodelist of HTML elements 


#2. How do you **create and insert a new element into the DOM**?<br><br>
Ans: 
Creation : let dom=document.createElement("element_type");

Adding content: using  dom.innerHTML or dom.innerText etc . 
ex. dom.innerText="Bangladesh"

Appending : document.getElementById().appendChild() or document.getElementsByClassName().appendChild()

ex.  document.getElementById("ID").appendChild(dom);



#3. What is **Event Bubbling** and how does it work?<br><br>
Ans:It means event happens at a target and moves up to the parents . 

suppose , there is an element inside a section , the section is inside a container such as. div , div is inside the body , body is inside the html , html is inside the document. When event happens by clicking that element inside section , that event occurs , also event happens inside section , body , html , document which is like bubbling up the eventflow from the starting place of the event to the upper parents . Thus event bubbling happens.




#4. What is **Event Delegation** in JavaScript? Why is it useful?<br><br>

Ans:
 It means giving one event listener to the parent instead of giving multiple event listener to the child. As event bubbling happens , so event happening in child , can be traced from parent and that child event can be detected using event.target .

It is useful because , it helps avoid declaring multiple event listener for each child which ensure memory efficieny and less quantity code need to write .



#5. What is the difference between **preventDefault() and stopPropagation()** methods?
<br><br>
Ans: 
preventDefault() is used to prevent the build in behaviour of browser. For example - by clicking a link , by default opens the webpage. But if we want to override this build in feature by our custom feature ,firstly we have to stop the default feature , then implementing our custom feature .

stopPropagation() is used to prevent the bubbling up through the DOM tree from the child event.It cannot stop default behaviour of browser. It works only with DOM event behaviour.