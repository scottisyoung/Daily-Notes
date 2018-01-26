<h1 style="color: #00bfff;">Markdown Notes</h1>

<h4 style="color: red;">Overview</h4>

*  Markdown Language is great for writing blog posts, creating web pages, git hub replies, books, slack messages or just taking notes
*  You can use Markdown to write html or formatted text. Although Markdown does not replace html. Markdown is a _writing format_, while     HTML is a _publishing format_
*  Can read by itself or can convert to html to be put onto the web
*  There are different types of Markdown like GFM (Github Flavored Markdown) and many different apps/editors that can be used 

<h2 style="color: blue;"> Section Headings, Paragraphs, Blockquotes, Lists, Code Blocks and Horizontal Lines </h2>

<h4 style="color: red;">Headings</h4>

*   "#" is used for main headings (H1)
*   "##" is used for sub headings (H2)
*   "######" is used for (H6)
*   "=====" is also used for main headings (H1)
*   "-----" is also used for sub headings (H2)
*   You can also close the hashmarks if you want but it is purely cosmetic. "# Title #".

<h4 style="color: red;">Paragraphs</h4>

*   "A blank line" is what will create a paragraph

<h4 style="color: red;">Blockquotes</h4>

*   ">" goes before the line of the text.  They can also be nested inside one another. "> >"

<h4 style="color: red;">Lists</h4>

*   You can use unordered or numbered lists
*   "*, -, +" creates a bullet point or an unordered list
*   List can be nested. If you use "*" with another inside it 
    will create an open circle bullet.
*   "1, 2, 3" creates a numbered list as long as followed by period.  It does not matter what number you use, it will always follow          sequence. 1,2,7,5,8 will return 1,2,3,4,5 in an ordered list
*   In order to escape a list such as 1979. At the beginning 
    of a sentence would create a list but 1979 \ . will not

*   To put a code block within a list item, the code block
    needs to be indedted _twice_ (two tabs or 8 spaces)

    * For example if this was my list item

            <code goes here>

<h4 style="color: red;">Code Blocks</h4>

*   Pre-formatted code blocks are used for writing about programming or markup source code. 
*   To produce a code block in markdown, simply indent every line of the block by at least 4 spaces or a tab.
*   You can use <"pre> and <"code> before and after without asterisks. 

    <pre><code> This is a code block </pre></code>

*   Within a code block, & and < areautomatically converted into HTML entities.

<h4 style="color: red;">Horizontal Lines</h4>

*   A horizontal line can be created by using three or more of 
    an hypen, asterisks or underscores on a separate line by themselves. "***"

<h2 style="color: blue;">Span Elements</h2>

<h4 style="color: red;">Links</h4>

*   There are two types of links: Inline and Reference, both 
    use [square brackets].
    1.  _Inline Links:_ use a set of regular parentheses 
                        imediately after the link text's closing square bracket

        Example: below is written like "[Google]"(http://www.google.com/ "Title") but without the quotes around the square brackets. You can write it with or without the title attribute. 
    
        [Google](http://www.google.com)

    *   If you are refering to a local resource on the same 
        server, you can use relative paths.

        Example: below is written like "[About]"(/about/) but without the quotes around the square brakets.

        See my [About](/about/) page for details.

    2.  _Reference Links_: use a second set of square brakets, inside which you placec a label of your choosing to identify the link. 

        Example: This is [an example][id] reference-style link

        Then anywhere on the document, you define your link label like this, on a line by itself:

        "[id]:" http//example.com/ "Optional Title Here" but without the quotes around the id and square brackets around it

        [id]: http://example.com/ "Optional Title Here"

<h2 style="color: blue;"> Style Elements </h2>

<h4 style="color: red;">Text Decorations</h4>

*   "double underscore or double asterisk" will create **BOLD**.
*   "single underscore or single asterisk" will create _italics_.
*   You can escape an asterisk or underscore with a backlash. \*   \\ 
*   "^2^" will create superscript. 
*   "~~" will create strikethrough.  ~~Done~~
*   "--" will create endash.
*   "---" will create emdash.
*   "..." will create ellipsis.

<h4 style="color: red;">Code</h4>

*   To indicate a span of code, wrap it with backtick quotes (`).  A code span indicates code within a normal paragraph

    Example:  Use the `printf()` function

<h4 style="color: red;">Images</h4>

*   Two styles of images in markdown. Inline and Reference.

    1.  _Inline_:   ![Alt Text](/path/tp/img.jpg Optional Title) with optional title wrapped in quotes

        ![Dog](/path/to/img.jpg "Dog")

    2.  _Reference_: ![Alt Text] "[id]" with no quotes and the id is wrapped in square brackets

        ![Dog][id]

        Then reference the id somewhere else in the document.
        [id]: url/to/image "optional title attribute". Remember the id must be wrapped in square brakets

<h2 style="color: blue;"> Miscellaneous </h2>

<h4 style="color: red;">Automatic Links</h4>

*   Simply surround the URL or email address with angle brackets. <>

    <http://www.google.com> or <joedirt@gmail.com>

<h4 style="color: red;">Escaping Characters</h4>

*   You can escape the following characters by using a backslash

    *   Backslash           \\
    *   Backtick            \`
    *   Asterisk            \*
    *   Underscore          \_
    *   Curly Braces        \{ }
    *   Square Brackets     \[ ]
    *   Parentheses         \( )
    *   Hash Mark           \#
    *   Plus Sign           \+
    *   Minus Sign          \-
    *   Dot                 \.
    *   Exclamation Mark    \!

<h4 style="color: red;">Inline Equations</h4>

*   $A = \pi*r^{2}$ will create an inline equation

<h4 style="color: red;">Tables</h4>

*   To make a Table separate the columns by | and under the header add -----

Table Header | Second Header | Third Header
-------------|---------------|-------------
Table Cell   | Cell 2 | Cell 3
Cell 4       | Cell 5 | Cell 6 





      

    




