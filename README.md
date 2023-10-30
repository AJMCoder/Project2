# Elemental Clash

![Site view across different devices](/assets/images/resp-design.png)

Elemental Clash is an online game of chance based on the classic game of Rock, Paper, Scissors. Our goal is to create a fun experience for our users and fill the challengers with a feeling of joy and excitement as they battle the computer to see who the champion of Rock, Paper, Scissors can be. The users we expect to see visit this website and our estimated target audience would be those who played the game as a child, perhaps as a school-yard game, or those who are new to it and want to experience the classic game for the first time. Elemental Clash is for everyone.

Elemental Clash is a live webpage, it can be viewed here. https://ajmcoder.github.io/Project2/

## Features

### Existing Features:
- __Game Title & Logo__
    - The home page displays and outlines the game, full displaying the features in a clear and easy manner.
    - The intention of this section is to display to the user the game and draw them in visual and interest them in trying it out with the eye catching logo.

![Title & Logo](/assets/images/title.png)

- __Interactive Buttons__
    - The buttons for the website are full interactive and work on all devices. They highlight on hover over of the mouse and change colour upon selection.
    - The function of the buttons also determines the result and outcome of the results, and ultimately leads to either the result of player win or computer win.
    - Each button holds a value also, which is then stacked against the computers choice. If the value of the players choice is higher than the computers random selection then the player wins. If it is lower in value then the computer wins. If the computer and player select the same button value then it is a tie.

![Buttons](/assets/images/buttons.png)

- __Choice Display__
    - Upon first load, or reload, of the website, this section will always display a hint message of "Choose your move!" to assist the player in starting the game.
    - The choice display for the website shows the choices of both the player and the computer instantaniously upon selection.
    - In the same action, the script distinguishes who won, or calls a tie if both the player and computer select the same option.

![Choices](/assets/images/original-choice.png)
![Choices](/assets/images/choice-selection.png)

- __Scoring Tracker__
    - This section of the website shows the user the current score for both the user themselves and the computer. It tracks from 0, and increases in increments of 1 for ever round where they beat the computer, and also increases the computers score when they win, by the same incriment. 
    - It is coded so that if both the user and the computer select the same option, it results in a tie, meaning neither score a point. 
    - These value will continue to increase after each round, or until the user reloads the website, where the results will be reset. 

![Score Board](/assets/images/score-board.png)

- __Footer__
    - The footer section links the user to any available social platforms, where they can stay up to date with any changes or information about the site.
    - These links open in a new window, allowing the game site to stay open, so not to take the user away from the website completely and have the user navigate back easily.
    At the base of the footer is the Copyright and site name.

![Footer](/assets/images/footer.png)    

## Testing

### General Continuous Testing
- I tested the website on multiple browsers: Chrome and Firefox.
- I confirm that my website is responsive. It's form fits well to different devices and all standard screen sizes, and tested this through the devtools device toolbar.
- I tested the usability on mobile devices extensively, as originally i found that the logo took up 90% of the screen space. To fix this, i changed the max-width of the logo area.
- Through this testing on mobile, i also discovered that the scoring board and selection area were not quite within view on most generic mobile devices: Iphone 12 pro, Iphone XR, Samsung Galaxy s8+, and S20 Ultra. To fix this, i played around with the padding and  margin values, to find a happy medium to help display as much content as possible without squishing too much together.
- While testing the view on larger screen sizes, mainly PC and laptops, i could see that the logo was again slightly too large and resulted in the choice section and score tracker from being out of view. To fix this i added a max-width to the logo value in CSS.
During the testing of the site, i made sure that all of the available links works, such as the social media links and the 404 error page link too that takes you back to the main screen.

### Validator Testing
- HTML: No errors were returned during this test using the ![W3C validator](/assets/images/html-vali.png)

- CSS: No errors were returned during the test using the ![Jigsaw validator](/assets/images/ccs-vali.png) 

- JavaScript: No errors were returned during this testing using the [JSHint](https://jshint.com/) code quality checker. 

- Accessibility: This is the result of the Lighthouse ![test](/assets/images/lighthouse.png)

### De-bugging:
- Fixed an issue where the buttons were not centralised like the other part of the website, they were always off to the left of the screen. In the CSS file, I had set the display to flex which messed with the position of the buttons. I went into inspect element of the website and played around with removing and adding CSS and found removing the code fixed this issue.
- Fixed and issue where the logo was off center on small devices. I tested different widths within the CSS but it didnt make it central or smaller. I had to make a media query for smaller devices in order for this change to work and not affect it on larger screens.
- Fixed an issue with the JavaScript where the class name wasnt matching correctly with the code within the JavaScrip section causing the function to not work.
- Fixed an issue where I was not able to deploy the website due to the index.html, and style.css files being within another file. I separated the files and was then able to deploy the site on Github.
- Fixed an issue where the JS for the score system wasn't working and updating the score. To fix, I needed to move the 'return' function to below the command script for the score system so that the 'return' function would no longer kill the commands.

## Credits

### Media
- Image for the logo is sourced from [Google Images](https://www.google.com/search?q=rock+paper+scissors+free+image&tbm=isch&chips=q:rock+paper+scissors+free+image,online_chips:scissors+clipart:Vsuyf0zAz68%3D&rlz=1C1ASUM_enGB757GB757&hl=en&sa=X&ved=2ahUKEwjfjtn0g5GCAxUtmicCHQJCBSkQ4lYoA3oECAEQOw&biw=1903&bih=914).
- Favicon image is from [Flaticon](https://www.flaticon.com/free-icon/rock-paper-scissors_6851302).
- Font was obtained from [Google Fonts](https://fonts.google.com/specimen/Metal+Mania).

### Content/References
- Basic html structure and some of the CSS design was inspired by the Code Institute Tutorial for the Love Maths Project.
- The JavaScript code was learnt and inspired though the works of the Love Maths Project, [Bro Code](https://www.youtube.com/watch?v=n1_vHArDBRA) on YouTube, [FreeCodeCamp.org](https://www.youtube.com/watch?v=jaVNP3nIAv0) on YouTube, and from Mimo coding app.
- Used Github Co-Pilot for some of the JavaScript to assist with the functionality of it.


