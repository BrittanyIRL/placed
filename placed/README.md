#Placed
This was honestly just a good learning mechanism for the different parts of React without overly complicating the concept. My mother in law asks me to set the table sometimes when we go over to their home for dinner, every single time I do it wrong so I thought this would be silly and also educational on every level. Table placement etiquette mostly makes me roll my eyes, I have better things to worry about, but looked at as a developer - it's way more interesting! Each item in a place setting has an ordering and an affiliation, so it was a great way to link components and create a redux store that can be reused. So that's what this is.

## Uses
- React
- Firebase
- Enzyme
- Jest
- Redux

## Architecture
As it stands currently, there's 2 sections of this project, both found in `src/containers` - one is called PlaceSettings and the other is SettingQuiz.

PlaceSettings renders different standard types of place settings based on buttons selected. When a button is clicked it fetches fro redux updated state and processes that to the container props which triggers a component update. The data structure in firebase where the setting order/legend/options are all stored is in arrays, which allows us to map to a component that sets each setting and organizes the structure. Each item is it's own unit. Sometimes that makes for a weird display, since my aim here isn't total beauty I only spent a little bit of time of the edge cases using flexbox for this present.

SettingQuiz are 2 forms that allow you to update the UI differently. The "Fancy" one will ask about courses and options and render an actual place setting that's tailored to your uses. I was able to recycle a lot of code from PlaceSetting to do this. The other one is silly and more my stance on actual place setting, it's just a set of 4 different options and uses all local state - different from the other pages which use redux to manage it. But since there's no interaction with an API for the "fun" quiz, it seemed like overkill.

The two quizzes also allow me to use some form elements and validation.

## Todo
- More tests!
- Totally skipped over documenting code on this, that's my bad completely, was just excited to be working on it. Need to go back and fix that.
- Eventually it would be nice to spend more time on the styles here. That's my strong suit.
