# CHARACTER CREATION PAGE
## HTML setup
        A) Form
            1. Input
                -To get the user name
            2. radio buttons
                -to get the user class
            3. submit button
                -to tell the code to run
## event
        A) On click! (submit)
            1. Get the user's class and name from the form
            2. Put that info in localStorage
                -Class
                -Race
                -Name
                -completed {}
                -initial gold
                -initial hp
            3. Redirect to the quest list page/map

# QUEST LIST PAGE (map)
## HTML setup
    1. <ul></ul>
        -Because we need a place to inject our quest links, and they aren't hard-coded
        -hovering over the links of the different quests will show the different quest id links
        -no events, just loop through quest data to render links for each quest
        -will use quearySelector to do the loops to find it, and use ${}


# QUEST DETAIL PAGE (quest)
## HTML setup
    1. A div to append our quest to
    2. DYnamically generate the whole quest

## Event
    1. On submit (when user selects a quest)
        -Show user the results
        -Update localStorage w/
            -New gold value
            -new HP value
            -new compelted quest value
        -After 5 seconds,
# RESULTS PAGE  