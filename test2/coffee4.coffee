 class SearchResult
    constructor: (data) ->
        @title = data.title
        @link = data.link
        @extras = data
    
    toHtml: -> "<a href='#{@link}'>#{@title}</a>"
    toJson: -> JSON.stringify @extras

 class GoogleSearchResult extends SearchResult
    constructor: (data) ->
        super data
        @content = @extras.content
    toHtml: ->
        "#{super} <div class='snippet'>#{@content}</div>"

#my class
 class Super
    constructor :(name) -> 
        @name = name
    sayName: -> console.log @name

 class Sub extends Super
    
    consturctor: (name,age) ->
        @age = age
        Super name 
        true      
    sayAge: -> console.log @age
