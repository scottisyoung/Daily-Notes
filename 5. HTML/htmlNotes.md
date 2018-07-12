# <span style="color: #00bfff;">HTML Notes</span>

## <span style="color: blue;">Overview</span>

*  HTML is the skeleton of all web pages.  It is often the first language learned by marketers / designers and is     core to front-end development work. 
*  HTML tells your browser where to position content such as images, text, or videos.
*  A browser is a piece of software which allows us to display content on the web (among other things). Browsers      today include Chrome, Firefox, Safari, and Edge.
*  HTML stands for <span style="color: #76D7C4;">_HyperText Markup Language_</span>
*  A _markup_ language is a computer language that defines the structure and presentation of raw text
*  The raw text is wrapped in _HTML Elements_
*  _HyperText_ is text displayed on a computer or device that provides access to other text through links, also       known as _hyperlinks_.
*  With careful markup, developers can create a hieracrchy of information which serves several purposes. It allows    users scanning a site to quickly pick out the most important ideas. It helps visually impaired users to            navigate the content of a page using special software. It helps search engines pick out important keywords that    might otherwise get lost in a sea of text.    

## <span style="color: blue;">HTML Anatomy</span>

*   HTML is composed of <span style="color: #76D7C4;">_Elements_</span>.  These elements structure the webpage and     define its content. 
*   Elements are made of _opening and closing tags_.  What goes in between the tags is called the _content_.  The      opening / closing and the content make up the full _element_.
*   Tags are angle brackets <>.
*   <span style="color: #76D7C4;">_Opening Tag:_</span>  __<>__
*   <span style="color: #76D7C4;">_Closing Tag:_</span>  __</>__

## <span style="color: blue;">The Body and HTML Structure</span>

*   One key element of building a webpage is the _body element_.
*   Only content that is in between the body tags will be displayed on the page

*   HTML is organized as a collection of family tree relationships including parent-child and siblings.  
*   When an element is contained inside another element, it is considered to be the child of that element.  
*   <span style="color: #76D7C4;">_Nested_</span>: Means to be placed inside of another element.
*   The relationship of elements and their ancestors is knowns as _hierarchy_.

## <span style="color: blue;">Common HTML Elements</span>

### <span style="color: red;">Headings</span>

*   Headings in HTML are similar to headings in other types of media. 
*   There are six different sizes.  Largest starts with <span style="color: #76D7C4;">_H1_</span> and the smallest     starts with <span style="color: #76D7C4;">_H6_</span>

### <span style="color: red;">Divs</span>

*   Div is short for Division or a container that divides the page into sections.
*   Divs can contain any text or other HTML element such as links, images, or videos. 
*   Rememeber to always add two spaces of indentation when you nest elements inside of divs for better readability.

## <span style="color: blue;">Attributes</span>

*   If we want to expand an elements tag, we ccan do so using an attribute.
*   Attributes are content added to the opening tag of an element.
*   They can provide information or change styling.
*   Attributes are made up of 2 parts. 
    1. The _name_ of the attribute.
    2. The _value_ of the attribute.

*   _id_ is an example of an attribute that can be used to specify content. 

## <span style="color: blue;">Displaying Text</span>

*   If you want to display text, you can use paragraphs or span
*   Paragraphs contain a block of plain text and are defined by a p inside tags
*   Span contain short pieces of text or other HTML.  They are used to separate small pieces of content that are       on the same line as other content. 

## <span style="color: blue;">Styling Text, Line Breaks, Unordered, Ordered Lists</span>

*   There are many different tags that can be used to style text.  _em_ tag emphasizes or makes it italic.  The        _strong_ tag makes the text bold. 
*   <span style="color: #76D7C4;">_Line Breaks_</span> using the _br_ tag is unique because it does not need a           closing tag.  It can be used much like a p tag.
*   <span style="color: #76D7C4;">_Unordered Lists_</span> can be used to make easy to read lists.  
*   An Unordered List consists of bullet points and is noted by the _ul_ tag as a parent with _li_ list tags as        children
*   <span style="color: #76D7C4;">_Ordered Lists_</span> noted by the _ol_ tag are used the same way as unordered      list by will be created by number.

## <span style="color: blue;">Images, Videos, and Links</span>

