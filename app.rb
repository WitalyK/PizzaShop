#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db" #создание бд

class Product < ActiveRecord::Base #создание таблицы (сущности)
end

get '/' do
	@product = Product.all
	erb :index
end

get '/about' do
	erb :about
end

post '/cart' do
  erb "Hello World"
end
