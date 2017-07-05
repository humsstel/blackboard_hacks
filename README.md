# Blackboard Learn Hacks

A collection of simple UI improvements for Blackboard Learn via CSS and JavaScript. This method does not affect any page or content item other than the targeted elements, allowing for safe customisation at course level.  

## Prerequisites

Editing permission within a Blackboard Learn course is required. This is typically provided via the Instructor or Teaching Assistant role. The customisations below do not require System Administrator access and are designed to be non-technical, requiring little or no coding experience.

The following methods have been tested with Q2 2017 release and proven to work on the Google Chrome, Mozilla Firefox and Apple Safari browsers. An issue exists with the Review Status customisation in Internet Explorer which causes it not to display.   

## Deployment

All of the customisations work in the same way: 

1. Create a new Item (Build Content --> Item).
2. Enter the HTML editor. 
3. Copy and paste the JavaScript from the relevant .js file. 
4. Press Update and save the changes using the Submit button.
5. Done! 

The CSS stylesheets are currently hosted via GitHub, however, please feel free to download and amend the .js files if you prefer to host them elsewhere.

### Content Filter/Search

The Content Filter searches the title of each item listed on the page, returning those which match the text provided. As Blackboard only allows a single column view, having the facility to quickly filter content is particularly useful when multiple items are hidden from view.  

![Content Filter/Search](https://goo.gl/m6XedG)

### Modified Review Status

Although useful, the styling of Blackboard's Review Status makes it easy to miss. Therefore, its potential as an indicator for students to track which content they have engaged with is diminished. This hack restyles Review Status and offers alternative uses, such as a confirmation button (pictured below). 

![Modified Review Status inactive](https://goo.gl/cf4HVH)

![Modified Review Status active](https://goo.gl/VrvSvk)

### Remove Page Title

The grey title bar that appears at the top of each page takes up valuable page space, duplicating information that's otherwise available from the breadcrumb trail. Removing the title bar helps to declutter the Blackboard interface and raises the content underneath.

![Page title bar](https://goo.gl/IibW2v)

## Authors

* **Dan Harding** - Learning Technology Officer, Faculty of Humanities and Social Sciences, Keele University

## Acknowledgments

Original idea for using CSS and JavaScript to customise Blackboard styles is credited to:  
* **Andrew Abhrahamson** - Educational Technologies Engineer, Office of Educational Technology and Innovation, Boston University
* **Dan Hillman** - Assistant Director of Instructional Design, Boston University

Original presentation from BbWorld 2016 can be found at https://community.blackboard.com/docs/DOC-2103. 

## License

This project is licensed under the MIT License.
