class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :username
      t.string :name
      t.string :cohort
      t.boolean :alumni, default: false
      t.timestamps
    end
  end
end
