class CreateProducts < ActiveRecord::Migration[5.2]
  def change
  	create_table :products do |t|
  		t.string 		:title
  		t.text			:description
  		t.decimal		:price
  		t.decimal 		:size
  		t.boolean		:is_spicy
  		t.boolean		:is_veg
  		t.boolean		:is_best_offer
  		t.string		:path_to_image
  		t.timestamps
  	end
    create_table :orders do |t|
      t.text      :name
      t.text      :phone
      t.text      :adress
      t.text      :goods
      t.timestamps
    end
  end
end
