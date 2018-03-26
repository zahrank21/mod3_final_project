class CreateCommunityFridges < ActiveRecord::Migration[5.1]
  def change
    create_table :community_fridges do |t|
      t.string :name
      t.timestamps
    end
  end
end
