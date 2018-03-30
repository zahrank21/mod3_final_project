class CreateMiscs < ActiveRecord::Migration[5.1]
  def change
    create_table :miscs do |t|
      t.string :thing
      t.string :code
      t.timestamps
    end
  end
end
