require "sinatra"

get '/' do
  erb :home, layout: false
end

get '/demo' do
  erb :demo, layout: false
end

get '/test' do
  "<h1>Hello World</h1>"
end

