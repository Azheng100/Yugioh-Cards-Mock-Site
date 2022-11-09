# **The Shadow Realm Dealershop**
<picture>
 <source media="(prefers-color-scheme: dark)" srcset="https://media.tenor.com/y-26Qmqp42cAAAAM/monday-duel.gif">
 <source media="(prefers-color-scheme: light)" srcset="https://media.tenor.com/y-26Qmqp42cAAAAM/monday-duel.gif">
 <img alt="YOUR-ALT-TEXT" src="https://media.tenor.com/y-26Qmqp42cAAAAM/monday-duel.gif">
</picture>

## *Description*:
*This is simply a fan project and not an actual card selling website.*

Yugioh is a popular Japanese card game made for children and played by Adults that are willing to pay for overpriced cardboard pieces. Instead of helping my fellow duelists make better financial choices, I will instead build a website that will spiral us further down in debt. As we all know, the real way to become the next YCS champion is to spend money lots of money and play Ishizu Tear mirror matches with chain link 8 on turn 2 30 minutes in. Or just buy older cards to play GOAT or Edison format. 

I will be using the YGOprodeck api as the card repository. The project will be built using the react js platform. Cards will be put on a master list to display all the available cards in the game. There will be a search function to expedite this process. I plan to make a mock shopping feature that will let players see how much money they would be spending on their total card purchase if they were to actually buy cards. As a bonus feature, I will make a pack opening simulator for the LOB set. I do not expect the pack simulator to accurately reflect the actual rates of pulling certain cards but it is certainly fun pressing the open cards button. 




### *How to get started*:
You can simply fork this into your github repo and clone this on your terminal. Simply npm start under the ygo-react-project to open react. 

You can also access the netlify site through [this link](https://azyugiohmocksite.netlify.app/ )

#### *Technologies used*: 
This was built with react js platform. I had to npm install react router dom and axios components. 

##### *Contribution Guidelines*:
The website is simply a fan project. Improvements to it would be a proper and more accurate result when opening the booster pack. The cart component has a bug where react does not like it when the same card is added to the array due to the cards sharing the same key id. However, the functionality of the cart is not harmed. Mobile view also needs to be optimized. Lasly, cards can still be bought as the price of 0 even if they are not available. 

Wireframe
<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Azheng100/Yugioh-Cards-Mock-Site/main/ygoprojectwireframe.jpeg">
 <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Azheng100/Yugioh-Cards-Mock-Site/main/ygoprojectwireframe.jpeg">
 <img alt="YOUR-ALT-TEXT" src="https://raw.githubusercontent.com/Azheng100/Yugioh-Cards-Mock-Site/main/ygoprojectwireframe.jpeg">
</picture>

Component Hierarchy Diagram
<picture>
<source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Azheng100/Yugioh-Cards-Mock-Site/main/ygoprojectcomp.jpeg">
 <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Azheng100/Yugioh-Cards-Mock-Site/main/ygoprojectcomp.jpeg">
 <img alt="YOUR-ALT-TEXT" src="https://raw.githubusercontent.com/Azheng100/Yugioh-Cards-Mock-Site/main/ygoprojectcomp.jpeg">
</picture>

[Wireframe Home page link](https://wireframe.cc/81zfXo )

[Api link](https://db.ygoprodeck.com/api/v7/cardinfo.php)

[Tello Board link](https://trello.com/b/rGKsoNgl/yugioh-card-site-react)


###### Credit:
*[Learning DOM manipulation for hide and display buttons](https://www.youtube.com/watch?v=8YNeCyQtPo0)
*[Learning search bar function](https://www.youtube.com/watch?v=x7niho285qs)
*[Learning useContext for shopping cart](https://www.youtube.com/watch?v=3yrMcx02jXs)


