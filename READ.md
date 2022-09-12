This is an app where english language is converted into fern latin language.
Code is written with javascript, html and css.
user gives input and input is taken by program through API using querySelect().
the provided input is sent to the server using fetch() and response is generated.
the response is then stored in json() format. the response is the translation of the input.
then the translated language is retrived from json.content.translated file.
And shown as output to the user.