# <span style= "color: #00bfff;"> Redux </span>

## <span style="color: red;">Overview</span>

*   Notes about <span style="color: #FA8072;">Redux.</span>   

## <span style="color: red;">Principles of Redux</span>

*   __The single Immutable State Tree__ is the _First Principle_ of Redux. Redux will represent the whole state of      your application as a single JavaScript object. All changes and mutations in the state within redux are             explicit, meaning that it is easy to keep track of all of them.

*   __The State Tree is Redundant__ is the _Second Principle_ of Redux. You can not modify of write to it. Anytime      you want to change the state you need to dispatch a plain JavaScript object that describes the changed called       an "Action". <span style="color: #FA8072;">__"The State"__</span> is the minimal representation of the data in      your app.  <span style="color: #FA8072;">__"The Action"__.</span> is the minimal representation of the change       to that data.  

*   The structure of the action object is really up to you but it is required to have a <span style="color: #FA8072;    ">__"Type"__</span> property that is not undefined.  Type: "INCREMENT".  Strings are probably best to use           because they are serializable.  