class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      t.integer :album_id, null: false
      t.string :image_url, null: false
      t.string :date_taken
      t.string :file_name
      t.string :image_type, null: false

      t.timestamps null: false
    end

    add_index :images, :user_id
    add_index :images, :album_id
  end
end
