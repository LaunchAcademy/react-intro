require 'sinatra'
require 'sinatra/reloader'

configure :development, :test do
  require 'pry'
end

Dir[File.join(File.dirname(__FILE__), 'lib', '**', '*.rb')].each do |file|
  require file
  also_reload file
end

get '/classic' do
  erb :classic
end

get '/react_example' do
  erb :react_example
end
