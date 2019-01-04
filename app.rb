#encoding: utf-8
require 'rubygems'
require 'sinatra'
require 'sinatra/reloader'
require 'sinatra/activerecord'

set :database, "sqlite3:pizzashop.db" #создание бд

class Product < ActiveRecord::Base #создание таблицы (сущности)
end

class Order < ActiveRecord::Base #создание таблицы (сущности)
	validates :name, presence: true
	validates :phone, presence: true
	validates :adress, presence: true
end

get '/' do
	@product = Product.all
	erb :index
end

get '/about' do
	erb :about
end

get '/admin' do
  @cc = Order.order('created_at DESC')
  erb :admin
end

post '/cart' do
	@orders_input = params[:orders]
	@items = parse_orders_input @orders_input
	if @items.length == 0
		return erb :cart_is_empty
	end
	@items.each do |item|
		item[0] = Product.find(item[0]) #переопределяем ид объектом строкой
	end

  	erb  :cart # "Hello #{@orders.inspect}"
end

post '/order' do
    c = Order.new params[:order]
    if c.save
    	erb  :order_placed
    else
       	@error = c.errors.full_messages[0]
      	return erb "Error"
    end
end

def parse_orders_input orders_input
	s1 = orders_input.split(/,/)
	arr = []
	s1.each do |x|
		s2 = x.split(/\=/)
		s3 = s2[0].split(/_/)
		arr2 = [s3[1],s2[1]]
		arr.push arr2
	end
	return arr
end