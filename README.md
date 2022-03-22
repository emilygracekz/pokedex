## Follow-up Questions

Please take some time to answer the following questions. Your answers should go directly in this `readme`.

- Given more time, what would you suggest for improving the performance of this app?

    - Caching API data after the details of a certain pokemon is loaded
    - Switching from Create-React-App to a different framework with more features build in, like Next.js or Remix Run
    - This is something I did do, but I changed && to ternary operators to be explicit with whats rendered when there's a falsy case (https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx)
    - Parsing API data in PokemonSearch before passing it into PokemonDetailsCard so PokemonDetailsCard doesn't have to do any mapping, etc. 
    - Dynamically importing PokemonDetailsCard (code-splitting)
    - Lazy loading the pokedex 

- Is there anything you would consider doing if we were to go live with this app?

    - I'd change the data that's passed into PokemonDetailsCard, particularly for the moves prop. Right now I'm passing in all the moves for a Pokemon and hard coded displaying the first four. This obviously isn't great, clean code
    - I'd go through the HTML a bit more closely to ensure it's semantic
    - I'd add end-to-end testing
    - I'd consider adding picture displays on the pokemon, which would be easy to optimize if we were using Next.js
    - I would add loading states 
    - I'd review the architecture a bit more closely and see if I can isolate states better
    - I'd add a CSS library like Emotion of Styled Components so CSS can stay localized to the component for maintainability
    - I'd add error handling, especially for the API calls

- What was the most challenging aspect of this work for you (if at all)?

    - I don't think this was very challenging. I struggled to find the correct API data for the evolution chain, but I blame this on poor API design. I know the evolution chain isn't displaying correctly for each pokemon
    - I tried to pick up on and maintain consistencies (i.e. className names)
    - I don't think my CSS is the best 