*   An image tag is noted as _img_ and is a self closing tag.
*   Images require an attribute called _src_.  This is for the images _source_ or the location of the image. 
*   The image src must = the URL of the image or the area where the image is stored. 
*   A _local address_ refers to the path to an image, file, or resource that exists on your own computer. 
*   A _web address_ refers to the path to an image, file, or resource that exists externally or remomtely.
*   _Image Alts_ are important because bring meaning to an image. They are an attribute that is placed on an image     by using _alt_ and setting it equal to a String "" with a description. They are a description that serve the       following purposes. 
    <ul>
        <li>If an image fails to load, it can give a description of what would be there.</li>
        <li>They provide a description for those who are visually impared.</li>
        <li>They provide a role in SEO (Search Engine Optimization) which can improve rankings of your site.</li>
    </ul>
*   The video tag is noted by _video_.  It also contains a src attribute and it DOES require a closing tag. 
*   You can add Height / Width attributes to the video as well. The Controls attribute tells the browser to pause,     play, and skip.
*   The text "video is not supported" should be placed between the opening and closing tags and will only be           displayed if the browser is unable to support the video. 
*   _Link_ to other pages is marked with an anchor element _a_. 
*   It is then given an _href_ attribute that stands for _hyperlink reference_ and is the path or address to           either a file or another website's URL.
*   _New Window Links_:  You can open a new window with a link by using the _target_ attribute and setting it          equal to the string "_blank".
*   _Linking to Relative Page_: or linking to our root directory. An example is linking to the file contact.html       which lets say is in our root directory.  You would set the href="./contact.html"
*   You can also nest an img tag inside a anchor tag which will link the image if clicked. The same goes with divs     and other elements as well.    
*   _Linking on the same page_: To do this we must add an "id".  So we give an element a target id which resembles     where we would like our page to be scrolled to.  Then we add a link with that targets id description with a #      sign in front.  
            *   An Example Below

            *   <p id="top">This is the top of the page location"</p>

            *   <ol>
                    <li><a href="#top">On click will take you to the top</a><li>
                </ol>

## <span style="color: blue;">Preparing for HTML</span>

*   In preparing your document, start with a _document type declaration_
*   _!DOCTYPE html_ between tags
*   This is an instruction that must be the first line of code in an HTML doc.  It tells the browser what type of      document to expect, along with which HTML version will be used. In this case HTML5 is the current standard. 
*   HTML code is always saved in a file with an .html extension
*   _html_ tag is used next to then have a place for all html content to be in between. 
*   _The Head_ is the next thing that will be added to your document with the tag _head_.  
*   The head contains all the _metadata_ for a web page.  
*   _Metadata_ is information about the page that is not displayed.  It is info about the page itself. 
*   _Page Titles_ is the title of the page that will be displayed on the browser tab at the top.
*   The title is noted by the _title_ tag.
*   _WhiteSpace and Indentation_: are used to make code easy to visualize. 
*   Whitespace refers to writing code on separate lines and not all in the same line.
*   Indentation referes to the practice of indenting code that is nested. 
*   _W3C or World Wide Web Consortium_ is responsible for maintaining the style standards of HTML. 
*   Anything that is nested should recieve 2 spaces. 
*   _Comments_:  It is important to comment on your code so that others can easily understand your code.
*   Comments also help you to rememeber your own code if you are to come back to it at a later time. 
*   Comments begin with !-- and end with -- all enclosed in tags. 

## <span style="color: blue;">Tables</span>

*   A great way to display Tabular data. 
*   _Table_:  to start a table use the _table_ tag. 
*   _Table Rows_: to create a row, use the _tr_ tag.
*   _Table Data_: Inside of a row you can add data with the _td_ tag.
*   _Table Headings_: Data needs a heading in order to make sense.  You can make headings by using _th_ tag. 
*   Like Table Data, the Table Headings must be placed inside the Table Row.
*   You can use the scope attribute which can take one or two values as seen below.
    1. row - This value makes it clear that the heading is for a row.
    2. col - This value makes it clear that the heading is for a column.
*   _Table Borders_: Borders help the table to be easier to read. Use the border attribute.
*   The _border_ attribute can be set equal to the amount of thickness.  1 being the least thick. 
*   However it is much better to use CSS to determine the borders of a table. An Example Below:

                *   table, td {
                    border: 1px solid black;
                }

*   _Spanning Columns_: colspan is the attribute that is used to span multiple columns. Set it equal to the amount.
*   _Spanning Rows_: rowspan attribute is used to span multiple rows. 
*   _Table Body_: Since tables can be very long, you can use the _tbody_ element to contain all the information.
*   The _tbody_ tag goes right after _thead_ tag. 
*   _Table Head_: or _thead_ tag is where the _th_ tags will be stored and will be the tables head.
*   _Table Footer_: or _tfoot_ tag is another section that can be sectioned off and goes directly after the _tbody_
*   _Styling with CSS_: Tables are bland and need styling to be readable. 


