class CreateMealpals < ActiveRecord::Migration[5.1]
  def change
    create_table :mealpals do |t|
      t.integer :user_id
      t.string :referral_link
      t.integer :count
      t.date :expiration_date
      t.timestamps
    end
  end
end
