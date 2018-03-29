class CreateHackathons < ActiveRecord::Migration[5.1]
  def change
    create_table :hackathons do |t|
      t.string :name
      t.string :language
      t.datetime :datetime
      t.string :location
      t.timestamps
    end
  end
end
