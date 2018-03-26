class CreateFoods < ActiveRecord::Migration[5.1]
  def change
    create_table :foods do |t|
      t.string :type_of_food
      t.boolean :in_fridge, default: true
      t.integer :count
      t.integer :community_fridge_id
      t.timestamps
    end
  end
end
