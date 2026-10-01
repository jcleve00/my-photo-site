# my-photo-site
## Custom CSS
- For the landing page image I wrote my own fade-in effect that sets the opacity transition in javascript. Bootstrap has a fade effect for some things, but I couldn't get it to behave how I wanted.
- I set the carousel fade  in CSS to give it more time to fade in and out as it cycled through the images.
- I adjusted the form styles in CSS because the form would be repeated on all pages. 
- I styled the thumbnails in CSS for the same reason. There's 32 of them and that would be a lot of unnecessarily repeated code.
- The rest of the CSS is basically color styles.
## Most Challenging Component
I think the most challenging component for me was the modal. Figuring out how to wire the modal to the thumbnail felt a little counter-intuitive. For example, the event listener goes on the modal and not on the thumbnail even though the thumbnail is the trigger. In order to figure that out I had to get a better understanding of relatedTarget. Then I had get the full image src path out of the thumbnails smaller image src path by slicing the string, which I then plugged into the modal img element. What makes Bootstrap so difficult to customize is how all of their classes talk to each other in ways that aren't necessarily easy to connect at first glance. 
## Easiest Component
Tooltip was by far the easiest! Just a few data attributes in the HTML and 2 lines of javascript to initialize it. 
## How Bootstrap Improved My Code
It made putting a finished product together faster that if I did it all from scratch. It probably would go faster if I had more practice with it. I think the code is reasonably easy to read and decipher just from the HTML for the most part. And the CSS is very light. The components should be reusable with minimal changes needing to be made to fit in other projects. 
## Like/Dislikes
I liked being able to drop in a component by just copy/pasting it into my project. That saves a lot of typing time. However, I did not like how difficult it can be to customize those components. I guess it's not that hard once you get a feel for it, but it can be frustrating. If you want a component to do something drastically different you'd probably be better off using their component as a guide and just writing it yourself. You can definitely get a sense of how hard it is to NOT churn out a cookie cutter site. Probably, best to just use bootstrap for some things and write your own code for other's so you can differentiate your site from all the rest. 